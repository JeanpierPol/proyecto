import { Link } from "react-router-dom";
import CardStory from "../../components/card/CardStory";

const StoriesContainer = ({ stories }) => {
    return (
        <div className="row stories">
            {stories.map((stories) => (
                <div key={stories._id} className="col-6 col-md-4 col-xl-3 mt-5">
                    <Link to={`/story/${stories._id}`} className="text-decoration-none">
                        <CardStory
                            title={stories.title}
                            description={stories.description}
                            img={stories.coverImg}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default StoriesContainer;