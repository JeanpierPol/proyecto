import { useEffect } from "react";
import ContainerStory from "../components/story/ContainerStory";
import { useStory } from "../context/StoryContext";
import { useNavigate, useParams } from "react-router-dom";
import StoryImageComponent from "../components/imagenComponent/StoryImageComponent";
import Loading from "../components/Loading";

const StoryPage = () => {
    const params = useParams();
    const { getStory, story } = useStory();

    useEffect(() => {
        if (params.id) {
            getStory(params.id)
        }
    }, [params.id])

    console.log(story)
    return (
        <div className="container h-100">
            {story ? (
                <ContainerStory
                    title={
                        <h2>{story.title}</h2>
                    }
                    img={
                        <StoryImageComponent src={story.coverImg} className="w-100 mb-3" />
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