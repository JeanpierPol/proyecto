import Story from "../models/Story.js";
import CRUDServices from "../service/CRUDService.js";
import { getPageChildren } from "./pageService.js";
const storyServices = new CRUDServices(Story, 'Story');

const createStory = (data) => storyServices.insertData(data)

const getAllStories = () => storyServices.getAllData();

const getStory = async (storyId) => {
    const story = await Story.findById(storyId)
        .populate('author', 'nickname _id')
        .populate('rootPage');

    if (!story) throw new Error('Historia no encontrada');

    let rootPage = null;

    if (story.rootPage) {
        rootPage = await getPageChildren(story.rootPage);
    }

    return {
        ...story.toObject(),
        rootPage,
    };
};

export { createStory, getAllStories, getStory }