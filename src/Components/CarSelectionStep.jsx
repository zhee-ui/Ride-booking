import React from "react";
import Car from "../Data.jsx/Car";

export default function CarSelectionStep({ onCarSelect, onBack }) {
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
                    <span className="text-gray-900 font-semibold">Select rides</span>
                    <span className="text-gray-300">{'>'}</span>
                    <span className="text-gray-500">Additional info</span>
                    <span className="text-gray-300">{'>'}</span>
                    <span className="text-gray-500">Checkout</span>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center gap-6 mb-8">
                {["Popular", "Premium", "Executive", "Luxury", "Shuttle", "Sprinter"].map((category) => (
                    <button
                        key={category}
                        className={`pb-2 text-sm font-medium ${category === "Popular"
                            ? "text-gray-900 border-b-2 border-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="flex justify-center">
                <Car onCarSelect={onCarSelect} />
            </div>
        </div>
    );
}
