import "./css/UserProfiles.css";

export default function UserProfile({ name, email }) {
    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <h2>
                <a href={`mailto:${email}`}>{email}</a>
            </h2>
        </div>
    );
}
