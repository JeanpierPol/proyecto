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

const getPagesByStory = async (storyId) => {
    const pages = await Page.find({ storyId }).lean();

    const pageMap = {};
    pages.forEach(page => {
        page.children = [];
        pageMap[page._id.toString()] = page;
    });

    const rootPages = [];

    pages.forEach(page => {
        if (page.parentPage) {
            const parent = pageMap[page.parentPage.toString()];
            if (parent) {
                parent.children.push(page);
            }
        } else {
            rootPages.push(page);
        }
    });

    return rootPages;
};


const getPage = (id) => pageServices.getDataById('_id', id)


export { createPage, getPagesByStory, getPage };
