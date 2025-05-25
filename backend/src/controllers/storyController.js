import { getAllStories, createStory } from '../service/storyService.js';

const storyController = {
    getStoriesController:[
        async (req, response) => {
            try {
                const stories = await getAllStories();
                response.status.json(stories)
                
            } catch (error) {
                response.status(500).json({ error: error.message });
            }
        }
    ],

    createStoryController :[
        async (req, response) => {
            try {
                // const { title, description, author, rootPage, tags, isPublic } = req.body;
                const coverImg = req.file.path || null; 
                const newStory ={
                    ...req.body,
                    coverImg
                }
                const story = await createStory(newStory);
                response.status.json('Historia creada correctamente')
            } catch (error) {
                response.status(500).json({ error: error.message });
            }
        }
    ]
}

export default storyController;
