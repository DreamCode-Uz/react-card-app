import "./css/avatar.css";

function Avatar({ name, url, width = 128, height = 128 }) {
    return (
        <img
            className="profile-avatar"
            src={url}
            alt={name}
            width={width}
            height={height}
            title={name}
        />
    );
}

export default Avatar;
