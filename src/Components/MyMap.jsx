import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MyMap() {
  // Example location: Ilorin, Nigeria
  const location = { lat: 8.4966, lng: 4.5421 };

  return (
    <div className="w-full h-[500px] rounded-2xl shadow-lg overflow-hidden">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={location}
          zoom={12}
        >
          {/* Marker */}
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
