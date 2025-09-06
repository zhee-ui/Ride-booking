import React, { useState } from "react";
import Car from "../Data.jsx/Car";

export default function Home() {
  const [tripType, setTripType] = useState("oneway");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-lg mx-[30px] my-8 px-12 pt-[30px] h-[650px] w-[1000px]">
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
        {tripType === "oneway" ? (
          <div className="flex flex-row gap-4 mb-6">
            {/* From */}
            <div className="flex-1 relative">
              <p className="text-sm text-gray-600">From</p>
              <img src="/location.png" alt="" className="w-3 h-4 absolute mt-4 mx-4" />
              <input
                type="text"
                placeholder="Address, airport, hotel, etc"
                className="w-full border border-gray-300 rounded-lg px-8 py-2 text-sm mt-2 outline-none"
              />
            </div>
            <img
              src="/mobile data.png"
              alt="swap"
              className="w-8 h-8 bg-gray-200 rounded-full p-1 cursor-pointer mt-8 hover:bg-gray-300"
            />
            <div className="flex-1 relative">
              <p className="text-sm text-gray-600">To</p>
              <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-4 mx-4" />
              <input
                type="text"
                placeholder="Address, airport, hotel, etc"
                className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 ">
             <span>Departure</span>
            <div className="flex flex-row gap-4">
              <div className="flex-1 relative">
                <p className="text-sm text-gray-600">From</p>
                <img src="/location.png" alt="" className="w-3 h-4 absolute mt-4 mx-4" />
                <input
                  type="text"
                  placeholder="Return pickup location"
                  className="w-full border border-gray-300 rounded-lg px-8 py-2 text-sm mt-2 outline-none"
                />
              </div>
              <div className="flex-1 relative">
                <p className="text-sm text-gray-600"> To</p>
                <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-4 mx-4" />
                <input
                  type="text"
                  placeholder="Return dropoff location"
                  className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
                />
              </div>
            </div>
             <span>Return</span>
            <div className="flex flex-row gap-4">
            
              <div className="flex-1 relative">
                <p className="text-sm text-gray-600">From</p>
                <img src="/location.png" alt="" className="w-3 h-4 absolute mt-4 mx-4" />
                <input
                  type="text"
                  placeholder="Return pickup location"
                  className="w-full border border-gray-300 rounded-lg px-8 py-2 text-sm mt-2 outline-none"
                />
              </div>
              <div className="flex-1 relative">
                <p className="text-sm text-gray-600">To</p>
                <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-4 mx-4" />
                <input
                  type="text"
                  placeholder="Return dropoff location"
                  className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
                />
              </div>
            </div>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-600">Stop 1</p>
          <div className="flex items-center relative">
            <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-3 mx-4" />
            <input
              type="text"
              placeholder="select stop location"
              className="border border-gray-300 rounded-lg px-10 w-[320px] py-2 text-sm mt-2 outline-none"
            />
            <div className="flex items-center ml-4 mt-2">
              <img src="/Vector.png" alt="" className="mr-2" />
              <p className="text-sm">Delete stop</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-4 p-4">
          <img src="/add.png" alt="" />
          <p className="text-sm">Add a stop</p>
        </div>
        <div className="flex flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <p className="text-sm">No. of passengers</p>
            <div className="relative">
              <img src="/users .png" alt="" className="w-6 h-5 absolute mt-4 mx-4" />
              <select
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm mt-2 outline-none appearance-none"
                defaultValue=""
              >
                <option value="" disabled hidden className="text-gray-400">Select option</option>
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers</option>
                <option value="6">6+ Passengers</option>
              </select>
            </div>
          </div>

          <div className="flex-1 relative">
            <p className="text-sm">Set Departure</p>
            <img src="/calendar.png" alt="" className="w-4 h-4 absolute mt-5 mx-4" />
            <input
              type="text"
              placeholder="Address, airport, hotel, etc"
              className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
            />
          </div>
          {tripType === "return" && (
          <div className="flex-1 relative">
            <p className="text-sm">Set Return</p>
            <img src="/calendar.png" alt="" className="w-4 h-4 absolute mt-5 mx-4" />
            <input
              type="text"
              placeholder="Address, airport, hotel, etc"
              className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
            />
          </div>
          )}
        </div>
         <button
               onClick={() => setIsOpen(!isOpen)}
                className="py-2 px-6 bg-black text-white rounded-lg">
                 Show rides
         </button>
  
        <div className="flex flex-row gap-4 mt-6">
          <div className="flex flex-row gap-4">
            <p className="font-bold">Distance:</p>
            <span className="text-gray-400">76km / 47mi</span>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-bold">Duration:</p>
            <span className="text-gray-400">59 minutes</span>
          </div>
          <div className="flex flex-row gap-2 ml-auto">
            <p className="font-bold">Show Map</p>
            <img src="/Arrow.png" alt="" className="w-[12px] h-[10px] mt-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <img src="/CarSimple.png" alt="" className="bg-gray-200 rounded-full p-4" />
      </div>

      <p className="flex justify-center text-center font-semibold">
        Click on the show rides button after <br />
        selecting your ride details to show available <br /> rides
      </p>
       {isOpen && (
      <div>
        <Car />
      </div>
       )}
    </div>
  );
}