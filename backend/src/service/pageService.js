import Page from "../models/Page.js";
import CRUDServices from "./CRUDService.js";
import Story from "../models/Story.js";
const pageServices = new CRUDServices(Page, 'Page');

const createPage = async (data) => {
    const { parentPage } = data;

    if (parentPage) {
        const parent = await pageServices.getDataById('_id', parentPage);

        if (!parent) {
            throw new Error('Página padre no encontrada.');
        }

        if (!parent.question) {
            throw new Error('No se puede ramificar una página que no tiene una pregunta.');
        }
    }

    const newPage = await pageServices.insertData(data);
    const { _id: newPageId, storyId } = newPage;

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


const getPageWithChildren = async (pageId) => {
    const page = await Page.findById(pageId).populate('author', 'nickname _id');

    const children = await Page.find({ parentPage: page._id });

    page.children = await Promise.all(children.map(child => getPageWithChildren(child._id)));

    return page;
};

const getPage = async (pageId) => await getPageWithChildren(pageId);

const getPageByUser = async (userId) => {
  const pages = await Page.find({ author: userId })
    .populate('parentPage', 'title _id')
    .populate('children', 'title _id')
    .populate('storyId', 'title _id')
    .populate('author', 'nickname _id');

  return pages;
};


export { createPage, getPageWithChildren, getPage, getPageByUser };
