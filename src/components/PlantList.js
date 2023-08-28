import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants}) {
  console.log(allPlants)
  return (
    <ul className="cards">{
      allPlants.map((plant)=>{
        return(<PlantCard key={plant.id} id={plant.id} name={plant.name} 
                image={plant.image} price={plant.price}/>)
      })
      }
    </ul>
  );
}

export default PlantList;
