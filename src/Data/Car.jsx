import React, { useState } from "react";
import Card from "../Components/Card";

export default function Car({ onSelectCar }) {
  const [isShow, setIsShow] = useState(false);
  const cars = [
    {
      title: "Premium Sedan",
      maxPeople: 3,
      maxLuggage: 3,
      airPortTime: "Airport domestic 60min, International 75 min",
      interCityTime: "5 min",
      desc: "Camry, Tesla, Kia, or Similar Vehicles",
      price: "$527",
      image: "/Car 1.png",
    },
    {
      title: "Executive Sedan",
      maxPeople: 3,
      maxLuggage: 3,
      airPortTime: "Airport domestic 60min, International 75 min",
      interCityTime: "5 min",
      desc: "Continental or Similar Exec-Sedan",
      price: "$527",
      image: "/Car 2.png",
    },
    {
      title: "Luxury Sedan",
      maxPeople: 3,
      maxLuggage: 3,
      airPortTime: "Airport domestic 60min, International 75 min",
      interCityTime: "5 min",
      desc: "S-Class or Similar Lux-Sedan",
      price: "$527",
      image: "/Car 3.png",
    },
    {
      title: "Premium Minivan",
      maxPeople: 5,
      maxLuggage: 3,
      airPortTime: "Airport domestic 45 min, International 75 min",
      interCityTime: "5 min",
      desc: "Odyssey or Similar Minivans",
      price: "$527",
      image: "/Car 4.png",
    },
    {
      title: "Executive SUV",
      maxPeople: 5,
      maxLuggage: 3,
      airPortTime: "Airport domestic 45 min, International 75 min",
      interCityTime: "5 min",
      desc: "Odyssey or Similar Minivans",
      price: "$527",
      image: "/Car 5.png",
    },
    {
      title: "Luxury SUV",
      maxPeople: 6,
      maxLuggage: 5,
      airPortTime: "Airport domestic 45 min, International 75 min",
      interCityTime: "5 min",
      desc: "Escalade or Similar SUV",
      price: "$527",
      image: "/Car 6.png",
    },
  ];

  return (
    <div className="space-y-6">
      {cars.map((car, index) => (
        <Card
          key={index}
          car={car}
          onContinue={() => onSelectCar(car)}
          isShow={isShow}
          setIsShow={setIsShow}
        />
      ))}
    </div>
  );
}
