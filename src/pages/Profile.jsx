import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile">
            <h2>Your Profile</h2>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Additional profile information can be added here */}
                </>
            ) : (
                <p>Please log in to see your profile.</p>
            )}
        </div>
    );
};

export default Profile;