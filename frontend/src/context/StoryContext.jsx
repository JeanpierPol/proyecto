import { createContext, useContext, useState } from "react";
import { createStoryRequest, } from "../api/story";
import { useFeedback } from "./FeedbackContext";
const StoryContext = createContext();

export const useStories = () => {
    const context = useContext(StoryContext);
    if (!context) throw new Error("useStories must be used within a StoryProvider");
    return context;
};

export function StoryProvider({ children }) {
    const [Stories, setStories] = useState([]);
    const { showSuccess, showError } = useFeedback();


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
                Stories,
                createStory,
            }}
        >
            {children}
        </StoryContext.Provider>
    );
}