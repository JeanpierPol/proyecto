import { createContext, useContext, useState } from "react";
import { getAllTag } from "../api/tag";
import { useFeedback } from "./FeedbackContext";
const TagContext = createContext();

export const useTag = () => {
    const context = useContext(TagContext);
    if (!context) throw new Error("useTag must be used within a tagProvider");
    return context;
};

export const TagProvider = ({ children }) => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const { showSuccess, showError } = useFeedback();


    const getTags = async () => {
        setLoading(true)
        try {
            const res = await getAllTag();
            setTags(res.data);
            return res.data;
        } catch (error) {
            showError(error.response?.data?.error || "No se pudo obtener las categorias");
            throw error;
        }finally{
            setLoading(false)
        }
    }

    return (
        <TagContext.Provider
            value={{
                tags,
                getTags,
                loading
            }}
        >
            {children}
        </TagContext.Provider>
    );
};
