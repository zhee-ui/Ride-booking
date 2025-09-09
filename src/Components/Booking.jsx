import React from "react";

export default function Booking({ car, tripDetails, onSubmitBooking }) {
  if (!car) {
    return (
      <div className="bg-white shadow w-[350px] h-[400px] rounded-lg p-6 flex items-center justify-center">
        <p className="text-gray-500">No car selected.</p>
      </div>
    );
  }

  const baseRate = 1000;
  const fuel = 50;
  const gratuity = 20;
  const total = baseRate + fuel + gratuity;

  return (
    <div className="w-[800px] space-y-6 mx-auto">
      {/* Booking 1 Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Booking 1</h2>
          <div className="flex gap-4">
            <img src="/Arrow.png" alt="Expand" className="w-4 h-4 cursor-pointer" />
            <img src="/Vector.png" alt="Close" className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        {/* Pick up Date & Time */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/clock circle.png" alt="Clock" className="w-5 h-5" />
          <span className="font-bold">Pick up Date & Time:</span>
          <span className="text-gray-700">{tripDetails?.departureDate || "07/29/2023 12:09 PM"}</span>
        </div>

        {/* Pick up Location */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/location.png" alt="Location" className="w-5 h-5" />
          <span className="font-bold">Pick up:</span>
          <span className="text-gray-700">
            {tripDetails?.fromLocation || "Baltimore/Washington Airport - 58FH+QC Severn, MD, USA"}
          </span>
        </div>

        {/* Drop off Location */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/map location.png" alt="Location" className="w-5 h-5" />
          <span className="font-bold">Drop off:</span>
          <span className="text-gray-700">
            {tripDetails?.toLocation || "Boston international airport - Do Not Use 1 Harborside Dr, Boston, MA 02128, USA"}
          </span>
        </div>

        {/* Vehicle Selection */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/CarSimple.png" alt="Car" className="w-5 h-5" />
          <span className="font-bold">Vehicle:</span>
          <div className="flex items-center justify-center gap-4 flex-1">
            <span className="text-xl font-bold">{car.title}</span>
            <img src={car.image} alt={car.title} className="w-16 h-10 object-contain" />
            <button className="bg-gray-700 text-white px-4 py-1 rounded text-sm">Change</button>
          </div>
        </div>

        {/* Fare */}
        <div className="flex items-center gap-3">
          <img src="/SealPercent.png" alt="Fare" className="w-5 h-5" />
          <span className="font-bold">Fare:</span>
          <span className="text-xl font-bold">${car.price}</span>
        </div>
      </div>

      {/* Total Charges Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Total charges</h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Base Rate:</span>
            <span>${baseRate}</span>
          </div>
          <div className="flex justify-between">
            <span>Fuel:</span>
            <span>${fuel}</span>
          </div>
          <div className="flex justify-between">
            <span>Gratuity:</span>
            <span>${gratuity}</span>
          </div>
        </div>

        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <span className="text-sm text-gray-600">All Prices are in USD.</span>
        </div>

        <button
          onClick={onSubmitBooking}
          className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
