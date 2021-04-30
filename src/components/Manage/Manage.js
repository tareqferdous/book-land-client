import React, { useEffect, useState } from "react";
import Home from "../Home/Home";

const Manage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() =>{
    fetch(`https://young-garden-91386.herokuapp.com/products`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [products])
  console.log(products);

  const handleClick = (id) =>{
    console.log(id)
    fetch(`https://young-garden-91386.herokuapp.com/delete/${id}`,{
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
