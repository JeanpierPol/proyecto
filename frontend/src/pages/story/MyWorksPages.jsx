import { useEffect } from "react";
import { useStory } from "../../context/StoryContext";
import StoriesContainer from "../../components/story/StoriesContainer";
import { useAuth } from "../../context/AuthContext";

const MyWorksPage = ({ }) => {
    const { getStoryByUser, stories } = useStory();
    const { user } = useAuth();
    useEffect(() => {
        getStoryByUser(user.id);
    }, [])


    return (
        <>
            <div className="container">
                <StoriesContainer stories={stories}

                />
            </div>

              <div className="container">
                

                
            </div>



        </>
    )
}

export default MyWorksPage