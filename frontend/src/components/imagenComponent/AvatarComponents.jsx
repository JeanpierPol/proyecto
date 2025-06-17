const defaultProfile = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";

const AvatarComponents = ({ height, width, src = defaultProfile, alt = "Avatar", className }) => {
    const imageSrc = src || defaultProfile;
    const imageWidth = width || height;

    return (
        <img
            src={imageSrc}
            className={`rounded-circle avatar ${className}`}
            height={height}
            width={imageWidth}
            alt={alt}
        />
    );
};


export default AvatarComponents