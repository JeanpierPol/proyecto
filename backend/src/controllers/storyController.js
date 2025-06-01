import { getAllStories, createStory } from '../service/storyService.js';

const storyController = {
    getStoriesController:[
        async (req, res) => {
            try {
                const stories = await getAllStories();
                res.status(200).json(stories);
                
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
    ],

    createStoryController :[
        async (req, res) => {
            try {
                const coverImg = req.file?.publicUrl || null;
                const newStory ={
                    ...req.body,
                    coverImg,
                    author: req.userId
                }
                const story = await createStory(newStory);
                res.status(200).json("Hisotria creada correctamente");
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
    ]
}

export default storyController;
