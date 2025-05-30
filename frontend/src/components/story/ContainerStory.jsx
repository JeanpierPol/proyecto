import StoryImageComponent from "../imagenComponent/StoryImageComponent"

const ContainerStory = ({ img, title, description, children }) => {
    return (
        <div className="container h-100">
            <div className="row align-items-start">
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    {img}
                </div>
                <div className="col-12 col-md-9">
                    {title}
                    {description}
                </div>
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContainerStory