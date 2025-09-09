import React from "react";
import Checkout from "./Checkout";
import Card from "./Card";

export default function Booking({
  car,
  departureDate,
  pickupTime,
  pickup,
  dropoff,
  onChangeCar, // function for "Change" button
  isShow,
  setIsShow
}) {
  return (
    <div>
       {!isShow && (
    <div className="grid grid-cols-2 gap-8">
      {/* Show Car Card only if selected */}
      <div>
        {car && <Card car={car} isShow={isShow} setIsShow={setIsShow} />}
      </div>

      {/* Booking Details */}
      <div className="flex flex-col items-start gap-4">
        <div className="bg-white shadow w-[350px] h-auto rounded-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Booking 1</h2>
            <div className="flex gap-4">
              <button className="text-black text-lg font-bold">-</button>
              <button className="text-black text-lg font-bold">x</button>
            </div>
          </div>

          {/* Pickup Date & Time */}
          <div className="flex items-start flex-col mt-2">
            <div className="py-1 flex flex-row gap-2">
              <img src="/clock circle.png" alt="" className="w-[20px] h-[20px]" />
              <p className="font-bold text-xs">Pick up Date & Time:</p>
            </div>
            <p className="text-gray-600 text-sm mx-8">
              {departureDate && pickupTime
                ? `${departureDate} ${pickupTime}`
                : "07/29/2023 12:09 PM"}
            </p>
          </div>

          {/* Pickup */}
          <div className="flex items-start flex-col mt-2">
            <div className="py-1 flex flex-row gap-2">
              <img src="/map location.png" alt="" className="w-4 h-4 mx-2" />
              <p className="font-bold text-xs">Pick up:</p>
            </div>
            <p className="text-gray-600 text-sm mx-8">
              {pickup || "Baltimore/Washington Airport - 58FH+QC Severn, MD, USA"}
            </p>
          </div>

          {/* Dropoff */}
          <div className="flex items-start flex-col mt-2">
            <div className="py-1 flex flex-row gap-2">
              <img src="/map location.png" alt="" className="w-4 h-4 mx-2" />
              <p className="font-bold text-xs">Drop off:</p>
            </div>
            <p className="text-gray-600 text-sm mx-8">
              {dropoff ||
                "Boston International Airport - Do Not Use - 1 Harborside Dr, Boston, MA 02128, USA"}
            </p>
          </div>

          {/* Vehicle */}
          <div className="flex items-start flex-col mt-2">
            <div className="py-1 flex flex-row gap-2">
              <img src="/CarSimple.png" alt="" className="mx-1 w-5 h-5" />
              <p className="font-bold text-xs">Vehicle</p>
            </div>
            {car && car.image ? (
              <div className="mx-8 flex gap-4 flex-col">
                <span className="font-semibold">{car.title}</span>
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-20 h-14 object-contain"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <button
                    className="py-2 px-4 rounded-lg bg-black text-sm text-white"
                    onClick={onChangeCar}
                  >
                    Change
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 mx-12">Choose Vehicle</p>
            )}
          </div>

          {/* Fare */}
          {car && car.price && (
            <div className="flex items-start gap-3 mt-2">
              <div className="py-1">
                <div className="flex flex-row gap-2">
                  <img src="/SealPercent.png" alt="" className="w-5 h-5" />
                  <p className="text-gray-600 text-sm">Fare</p>
                </div>
                <p className="font-bold text-sm mx-4">{car.price}</p>
              </div>
            </div>
          )}
        </div>

        {/* Checkout */}
        <Checkout />
      </div>
    </div>
     )}
  


    </div>
    );
}