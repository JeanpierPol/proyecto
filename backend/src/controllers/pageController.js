import { createPage, getPagesByStory, getPage } from "../service/pageService.js";
import { createPageValidations } from "../validations/pageValidations.js";

const createPageController = [
    ...createPageValidations,
    async (req, res) => {
        try {
            const { storyId, title, content, pageId, question, responseText } = req.body;
            const userId = req.userId;

            const newPage = await createPage({
                storyId,
                title,
                content,
                parentPage: pageId || null,
                author: userId,
                question: question || null,
                responseText: responseText || null,
            });

            res.status(201).json(newPage);
        } catch (error) {
            console.error("Error al crear página:", error);
            res.status(500).json({ error: error?.message || error });
        }
    }
];


const getPagesByStoryController = [
    async (req, res) => {
        try {
            const { storyId } = req.params;
            const pages = await getPagesByStory(storyId);
            res.status(200).json(pages);
        } catch (error) {
            console.error("Error al obtener páginas:", error);
            res.status(500).json({ error: "Error al obtener páginas" });
        }
    }
]


const getPageController = [
    async (req, res) => {
        try {
            const { pageId } = req.params;
            const page = await getPage(pageId)
            res.status(200).json(page)

        } catch (error) {
            console.error("Error al obtener páginas:", error);
            res.status(500).json({ error: "Error al obtener páginas" });

        }
    }
]

export { createPageController, getPagesByStoryController, getPageController };
