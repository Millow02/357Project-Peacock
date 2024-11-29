import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image-logo.png';
import './Sidebar.css'
import searchIcon from '../assets/search.svg';
import savedIcon from '../assets/saved-logo.svg'
import recentIcon from '../assets/recent-icon.svg'



interface SidebarProps {
  onOpenPopup: (popupName: string) => void;
  onNavigateToProfile: () => void;
}



const Sidebar: React.FC<SidebarProps> = ({ onOpenPopup, onNavigateToProfile }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    onNavigateToProfile(); // Call the handler to close the popup
    navigate('/profile');  // Navigate to the Profile page
  };

    return(
        <div className='sidebar-container'>
        <div className='main-action-buttons'>

          <div className='app-icon'>
          <img src= {logo} alt="super masculine bird named Rihaz" />
          </div>

          <div className='sidebar-item'>
            <button onClick={() => onOpenPopup('Search')} className="sidebar-button">
              <img src={searchIcon} alt='search icon' className="sidebar-icon" />
              <span className="sidebar-label">Search</span>
             </button>
          </div>

          <div className='sidebar-item'>
            <button onClick={() => onOpenPopup('Saved')} className="sidebar-button">
              <img src={savedIcon} alt='saved icon' className="sidebar-icon" />
              <span className="sidebar-label">Saved</span>
             </button>
          </div>

          <div className='sidebar-item'>
            <button onClick={() => onOpenPopup('Recent')} className="sidebar-button">
              <img src={recentIcon} alt='recent icon' className="sidebar-icon" />
              <span className="sidebar-label">Recent</span>
             </button>
          </div>
   
        </div>


        <div className='secondary-action-buttons'>
        <button>
            Alerts
          </button>
          <button onClick={handleProfileClick}>Profile</button>

        </div>
      </div>

    );
};


export default Sidebar;

