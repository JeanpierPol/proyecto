import StoriesContainer from "../../components/story/StoriesContainer";
import { useEffect } from "react";
import { useStory } from "../../context/StoryContext";
import { useParams } from "react-router-dom";

const UserStoryPage = () => {
    const { getStoryByUser, stories } = useStory();
    const { userId } = useParams();

    useEffect(() => {
        getStoryByUser(userId);
    }, [])

    return (
        <div className="container">
            <StoriesContainer stories={stories}

            />
        </div>
    )
}

export default UserStoryPage;