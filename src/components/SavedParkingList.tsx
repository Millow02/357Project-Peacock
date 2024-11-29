import React, { useState } from 'react';
import { ParkingLot } from '../types'; 
import savedParkingLots from '../savedParkingLots'; 
import './SavedParkingList.css';


interface SavedParkingListProps {
  onViewParkingDetails: (lot: ParkingLot) => void; 
}

const SavedParkingList: React.FC<SavedParkingListProps> = ({ onViewParkingDetails }) => {
  return (
    <div className="saved-list">
      <ul>
        {savedParkingLots.map((lot: ParkingLot) => (
          <li key={lot.id} className="parking-lot">
            <h2>{lot.name}</h2>
            <p>{lot.description}</p>
            <p><strong>Price:</strong> {lot.price}</p>
            <p><strong>Occupancy:</strong> {lot.occupancy}/{lot.maxOccupancy}</p>
            <button
              className="parking-details-button"
              onClick={() => onViewParkingDetails(lot)} // Pass selected lot to parent
            >
              View parking details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedParkingList;
