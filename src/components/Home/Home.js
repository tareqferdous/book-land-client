import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://young-garden-91386.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="container grid text-center">

      {
        products.map(product => <Card className="shadow" style={{ width: '17rem' }}>
        <Card.Img className="w-100 img-fluid" variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <h3>{'$' + product.price}</h3>
          <Link to={`/checkOut/${product._id}`}><button className="btn-primary">Buy Now</button></Link>
        </Card.Body>
      </Card>)
      }
    </div>
  );
};

export default Home;
