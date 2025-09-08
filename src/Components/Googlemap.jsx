import React from "react";
import MyMap from "./MyMap";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">My Google Map</h1>
        <MyMap />
      </div>
    </div>
  );
}