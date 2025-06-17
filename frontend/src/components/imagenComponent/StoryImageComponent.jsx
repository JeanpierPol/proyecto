const defaultImagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumqw6UawRn7rOgAvevIfEnX55015CA-oTeA&s";

const StoryImageComponent = ({ src = defaultImagen, alt = "cover", className = "", width }) => {
    const imageSrc = src || defaultImagen;

    return (
        <img 
            src={imageSrc}
            className={`img-fluid rounded ${className} h-75 cover`}
            alt={alt}
            width={width}
        />
    );
};

export default StoryImageComponent;
