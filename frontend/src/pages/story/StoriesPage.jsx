import { useEffect } from "react";
import { useStory } from "../../context/StoryContext";
import StoriesContainer from "../../components/story/StoriesContainer";

const StoriesPage = () => {
    const { getStories, stories } = useStory();
    useEffect(() => {
        getStories();
    }, [])

    return (
        <div className="container">
            <StoriesContainer stories={stories}

            />
        </div>

    )
}

export default StoriesPage;