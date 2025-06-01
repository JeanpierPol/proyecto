import { useEffect } from "react";
import { useStory } from "../context/StoryContext";
import CardStory from "../components/card/CardStory";

const StoriesPage = () => {
    const { getStories, stories } = useStory();
    useEffect(() => {
        getStories();
    }, [])

    return (
        <div className="container">
            <div className="row stories">
                {stories.map((task) => (
                    <div key={task._id} className="col-6 col-md-4 col-xl-3 mt-5">
                        <CardStory
                            title={task.title}
                            description={task.description}
                            img={task.coverImg}
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default StoriesPage;