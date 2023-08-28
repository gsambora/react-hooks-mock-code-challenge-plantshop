import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    //console.log("i got here");
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => {
        setAllPlants(plants);
      })
  }, []);

  function handleNewPlant(newPlant){
    // const newPlant = {
    //   name: name,
    //   image: image,
    //   price: price,
    //   id: allPlants.length+1
    // }
    setAllPlants([...allPlants, newPlant])
  }

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search />
      <PlantList allPlants={allPlants}/>
    </main>
  );
}

export default PlantPage;
