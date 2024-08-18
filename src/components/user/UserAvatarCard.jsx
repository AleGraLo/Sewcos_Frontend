import React from "react";

const UserAvatarCard = ({ avatar }) => {
    return (
        <div className="user-avatar-card">
            <img src='/fashion_avatar1.jpg' alt="User avatar" />
            <p>Así te verías con las últimas tendencias</p>
        </div>
    );
}

export default UserAvatarCard;
