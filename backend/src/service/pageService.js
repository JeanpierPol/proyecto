import Page from "../models/Page.js";
import CRUDServices from "./CRUDService.js";
import Story from "../models/Story.js";
const pageServices = new CRUDServices(Page, 'Page');

const createPage = async (data) => {
    const newPage = await pageServices.insertData(data);
    const { parentPage, _id: newPageId, storyId } = newPage;

    if (parentPage) {
        await pageServices.editData(parentPage, {
            $push: { children: newPageId },
        });
    } else {
        await Story.findByIdAndUpdate(storyId, {
            rootPage: newPageId,
        });
    }

    return newPage;
};

const getPageChildren = async (page) => {
    await page.populate('author', 'nickname _id');

    const children = await Page.find({ parentPage: page._id });
    page.children = await Promise.all(children.map(async (child) => {
        return await getPageChildren(child);
    }));

    return page;
};


const getPage = (id) => pageServices.getDataById('_id', id)


export { createPage, getPageChildren, getPage };
