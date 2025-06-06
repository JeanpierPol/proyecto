import TitlePage from "./WYSIWYG/titlePage";
import ContentPage from "./WYSIWYG/ContentPage";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStory } from "../../context/StoryContext";
import StoryImageComponent from "../imagenComponent/StoryImageComponent";
import { useState } from "react";
import Loading from "../Loading";

const BuildStoryForm = () => {
    const { storyId } = useParams();
    const { getStory, story } = useStory();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (storyId) {
            getStory(storyId).finally(() => setLoading(false));
        }
    }, [storyId])

    if (loading) return <Loading />;

    const onclick = () => console.log(story)

    return (
        <>
            <form onClick={onclick}>

                <div className="sticky-top bg-white shadow-sm py-2">
                    <nav className="navbar">
                        <div className="container-fluid d-flex justify-content-between align-items-center">

                            <div className="d-flex align-items-center gap-3">
                                <StoryImageComponent
                                    src={story.coverImg}
                                    width={60}
                                />
                                <h5 className="mb-0">{story.title}</h5>
                            </div>

                            <button type="button" className="btn btn-primary">
                                Publicar
                            </button>

                        </div>
                    </nav>
                </div>

                <div className="container mt-5">

                    <TitlePage defaultValue="Titulo"

                    />
                    <hr />
                    <ContentPage
                        defaultValue="Descripcion"
                        className="mt-5"

                    />

                </div>
            </form>


        </>
    )
}

export default BuildStoryForm;