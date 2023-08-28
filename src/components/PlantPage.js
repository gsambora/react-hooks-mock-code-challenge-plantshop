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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList allPlants={allPlants}/>
    </main>
  );
}

export default PlantPage;
