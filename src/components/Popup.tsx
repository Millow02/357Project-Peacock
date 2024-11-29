import React, { useState } from 'react';
import { ParkingLot } from '../types';  
import SavedParkingList from './SavedParkingList'; 
import RecentParkingList from './RecentParkingList';
import SearchBar from './Searchbar';


interface PopupProps {
  activePopup: string | null; 
  handleClosePopup: () => void; 
  isFading: boolean; 
}

const Popup: React.FC<PopupProps> = ({ activePopup, handleClosePopup, isFading }) => {
  const [selectedParkingLot, setSelectedParkingLot] = useState<ParkingLot | null>(null);
  const [view, setView] = useState<'list' | 'details'>('list'); 


  const handleViewParkingDetails = (lot: ParkingLot) => {
    setSelectedParkingLot(lot); 
    setView('details');
  };


  const handleBackToList = () => {
    setSelectedParkingLot(null); 
    setView('list'); 
  };


  const renderContent = () => {
    if (view === 'details' && selectedParkingLot) {
      // Render details view
      return (
        <div className="parking-detail-content">
          
          <p>{selectedParkingLot.description}</p>
          <p><strong>Price:</strong> {selectedParkingLot.price}</p>
          <p>
            <strong>Occupancy:</strong> {selectedParkingLot.occupancy}/
            {selectedParkingLot.maxOccupancy}
          </p>
          <button className="back-to-list-btn" onClick={handleBackToList}>
            Back to List
          </button>
        </div>
      );
    }

   
    switch (activePopup) {
      case 'Search':
        return <SearchBar />
      case 'Saved':
        return <SavedParkingList onViewParkingDetails={handleViewParkingDetails} />;
      case 'Recent':
        return <RecentParkingList onViewParkingDetails={handleViewParkingDetails} />;
      default:
        return null; 
    }
  };

  return (
    activePopup && (
      <div className={`popup-container ${isFading ? 'fade-in' : 'fade-out'}`}>
        <div className="popup-header">
          <h3>
            {view === 'details' && selectedParkingLot
              ? `${selectedParkingLot.name}`
              : `${activePopup} Parking Lots`}
          </h3>
          <button className="popup-close-btn" onClick={handleClosePopup}>
            ✖
          </button>
        </div>

        <div className="popup-content">{renderContent()}</div>
      </div>
    )
  );
};

export default Popup;