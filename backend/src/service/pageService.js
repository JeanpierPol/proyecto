import Page from "../models/Page.js";
import CRUDServices from "./CRUDService.js";

const pageServices = new CRUDServices(Page, 'Page');

const createPage = async (data) => await pageServices.insertData(data);

const getPagesByStory = async (storyId) => await Page.find({ storyId }).populate('author', 'name avatar')

export { createPage, getPagesByStory };
