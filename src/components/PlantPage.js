import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => {
        setAllPlants(plants);
      })
  }, []);

  function handleNewPlant(newPlant){
    setAllPlants([...allPlants, newPlant])
  }

  function handleSearch(searchText){
    if(searchText === ""){
      resetPlants()
    } else{
      const updatedPlants = allPlants.filter((plant)=>plant.name.toLowerCase().includes(searchText.toLowerCase()))
      setAllPlants(updatedPlants);
    }
  }

  function resetPlants(){
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plants) => {
      setAllPlants(plants);
    })
  }

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search handleSearch={handleSearch} resetPage={resetPlants}/>
      <PlantList allPlants={allPlants}/>
    </main>
  );
}

export default PlantPage;
