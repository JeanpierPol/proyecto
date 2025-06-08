import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePage } from "../context/PageContext";
const StoryPagesViewPage = () => {
    const { getPagesByStory, pages } = usePage();
    const { storyId } = useParams();

    useEffect(() => {
        if (storyId) {
            getPagesByStory(storyId)
        }
    }, [storyId])

    console.log(pages)
    return (
        <>
            <h1>Hola</h1>
        </>

    )
}

export default StoryPagesViewPage;