import React, {useState} from "react";

function PlantCard({id, name, image="https://via.placeholder.com/400", price}) {
  const [notSoldOut, setSoldOut] = useState("true");

  function handleClick(event){
    console.log("clicked "+ event.target.id.substring(3,))
    setSoldOut(!notSoldOut);
  }

  return (
    <li id={"plant"+id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {notSoldOut ? (
        <button onClick={handleClick} id={"btn"+id} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} id={"btn"+id}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
