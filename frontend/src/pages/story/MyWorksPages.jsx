import { useEffect } from "react";
import { useStory } from "../../context/StoryContext";
import StoriesContainer from "../../components/story/StoriesContainer";
import { useAuth } from "../../context/AuthContext";
import { usePage } from "../../context/PageContext";
import BranchCard from "../../components/card/BranchCard";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom"; // Si usas navegación para crear

const MyWorksPage = () => {
    const { getStoryByUser, stories, loading: loadingStories } = useStory();
    const { user } = useAuth();
    const { pages, getPageByUser, loading: loadingPages } = usePage();

    useEffect(() => {
        if (user?.id) {
            getStoryByUser(user.id);
            getPageByUser(user.id);
        }
    }, [user?.id]);

    if (loadingPages || loadingStories) {
        return <Loading />;
    }

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="stories-tab" data-bs-toggle="tab" data-bs-target="#stories-tab-pane" type="button" role="tab" aria-controls="stories-tab-pane" aria-selected="true">
                        Mis historias
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contributions-tab" data-bs-toggle="tab" data-bs-target="#contributions-tab-pane" type="button" role="tab" aria-controls="contributions-tab-pane" aria-selected="false">
                        Mis contribuciones
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="create-tab" data-bs-toggle="tab" data-bs-target="#create-tab-pane" type="button" role="tab" aria-controls="create-tab-pane" aria-selected="false">
                        Crear historia
                    </button>
                </li>
            </ul>

            <div className="tab-content mt-3" id="myTabContent">
                <div className="tab-pane fade show active" id="stories-tab-pane" role="tabpanel" aria-labelledby="stories-tab" tabIndex="0">
                    <StoriesContainer stories={stories} />
                </div>

                <div className="tab-pane fade" id="contributions-tab-pane" role="tabpanel" aria-labelledby="contributions-tab" tabIndex="0">
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

                <div className="tab-pane fade" id="create-tab-pane" role="tabpanel" aria-labelledby="create-tab" tabIndex="0">
                    <div className="row">
                        {stories.filter(story => !story.rootPage).length > 0 ? (
                            stories.filter(story => !story.rootPage).map((story) => (
                                <div className="col-md-6 mb-4" key={story._id}>
                                    <div className="card h-100">
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <h5 className="card-title">{story.title || 'Sin título'}</h5>
                                                <p className="card-text text-muted">Esta historia aún no tiene página raíz.</p>
                                            </div>
                                            <Link
                                                to={`/story/${story._id}/page/create`}
                                                className="btn btn-primary mt-3"
                                            >
                                                Crear primera página
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="alert alert-info text-center">
                                    Todas tus historias tienen una página raíz.
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyWorksPage;
