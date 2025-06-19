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


    console.log(story)
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
                            <div>
                                <p>{story.description}</p>
                                <h4>Categorias</h4>
                                {story.tags && story.tags.map(tag => (
                                    <span key={tag._id} className="badge bg-primary me-1">{tag.key}</span>
                                ))}


                            </div>
                        }
                        author={
                            <Link to={`/user/${story?.author?._id}/story`} className="text-decoration-none">{story?.author?.nickname}</Link>
                        }
                    >

                        <div className="container d-flex gap-2 mt-3">
                            <Link to={`/story/${story._id}/page/tree`} className="btn btn-primary btn-lg">
                                Ver Ramas
                            </Link>

                            {story.rootPage && (
                                <Link
                                    to={`/story/${story._id}/page/${typeof story.rootPage === 'object' ? story.rootPage._id : story.rootPage}`}
                                    className="btn btn-primary btn-lg"
                                >
                                    Empezar a leer
                                </Link>
                            )}
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