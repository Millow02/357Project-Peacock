import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <p>This is your profile page. Customize it as needed.</p>
      <button 
        className="return-button" 
        onClick={() => navigate('/')}
      >
        Return to Main Page
      </button>
    </div>
  );
};

export default Profile;