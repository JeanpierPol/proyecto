import Page from "../models/Page.js";
import CRUDServices from "./CRUDService.js";
import { ObjectId } from "mongodb"
import buildPageTree from "../utils/buildPageTree.js";
const pageServices = new CRUDServices(Page, 'Page');

const createPage = async (data) => {
    const newPage = await pageServices.insertData(data);
    const { parentPage, _id: newPageId } = newPage;

    if (parentPage) {
        await pageServices.editData(parentPage, {
            $push: { children: newPageId },
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


export { createPage, getPagesByStory };
