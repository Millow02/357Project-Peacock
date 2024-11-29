import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";


const ParkingMap: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is missing in environment variables");
  }
  


  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });

    loader.load().then(async () => {
      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 45.5017, lng: -73.5673 },
        zoom: 10,
      });
    });
  }, []);

  return (
    <div
      id="map"
    ></div>
  );
};

export default ParkingMap;


