import Page from "../models/Page.js";
import Answer from "../models/Answer.js";
import CRUDServices from "./CRUDService.js";
const pageServices = new CRUDServices(Page, 'Page');

const createPage = async (data) => {
    const newPage = await pageServices.insertData(data);
    const { parentPage, _id: newPageId } = newPage;
    const { responseText } = data

    if (parentPage && responseText) {
        const newAnswer = await Answer.create({
            text: responseText,
            questionPage: parentPage,
            answerPage: newPageId
        });

        await pageServices.editData(parentPage, {
            $push: { answer: newAnswer._id }
        });
    }

    return newPage;
};

const getPagesByStory = async (storyId) => {
    const pages = await Page.find({ storyId })
        .populate({
            path: 'answer',
            populate: { path: 'answerPage' }
        })
        .lean();

    const rootPages = pages.filter(page => !page.parentPage);
    
    return rootPages;
};

const getPage = (id) => pageServices.getDataById('_id', id)


export { createPage, getPagesByStory, getPage };
