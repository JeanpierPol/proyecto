import { getAllTag } from "../service/tagService.js";

const getAllTagController = [
    async (req, res) => {
        try {
            const tags = await getAllTag()
            res.status(200).json(tags)

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
]

export { getAllTagController }