import { useEffect } from "react";
import ContainerStory from "../../components/story/ContainerStory";
import { useStory } from "../../context/StoryContext";
import { Link, useParams } from "react-router-dom";
import StoryImageComponent from "../../components/imagenComponent/StoryImageComponent";
import Loading from "../../components/Loading";

const StoryPage = () => {
    const { storyId } = useParams();
    const { getStory, story } = useStory();

    useEffect(() => {
        if (storyId) {
            getStory(storyId)
        }
    }, [storyId])

    return (
        <>
            <div className="container h-100 mt-3">
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
                        author={
                            <Link to={`/user/${story?.author?._id}/story`} className="text-decoration-none">{story?.author?.nickname}</Link>
                        }
                    >

                        <div className="container">
                            <Link to={`/story/${story._id}/page/tree`} className="btn btn-primary btn-lg">Ver historia</Link>
                        </div>

                        <div className="container">
                            {story.rootPage &&
                                <Link
                                    to={`/story/${story._id}/page/${typeof story.rootPage === 'object' ? story.rootPage._id : story.rootPage}`}
                                    className="btn btn-primary btn-lg"
                                >
                                    Empezar a leer
                                </Link>
                            }

                        </div>

                        <div className="container">
                            <Link to={``} className="btn btn-primary btn-lg">Crear pagina</Link>
                        </div>

                    </ContainerStory>

                ) : (
                    <Loading />
                )}
            </div>

        </>
    );

}

export default StoryPage;