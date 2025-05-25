import Story from "../models/Story.js";
import CRUDServices from "../service/CRUDService.js";

const storyServices = new CRUDServices(Story, 'Story');

const createStory = (data) => storyServices.insertData(data)

const getAllStories = () => storyServices.getAllData();

export { createStory, getAllStories }