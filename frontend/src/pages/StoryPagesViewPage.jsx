import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePage } from "../context/PageContext";
import TreeNode from "../components/TreeNode";
const StoryPagesViewPage = () => {
    const { getPagesByStory, pages } = usePage();
    const { storyId } = useParams();

    useEffect(() => {
        if (storyId) {
            getPagesByStory(storyId);
        }
    }, [storyId]);

    return (
        <>
            <div className="tree-container">
                <h1>Árbol de páginas</h1>
                <ul className="tree">
                    {pages.map((page, idx) => (
                        <TreeNode node={page} key={idx} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default StoryPagesViewPage;
