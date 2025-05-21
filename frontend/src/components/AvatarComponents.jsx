const defaultProfile = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";

export const AvatarComponents = ({ height, width, src = defaultProfile, alt = "Avatar" }) => {
    const imageSrc = src || defaultProfile;
    const imageWidth = width || height;

    return (
        <img
            src={imageSrc}
            className="rounded-circle mb-3 avatar"
            height={height}
            width={imageWidth}
            alt={alt}
        />
    );
};
