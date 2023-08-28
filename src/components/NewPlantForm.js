import React, {useState} from "react";

function NewPlantForm({handleNewPlant}) {
  // const [name, setName] = useState("");
  // const [img, setImg] = useState("");
  // const [price, setPrice] = useState("");


  function onNewPlant(event){
    event.preventDefault();

    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: event.target.name.value,
        image: event.target.image.value,
        price: event.target.price.value
      })
    })
    .then((r)=>r.json())
    .then((newPlant)=>handleNewPlant(newPlant))

    event.target.reset()
  }

  return (
    <div onSubmit={onNewPlant} className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name"/>
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
