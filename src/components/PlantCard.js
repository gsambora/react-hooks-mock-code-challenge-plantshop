import React from "react";

function PlantCard({id, name, image="https://via.placeholder.com/400", price}) {
  return (
    <li id={"plant"+id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
