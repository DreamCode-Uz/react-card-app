import "./css/ProfileCard.css";
import Avatar from "./Avatar";
import UserProfile from "./UserProfile";

export default function ProfileCard({ user }) {
    return (
        <section id={`user${user.id}`} className="profile-card">
            <Avatar
                name={`${user.first_name} ${user.last_name}`}
                url={user.avatar}
            />
            <UserProfile
                name={`${user.first_name} ${user.last_name}`}
                email={user.email}
            />
        </section>
    );
}
