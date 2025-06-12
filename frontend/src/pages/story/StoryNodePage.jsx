import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStory } from "../../context/StoryContext";
import TreeNode from "../../components/TreeNode"; 
import Loading from "../../components/Loading";

const StoryNodePage = () => {
    const { storyId } = useParams();
    const { story, getStory } = useStory();

    useEffect(() => {
        if (storyId) {
            getStory(storyId);
        }
    }, [storyId]);

    if (!story || !story.rootPage) {
        return <Loading />;
    }

    return (
        <>
            <div className="container mt-4 mb-5"> 
                <h1 className="text-center mb-4">Árbol de páginas de: {story.title}</h1>
                <div className="tree-container d-flex justify-content-center"> 
                    <ul className="tree">
                        <TreeNode node={story.rootPage} />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StoryNodePage;