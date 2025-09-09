import React, { useState } from "react";
import TripDetailsStep from "./TripDetailsStep";
import CarSelectionStep from "./CarSelectionStep";
import BookingStep from "./BookingStep";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

export default function Home() {
  const [tripType, setTripType] = useState("oneway");
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showMap, setShowMap] = useState(true); // default map is visible

  // Locations & dates
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [returnTo, setReturnTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Stops
  const [stops, setStops] = useState([""]);

  // Map data
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  // Selected car
  const [selectedCar, setSelectedCar] = useState(null);

  const location = { lat: 8.4966, lng: 4.5421 };

  // Google Maps callback
  const handleDirectionsCallback = (res) => {
    if (res && res.status === "OK") {
      setDirections(res);
      const leg = res.routes[0].legs[0];
      setDistance(leg.distance.text);
      setDuration(leg.duration.text);
    }
  };

  // Stops management
  const addStop = () => setStops([...stops, ""]);
  const deleteStop = (index) => setStops(stops.filter((_, i) => i !== index));
  const updateStop = (value, index) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };

  // Map origin/destination
  const origin = tripType === "oneway" ? from : returnFrom || from;
  const destination = tripType === "oneway" ? to : returnTo || to;

  return (
    <div className="mx-[30px] my-8">
      {/* Trip Type */}
      {!isOpen && (
        <>
      <section className="flex flex-row space-x-6 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="accent-black"
          />
          <span className="text-gray-700 font-medium">One Way</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            value="return"
            checked={tripType === "return"}
            onChange={() => setTripType("return")}
            className="accent-black"
          />
          <span className="text-gray-700 font-medium">Return</span>
        </label>
      </section>

      {/* Trip Inputs */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Departure */}
        <div className="flex flex-row gap-4">
          <div className="flex-1 relative">
            <p className="text-sm text-gray-600">From</p>
            <img src="/location.png" alt="" className="w-3 h-4 absolute mt-4 mx-4" />
            <input
              type="text"
              placeholder="Pickup location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-8 py-2 text-sm mt-2 outline-none"
            />
          </div>
          <div className="flex-1 relative">
            <p className="text-sm text-gray-600">To</p>
            <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-4 mx-4" />
            <input
              type="text"
              placeholder="Dropoff location"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
            />
          </div>
        </div>

        {/* Return inputs */}
        {tripType === "return" && (
          <div className="flex flex-row gap-4 mt-2">
            <div className="flex-1 relative">
              <p className="text-sm text-gray-600">Return From</p>
              <img src="/location.png" alt="" className="w-3 h-4 absolute mt-4 mx-4" />
              <input
                type="text"
                placeholder="Return pickup location"
                value={returnFrom}
                onChange={(e) => setReturnFrom(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-8 py-2 text-sm mt-2 outline-none"
              />
            </div>
            <div className="flex-1 relative">
              <p className="text-sm text-gray-600">Return To</p>
              <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-4 mx-4" />
              <input
                type="text"
                placeholder="Return dropoff location"
                value={returnTo}
                onChange={(e) => setReturnTo(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Stops */}
      {stops.map((stop, index) => (
        <div key={index} className="flex items-center relative mt-4">
          <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-3 mx-4" />
          <input
            type="text"
            placeholder={`Stop ${index + 1}`}
            value={stop}
            onChange={(e) => updateStop(e.target.value, index)}
            className="border border-gray-300 rounded-lg px-10 py-2 w-[320px] text-sm mt-2 outline-none"
          />
          <div
            className="flex items-center ml-4 mt-2 cursor-pointer"
            onClick={() => deleteStop(index)}
          >
            <img src="/Vector.png" alt="" className="mr-2" />
            <p className="text-sm">Delete stop</p>
          </div>
        </div>
      ))}
      <div
        className="flex flex-row items-center mt-4 gap-4 p-4 cursor-pointer"
        onClick={addStop}
      >
        <img src="/add.png" alt="" />
        <p className="text-sm">Add a stop</p>
      </div>

      {/* Passengers & Dates */}
      <div className="flex flex-row gap-4 mb-6 mt-4">
        <div className="flex-1 relative">
          <p className="text-sm">No. of passengers</p>
          <button className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm mt-2 outline-none text-left">
            Select passengers
          </button>
          <img src="/users .png" alt="" className="w-6 h-5 absolute top-1/2 mx-4" />
        </div>
        <div className="flex-1 relative">
          <p className="text-sm">Set Departure</p>
          <img src="/calendar.png" alt="" className="w-4 h-4 absolute mt-5 mx-4" />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
          />
        </div>
        {tripType === "return" && (
          <div className="flex-1 relative">
            <p className="text-sm">Set Return</p>
            <img src="/calendar.png" alt="" className="w-4 h-4 absolute mt-5 mx-4" />
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
            />
          </div>
        )}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-6 bg-black text-white rounded-lg mt-4"
      >
        Show rides
      </button>
      </>
      )}
       {!isOpen && (
      <div>
        {/* Distance & Duration */}
      <div className="flex flex-row gap-4 mt-6 py-4">
        <div className="flex flex-row gap-4">
          <p className="font-bold">Distance:</p>
          <span className="text-gray-400">{distance || ""}</span>
        </div>
        <div className="flex flex-row gap-4">
          <p className="font-bold">Duration:</p>
          <span className="text-gray-400">{duration || ""}</span>
        </div>
        <div className="flex flex-row gap-2 ml-auto cursor-pointer" onClick={() => setShowMap(!showMap)}>
          <p className="font-bold">{showMap ? "Hide Map" : "Show Map"}</p>
         <img src="/Arrow.png" alt="" className="w-[12px] h-[10px] mt-2" />
       </div>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerClassName="w-full h-[400px] rounded-lg shadow-lg" center={location} zoom={12}>
            {origin && destination && (
              <DirectionsService
                options={{
                  origin,
                  destination,
                  waypoints: stops.filter((s) => s).map((s) => ({ location: s, stopover: true })),
                  travelMode: "DRIVING",
                }}
                callback={handleDirectionsCallback}
              />
            )}
            {directions && <DirectionsRenderer options={{ directions }} />}
          </GoogleMap>
        </LoadScript>
      </div>
      </div>
       )}

      
      {/* Car List */}
      {isOpen && <Car onSelectCar={setSelectedCar} />}

      {/* Booking */}
      {selectedCar && (
        <Booking
          car={selectedCar}
          departureDate={departureDate}
          returnDate={returnDate}
          tripType={tripType}
          pickup={from}
          dropoff={to}
          returnPickup={returnFrom}
          returnDropoff={returnTo}
          isShow={isShow}
          setIsShow={setIsShow}
        />
      )}
    </div>
  );
}
