import Page from "../models/Page.js";
import Answer from "../models/Answer.js";
import CRUDServices from "./CRUDService.js";
import { ObjectId } from "mongodb"
import buildPageTree from "../utils/buildPageTree.js";
const pageServices = new CRUDServices(Page, 'Page');

const createPage = async (data) => {
    const newPage = await pageServices.insertData(data);
    const { parentPage, _id: newPageId } = newPage;
    const { responseText } = data

    if (parentPage && responseText) {
        const newAnswer = await Answer.create({
            text: responseText,
            questionPage: parentPage,
            nextPage: newPageId
        });

        await pageServices.editData(parentPage, {
            $push: { answer: newAnswer._id }
        });
    }

    return newPage;
};

const getPagesByStory = async (storyId) => {
    const tree = await Page.aggregate([
        {
            $match: {
                storyId: ObjectId.createFromHexString(storyId),
                parentPage: null
            }
        },
        {
            $graphLookup: {
                from: 'pages',
                startWith: '$_id',
                connectFromField: '_id',
                connectToField: 'parentPage',
                as: 'flatChildren'
            }
        }
    ]);

    const result = tree.map(root => {
        const all = [root, ...root.flatChildren];
        return buildPageTree(all.map(doc => doc.toObject ? doc.toObject() : doc))[0];
    });

    return result;
};

const getPage = (id) => pageServices.getDataById('_id', id)


export { createPage, getPagesByStory, getPage };
