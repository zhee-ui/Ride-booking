import React, { useState } from "react";
import Booking from "../Components/Booking";
import Card from "../Components/Card";

export default function Car() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="flex flex-row gap-8">
      <div className="space-y-8">
        <Card
          title="Premium Sedan"
          maxPeople={3}
          maxLuggage={3}
          airPortTime="Airport domestic 60min, International 75 min"
          interCityTime="5 min"
          desc="Camry, Tesla, Kia, or Similar Vehicles"
          price="$527"
          image="/Car 1.png"
          onContinue={(car) => setSelectedCar(car)}
          
        />
        <Card
          title="Executive Sedan"
          maxPeople={3}
          maxLuggage={3}
          airPortTime="Airport domestic 60min, International 75 min"
          interCityTime="5 min"
          desc="Continental or Similar Exec-Sedan"
          price="$527"
          image="/Car 2.png"
          onContinue={(car) => setSelectedCar(car)}
          
        />
        <Card
          title="Luxury Sedan"
          maxPeople={3}
          maxLuggage={3}
          airPortTime="Airport domestic 60min, International 75 min"
          interCityTime="5 min"
          desc="S-Class or Similar Lux-Sedan"
          price="$527"
          image="/Car 3.png"
          onContinue={(car) => setSelectedCar(car)}
          
        />
        <Card
          title="Premium Minivan"
          maxPeople={5}
          maxLuggage={3}
          airPortTime="Airport domestic 45 min, International 75 min"
          interCityTime="5 min"
          desc="Odyssey or Similar Minivans"
          price="$527"
          image="/Car 4.png"
          onContinue={(car) => setSelectedCar(car)}
        
        />
        <Card
          title="Executive SUV"
          maxPeople={5}
          maxLuggage={3}
          airPortTime="Airport domestic 45 min, International 75 min"
          interCityTime="5 min"
          desc="Odyssey or Similar Minivans"
          price="$527"
          image="/Car 5.png"
          onContinue={(car) => setSelectedCar(car)}
          
        />
        <Card
          title="Luxury SUV"
          maxPeople={6}
          maxLuggage={5}
          airPortTime="Airport domestic 45 min, International 75 min"
          interCityTime="5 min"
          desc="Escalade or Similar SUV"
          price="$527"
          image="/Car 6.png"
          onContinue={(car) => setSelectedCar(car)}
          
        />
      </div>
      
        <div>
          {<Booking car={selectedCar} />}
          
        </div>
      
    </div>
  );
}