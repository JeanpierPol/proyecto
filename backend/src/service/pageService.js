import Page from "../models/Page.js";
import CRUDServices from "./CRUDService.js";

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



const getPagesByStory = async (storyId) => await Page.find({ storyId }).populate('author', 'name')

export { createPage, getPagesByStory };
