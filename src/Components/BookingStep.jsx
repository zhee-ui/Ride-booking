import React from "react";
import Booking from "./Booking";

export default function BookingStep({ 
  selectedCar, 
  tripDetails, 
  onBack, 
  onSubmitBooking 
}) {
  return (
    <div className="mt-8">
      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-6 mx-[30px]">
        <img
          src="/Arrow.png"
          alt="Back"
          className="w-4 h-4 rotate-180 cursor-pointer"
          onClick={onBack}
        />
        <span className="text-gray-700 font-medium">Back</span>
        <div className="flex items-center gap-2 ml-8">
          <span className="text-gray-500">Select rides</span>
          <span className="text-gray-300">{'>'}</span>
          <span className="text-gray-500">Additional info</span>
          <span className="text-gray-300">{'>'}</span>
          <span className="text-gray-900 font-semibold">Checkout</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Booking 
          car={selectedCar} 
          tripDetails={tripDetails}
          onSubmitBooking={onSubmitBooking}
        />
      </div>
    </div>
  );
}
