import { useEffect, useState } from "react"; 
import { useStory } from "../../context/StoryContext";
import StoriesContainer from "../../components/story/StoriesContainer";
import { useAuth } from "../../context/AuthContext";
import { usePage } from "../../context/PageContext";
import BranchCard from "../../components/card/BranchCard";
import Loading from "../../components/Loading";

const MyWorksPage = ({ }) => {
    const { getStoryByUser, stories, loading: loadingStories } = useStory();
    const { user } = useAuth();
    const { pages, getPageByUser, loading: loadingPages } = usePage(); 

    useEffect(() => {
        if (!user?.id) return;
        getStoryByUser(user.id);
        getPageByUser(user.id);
    }, [user]);

    if (loadingPages || loadingStories) {
        return <Loading />
    }

    return (
        <>
            <div className="container">
                <StoriesContainer stories={stories} />
            </div>

            <div className="container mt-4">
                <h4 className="mb-4">Mis Ramas (Contribuciones)</h4>
                {Array.isArray(pages) && pages.length > 0 ? (
                    pages.map((page) => (
                        <BranchCard
                            page={page}
                            key={page._id}
                            stories={stories} 
                        />
                    ))
                ) : (
                    <p className="text-center text-muted">No tienes contribuciones de páginas aún.</p>
                )}
            </div>
        </>
    );
}

export default MyWorksPage;