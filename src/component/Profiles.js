import users from "./data/users";
import "./css/profiles.css";
import ProfileCard from "./ProfileCard";

export default function Profiles() {
    const profiles = users.map((user) => (
        <ProfileCard key={user.id} user={user} />
    ));

    return <div className="profiles">{profiles}</div>;
}
