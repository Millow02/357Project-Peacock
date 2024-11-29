import { ParkingLot } from './types';


const savedParkingLots:ParkingLot[]  = [
    {
        id: 1,
        name: "Georgetown Parking Lot",
        description: "Best parking",
        price: "15$/hr",
        occupancy: 74,
        maxOccupancy: 80,

    },
    {
    id: 2,
    name: "City Center Lot",
    description: "Open-air parking near city center.",
    price: "$5/hr",
    occupancy: 30,
    maxOccupancy: 50,

    },
    {
    id: 3,
    name: "Mall Parking",
    description: "Convenient parking at the shopping mall.",
    price: "$8/hr",
    occupancy: 20,
    maxOccupancy: 100,

    },
    {
    id: 4,
    name: "Airport Parking",
    description: "Long-term parking near the airport.",
    price: "$15/day",
    occupancy: 40,
    maxOccupancy: 200,

    },
];

export default savedParkingLots;