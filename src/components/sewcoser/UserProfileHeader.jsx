import React from 'react';
import PropTypes from 'prop-types';
import '../../css/userProfileHeader.css';

const UserProfileHeader = ({ username, avatar }) => {
    return (
        <div className="user-profile-header">
            <img src={avatar} alt={`${username}'s avatar`} className="user-avatar" />
            <h2 className="user-name">{username}</h2>
        </div>
    );
};

UserProfileHeader.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default UserProfileHeader;
