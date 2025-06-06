import { useEffect } from "react";
import ContainerStory from "../components/story/ContainerStory";
import { useStory } from "../context/StoryContext";
import { useParams } from "react-router-dom";
import StoryImageComponent from "../components/imagenComponent/StoryImageComponent";
import Loading from "../components/Loading";

const StoryPage = () => {
    const { storyId } = useParams();
    const { getStory, story } = useStory();

    useEffect(() => {
        if (storyId) {
            getStory(storyId)
        }
    }, [storyId])

    return (
        <div className="container h-100">
            {story ? (
                <ContainerStory
                    title={
                        <h2>{story.title}</h2>
                    }
                    img={
                        <StoryImageComponent src={story.coverImg} className="w-100 mb-3 cover" />
                    }
                    description={
                        <p>{story.description}</p>
                    }
                />
            ) : (
                <Loading />
            )}
        </div>

    );

}

export default StoryPage;