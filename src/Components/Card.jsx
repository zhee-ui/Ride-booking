import React from "react";

export default function Card({
  title,
  maxPeople,
  maxLuggage,
  airPortTime,
  interCityTime,
  desc,
  price,
  image,
  onContinue,
}) {
  return (
    <div>
      <div className="bg-white shadow rounded-xl flex flex-row w-[700px] h-[300px] ml-28 p-4 justify-between">
        <div className="flex items-center ">
          <img src={image} alt="" className="w-[220px] h-[120px]" />
        </div>
        <div className="flex flex-col justify-between p-4">
          <h3 className="font-semibold text-2xl">{title}</h3>
          <div className="flex flex-row gap-6 mt-2">
            <div className="flex flex-row gap-2">
              <img src="/users .png" alt="" className="w-[24px] h-[24px]" />
              <p className="text-sm">Max {maxPeople}</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src="/Luggage.png" alt="" className="w-[24px] h-[24px]" />
              <p className="text-sm">Max {maxLuggage}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-2 py-2">
            <div className="flex flex-row gap-1">
              <img src="/clock circle.png" alt="" className="w-[20px] h-[20px]" />
              <p className="text-sm w-[200px]">{airPortTime}</p>
            </div>
            <div className="flex flex-row gap-2 py-1">
              <img src="/inter icon.png" alt="" className="w-[20px] h-[20px]" />
              <p className="text-sm">Intercity {interCityTime}</p>
            </div>
            <div className="flex flex-row gap-2 py-1">
              <img src="/mini car.png" alt="" className="w-[20px] h-[20px]" />
              <p className="text-sm">{desc}</p>
            </div>
          </div>
          <div className="mt-3 md:mt-0 text-center flex flex-row items-center justify-between p-2">
            <p className="font-bold text-3xl">${price}</p>
            <button
              onClick={onContinue}
              className="bg-black text-white px-4 py-2 rounded-lg mt-2"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}