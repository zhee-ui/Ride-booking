import React from "react";

export default function Booking() {
  return (
    <div className="bg-white shadow w-[350px] h-[400px] rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Booking 1</h2>
        <div className="flex gap-4">
          <button className="text-black text-lg font-bold">-</button>
          <button className="text-black text-lg font-bold">x</button>
        </div>
      </div>
      <div className="flex items-start flex-col">
        <div className="py-1 flex flex-row gap-2">
          <img src="/clock circle.png" alt="" className="w-[20px] h-[20px]" />
          <p className="font-bold text-xs">Pick up Date & Time:</p>
        </div>
        <p className="text-gray-600 text-sm mx-8">07/29/2023 12:09 PM</p>
      </div>
      <div className="flex items-start flex-col">
        <div className="py-1 flex flex-row gap-2">
          <img src="/clock circle.png" alt="" className="w-[20px] h-[20px]" />
          <p className="font-bold text-xs">Pick up:</p>
        </div>
        <p className="text-gray-600 text-sm mx-8">
          Baltimore/Washington Airport - 58FH+QC Severn, MD, USA
        </p>
      </div>
      <div className="flex items-start flex-col">
        <div className="py-1 flex flex-row">
          <img src="/map location.png" alt="" className="w-4 h-4 mx-2" />
          <p className="font-bold text-xs">Drop off:</p>
        </div>
        <p className="text-gray-600 text-sm mx-8">
          Boston International Airport - Do Not Use - 1 Harborside Dr, Boston,
          MA 02128, USA
        </p>
      </div>
      <div className="flex items-start flex-col">
        <div className="py-1 flex flex-row">
          <img src="/CarSimple.png" alt="" className="mx-1 w-5 h-5" />
          <p className="font-bold text-xs">Vehicle</p>
        </div>
        <p className="text-gray-400 mx-12">Choose Vehicle</p>
      </div>
      <div className="flex items-start gap-3">
        <div className="py-1">
         <div className="flex flex-row gap-2">
           <img src="/SealPercent.png" alt="" className="w-5 h-5" />
          <p className=" text-gray-600 text-sm">Fare</p>
         </div>
          <p className="font-bold text-sm mx-4">$</p>
        </div>
      </div>
    </div>
  );
}
