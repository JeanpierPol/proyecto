import { Link } from "react-router-dom";
import CardStory from "../../components/card/CardStory";

const StoriesContainer = ({ stories }) => {
    return (
        <div className="row stories">
            {stories.length > 0 ? (
                stories.map((story) => (
                    <div key={story._id} className="col-6 col-md-4 col-xl-3 mt-5">
                        <Link to={`/story/${story._id}`} className="text-decoration-none">
                            <CardStory
                                title={story.title}
                                description={story.description}
                                img={story.coverImg}
                            />
                        </Link>
                        
                    </div>
                ))
            ) : (
                <div className="text-center w-100 mt-5">
                    <p className="text-muted">No hay historias disponibles.</p>
                </div>
            )}

        </div>
    )
}

export default StoriesContainer;