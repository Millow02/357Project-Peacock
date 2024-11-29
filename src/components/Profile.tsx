import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import parkingPicture from '../assets/parkingPhoto.jpg'
import logo from '../assets/image-logo.png';


const Profile: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div className="profile-page">
      <div className='stock-image'>
        <img src={parkingPicture} alt='this is the parking lot'></img>
      </div>
      <div className='sign-in-container'>
        <img src= {logo} alt='app logo'></img>

      

      <h1>Sign in</h1>

      <div className='sign-in-form'>
      <h3>Email</h3>

<form className="search-bar">
      <input
        type="text"
        placeholder="Email"
        className="search-input"
      />
</form>
<h3>Password</h3>
  <form className="search-bar">
   
      <input
        type="text"
        placeholder="Password"
        className="search-input"
      />
      </form>

    

   




     
      <button 
        className="return-button" 
        onClick={() => navigate('/')}
      >
        Log in
      </button>
      <div className='login-sso'>
      <hr />
      <h3>Log in with Others</h3>
      <hr />
     </div>

     <button className='sso-button'>Log in with SSO</button>



    </div>
    </div>

   
    </div>
  );
};

export default Profile;