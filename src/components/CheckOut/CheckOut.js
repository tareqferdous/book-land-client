import { Button } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';


const CheckOut = () => {
    const {id} = useParams();
    console.log(id)

    let history = useHistory()

    const [product, setProduct] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    useEffect(() =>{
        fetch(`https://young-garden-91386.herokuapp.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProduct(data[0])
        })
    }, [])
    console.log(product);

    const handleClick = () =>{
       if(product.name){
           const orderDetails = {...loggedInUser}
           orderDetails.details = product
           setLoggedInUser(orderDetails)
           history.push('/shipment')
       }
    }

    return (
        <div className="container grid text-center">
             <Card className="shadow" style={{ width: '17rem' }}>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <h3>{'$' + product.price}</h3>
                <Link><button onClick={handleClick} className="btn-primary">Place Order</button></Link>
                </Card.Body>
             </Card>
        </div>
    );
};

export default CheckOut;