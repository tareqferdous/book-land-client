import React, { useEffect, useState } from "react";
import Home from "../Home/Home";

const Manage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() =>{
    fetch(`http://localhost:5000/products`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [products])
  console.log(products);

  const handleClick = (id) =>{
    console.log(id)
    fetch(`http://localhost:5000/delete/${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
  }

  return (
    <div className="container">
      <div className="row">
        {
          products.map(product => <li>name: {product.name}, price: {product.price} <button onClick={() => handleClick(product._id)}>Delete</button></li>)
        }
      </div>  
    </div>
  );
};

export default Manage;
