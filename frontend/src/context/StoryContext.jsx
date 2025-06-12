import { createContext, useContext, useState } from "react";
import { createStoryRequest, getStoriesRequest, getStoryRequest } from "../api/story";
import { useFeedback } from "./FeedbackContext";
const StoryContext = createContext();

export const useStory = () => {
    const context = useContext(StoryContext);
    if (!context) throw new Error("useStory must be used within a StoryProvider");
    return context;
};

export function StoryProvider({ children }) {
    const [stories, setStories] = useState([]);
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(false);
    const { showSuccess, showError } = useFeedback();

    const getStories = async () => {
        setLoading(true);
        try {
            const res = await getStoriesRequest();
            setStories(res.data);
        } catch (error) {
            console.log(error);
            showError(error.response?.data?.error)
        }finally{
            setLoading(false);
        }
    }

    const getStory = async (id) => {
        setLoading(true);
        try {
            const res = await getStoryRequest(id);
            setStory(res.data)
        } catch (error) {
            console.log(error);
            showError(error.response?.data?.error)
        }finally{
            setLoading(false)
        }
    }

    const createStory = async (story) => {
        try {
            const res = await createStoryRequest(story);
            console.log(res.data);
            showSuccess(res.data)
        } catch (error) {
            console.log(error);
            showError(error.response?.data?.error)
        }
    };



    return (
        <StoryContext.Provider
            value={{
                stories,
                story,
                loading,
                createStory,
                getStories,
                getStory,
            }}
        >
            {children}
        </StoryContext.Provider>
    );
}