import React from "react";

export default function TripDetailsStep({
    tripType,
    setTripType,
    fromLocation,
    setFromLocation,
    toLocation,
    setToLocation,
    stops,
    addStop,
    removeStop,
    updateStop,
    passengers,
    setPassengers,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    tripSummary,
    onShowRides,
    onBack
}) {
    const swapLocations = () => {
        const temp = fromLocation;
        setFromLocation(toLocation);
        setToLocation(temp);
    };

    return (
        <div className="mt-8">
            {/* Progress Indicator */}
            <div className="flex items-center gap-2 mb-6 mx-[30px]">
                <img src="/Arrow.png" alt="Back" className="w-4 h-4 rotate-180" />
                <span className="text-gray-700 font-medium">Back</span>
                <div className="flex items-center gap-2 ml-8">
                    <span className="text-gray-900 font-semibold">Trip details</span>
                    <span className="text-gray-300">{'>'}</span>
                    <span className="text-gray-500">Select rides</span>
                    <span className="text-gray-300">{'>'}</span>
                    <span className="text-gray-500">Checkout</span>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-gray-100 rounded-2xl shadow-lg px-12 pt-[30px] h-[650px] w-[1000px]">
                    {/* Ride Type Selection */}
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

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="trip"
                                value="hourly"
                                checked={tripType === "hourly"}
                                onChange={() => setTripType("hourly")}
                                className="accent-black"
                            />
                            <span className="text-gray-700 font-medium">Hourly</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="trip"
                                value="multistop"
                                checked={tripType === "multistop"}
                                onChange={() => setTripType("multistop")}
                                className="accent-black"
                            />
                            <span className="text-gray-700 font-medium">Multi-stop</span>
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
                                    placeholder="Address, airport, hotel, e.t.c"
                                    value={fromLocation}
                                    onChange={(e) => setFromLocation(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-8 py-2 text-sm mt-2 outline-none"
                                />
                            </div>
                            <img
                                src="/mobile data.png"
                                alt="swap"
                                onClick={swapLocations}
                                className="w-8 h-8 bg-gray-200 rounded-full p-1 cursor-pointer mt-8 hover:bg-gray-300"
                            />
                            <div className="flex-1 relative">
                                <p className="text-sm text-gray-600">To</p>
                                <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-4 mx-4" />
                                <input
                                    type="text"
                                    placeholder="Address, airport, hotel, e.t.c"
                                    value={toLocation}
                                    onChange={(e) => setToLocation(e.target.value)}
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

                    {/* Stops Section */}
                    {stops.map((stop, index) => (
                        <div key={stop.id}>
                            <p className="text-sm text-gray-600">Stop {index + 1}</p>
                            <div className="flex items-center relative">
                                <img src="/map location.png" alt="" className="w-4 h-4 absolute mt-3 mx-4" />
                                <input
                                    type="text"
                                    placeholder="Select stop location"
                                    value={stop.location}
                                    onChange={(e) => updateStop(stop.id, e.target.value)}
                                    className="border border-gray-300 rounded-lg px-10 w-[320px] py-2 text-sm mt-2 outline-none"
                                />
                                {stops.length > 1 && (
                                    <div
                                        className="flex items-center ml-4 mt-2 cursor-pointer"
                                        onClick={() => removeStop(stop.id)}
                                    >
                                        <img src="/Vector.png" alt="" className="mr-2" />
                                        <p className="text-sm">Delete stop</p>
                                    </div>
                                )}
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

                    <div className="flex flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <p className="text-sm">No. of passengers</p>
                            <div className="relative">
                                <img src="/users .png" alt="" className="w-6 h-5 absolute mt-4 mx-4" />
                                <select
                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm mt-2 outline-none appearance-none"
                                    value={passengers}
                                    onChange={(e) => setPassengers(e.target.value)}
                                >
                                    <option value="" disabled hidden className="text-gray-400">Select options</option>
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
                            <img src="/calendar.png" alt="" className="w-4 h-4 absolute mt-5 mx-4 z-10" />
                            <input
                                type="datetime-local"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
                                min={new Date().toISOString().slice(0, 16)}
                            />
                        </div>
                        {tripType === "return" && (
                            <div className="flex-1 relative">
                                <p className="text-sm">Set Return</p>
                                <img src="/calendar.png" alt="" className="w-4 h-4 absolute mt-5 mx-4 z-10" />
                                <input
                                    type="datetime-local"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-10 text-sm py-2 mt-2 outline-none"
                                    min={departureDate || new Date().toISOString().slice(0, 16)}
                                />
                            </div>
                        )}
                    </div>

                    <button
                        onClick={onShowRides}
                        className="py-2 px-6 bg-gray-700 text-white rounded-lg">
                        Show rides
                    </button>

                    <div className="flex flex-row gap-4 mt-6">
                        <div className="flex flex-row gap-4">
                            <p className="font-bold">Distance:</p>
                            <span className="text-gray-400">{tripSummary.distance}</span>
                        </div>
                        <div className="flex flex-row gap-4">
                            <p className="font-bold">Duration:</p>
                            <span className="text-gray-400">{tripSummary.duration}</span>
                        </div>
                        <div className="flex flex-row gap-2 ml-auto">
                            <p className="font-bold">Show Map</p>
                            <img src="/Arrow.png" alt="" className="w-[12px] h-[10px] mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
