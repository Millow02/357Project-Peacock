import React from "react";
import recentParkingLots from "../recentParkingLots";
import { ParkingLot } from '../types';
import './SavedParkingList.css';

interface RecentParkingListProps {
    onViewParkingDetails: (lot: ParkingLot) => void; 
  }
  
  const RecentParkingList: React.FC<RecentParkingListProps> = ({ onViewParkingDetails }) => {
    return (
      <div className="saved-list">
        <ul>
          {recentParkingLots.map((lot: ParkingLot) => (
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
  
  export default RecentParkingList;