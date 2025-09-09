import React, { useState } from "react";


export default function Card({ car, onContinue,isShow, setIsShow }) {

  // const [isShow, setIsShow] = useState(false);

  return (
     
    <div className="bg-white shadow rounded-xl flex flex-row w-[700px] h-[300px] p-4 justify-between">
      {/* Car Image */}
      <div className="flex items-center">
        <img src={car.image} alt={car.title} className="w-[220px] h-[120px]" />
      </div>

      {/* Car Details */}
      <div className="flex flex-col justify-between p-4">
        <h3 className="font-semibold text-2xl">{car.title}</h3>

        {/* People & Luggage */}
        <div className="flex flex-row gap-6 mt-2">
          <div className="flex flex-row gap-2">
            <img src="/users .png" alt="" className="w-[24px] h-[24px]" />
            <p className="text-sm">Max {car.maxPeople}</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src="/Luggage.png" alt="" className="w-[24px] h-[24px]" />
            <p className="text-sm">Max {car.maxLuggage}</p>
          </div>
        </div>

        {/* Time & Description */}
        <div className="flex flex-col gap-1 mt-2 py-2">
          <div className="flex flex-row gap-1">
            <img src="/clock circle.png" alt="" className="w-[20px] h-[20px]" />
            <p className="text-sm w-[200px]">{car.airPortTime}</p>
          </div>
          <div className="flex flex-row gap-2 py-1">
            <img src="/inter icon.png" alt="" className="w-[20px] h-[20px]" />
            <p className="text-sm">Intercity {car.interCityTime}</p>
          </div>
          <div className="flex flex-row gap-2 py-1">
            <img src="/mini car.png" alt="" className="w-[20px] h-[20px]" />
            <p className="text-sm">{car.desc}</p>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-3 flex flex-row items-center justify-between p-2">
          <p className="font-bold text-3xl">{car.price}</p>
          <button
          onClick={() => {
           setIsShow(!isShow);
           onContinue();
           }}
            className="bg-black text-white px-4 py-2 rounded-lg mt-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}


