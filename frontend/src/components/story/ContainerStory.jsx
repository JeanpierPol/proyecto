const ContainerStory = ({ img, title, description, children, author }) => {
    return (
        <div className="row align-items-start">
            <div className="col-12 col-md-3 mb-3 mb-md-0">
                {img}
            </div>
            <div className="col-12 col-md-9">
                <h3>{author}</h3>
                {title}
                {description}
            </div>
            <div className="col-12">
                {children}
            </div>
        </div>
    )
}

export default ContainerStory