import React, { useState } from "react";
import TripDetailsStep from "./TripDetailsStep";
import CarSelectionStep from "./CarSelectionStep";
import BookingStep from "./BookingStep";

export default function Home() {
  // Flow state management
  const [currentStep, setCurrentStep] = useState("tripDetails"); // tripDetails, carSelection, booking

  // Trip details state
  const [tripType, setTripType] = useState("oneway");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [stops, setStops] = useState([{ id: 1, location: "" }]);
  const [passengers, setPassengers] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date().toISOString().slice(0, 16));
  const [returnDate, setReturnDate] = useState("");

  // Selected car state
  const [selectedCar, setSelectedCar] = useState(null);

  // Trip summary state
  const [tripSummary, setTripSummary] = useState({
    distance: "76km / 47 mi",
    duration: "59 Minutes"
  });

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setCurrentStep("booking");
  };

  const handleBackToTripDetails = () => {
    setCurrentStep("tripDetails");
    setSelectedCar(null);
  };

  const handleBackToCarSelection = () => {
    setCurrentStep("carSelection");
  };

  const handleShowRides = () => {
    setCurrentStep("carSelection");
  };

  const addStop = () => {
    const newStop = {
      id: stops.length + 1,
      location: ""
    };
    setStops([...stops, newStop]);
  };

  const removeStop = (stopId) => {
    if (stops.length > 1) {
      setStops(stops.filter(stop => stop.id !== stopId));
    }
  };

  const updateStop = (stopId, location) => {
    setStops(stops.map(stop =>
      stop.id === stopId ? { ...stop, location } : stop
    ));
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "";
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleSubmitBooking = () => {
    const bookingData = {
      tripType,
      fromLocation,
      toLocation,
      stops,
      passengers,
      departureDate,
      returnDate,
      selectedCar,
      tripSummary,
      timestamp: new Date().toISOString()
    };

    console.log("Booking submitted:", bookingData);

    // Here you would typically send the data to your backend API
    // For now, we'll just show an alert
    alert("Booking submitted successfully! Check console for details.");

    // You could also reset the form or redirect to a confirmation page
    // setCurrentStep("confirmation");
  };

  return (
    <div>
      {currentStep === "tripDetails" && (
        <TripDetailsStep
          tripType={tripType}
          setTripType={setTripType}
          fromLocation={fromLocation}
          setFromLocation={setFromLocation}
          toLocation={toLocation}
          setToLocation={setToLocation}
          stops={stops}
          addStop={addStop}
          removeStop={removeStop}
          updateStop={updateStop}
          passengers={passengers}
          setPassengers={setPassengers}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          tripSummary={tripSummary}
          onShowRides={handleShowRides}
          onBack={() => { }} // No back action for trip details
        />
      )}

      {currentStep === "carSelection" && (
        <CarSelectionStep
          onCarSelect={handleCarSelect}
          onBack={handleBackToTripDetails}
        />
      )}

      {currentStep === "booking" && (
        <BookingStep
          selectedCar={selectedCar}
          tripDetails={{
            fromLocation,
            toLocation,
            departureDate: formatDateTime(departureDate),
            returnDate: formatDateTime(returnDate),
            passengers,
            tripType,
            stops
          }}
          onBack={handleBackToCarSelection}
          onSubmitBooking={handleSubmitBooking}
        />
      )}
    </div>
  );
}