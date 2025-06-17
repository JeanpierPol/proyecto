import StoryImageComponent from "../imagenComponent/StoryImageComponent"
const CardStory = ({ title, description, link, img }) => {

    return (
        <div className="card">
            <StoryImageComponent src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default CardStory