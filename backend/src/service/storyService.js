import Story from "../models/Story.js";
import CRUDServices from "../service/CRUDService.js";
import { getPageWithChildren } from "./pageService.js";
const storyServices = new CRUDServices(Story, 'Story');

const createStory = (data) => storyServices.insertData(data)

const getAllStories = async (req, res) => {
    const stories = await Story.find()
        .populate('author', 'nickname _id')
        .populate('tags', 'key translations _id');

    return stories
};


const getStory = async (storyId) => {
    const story = await Story.findById(storyId)
        .populate('author', 'nickname _id')
        .populate('rootPage')
        .populate('tags', 'key translations _id');

    if (!story) throw new Error('Historia no encontrada');

    const rootPage = story.rootPage
        ? await getPageWithChildren(story.rootPage._id)
        : null;

    return {
        ...story.toObject(),
        rootPage,
    };
};

const getStoryByUser = (id) => storyServices.getDataById('author', id);

export { createStory, getAllStories, getStory, getStoryByUser }