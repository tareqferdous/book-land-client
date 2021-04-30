import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        const shippingData = {...loggedInUser}
        shippingData.shippingInfo = data
        setLoggedInUser(shippingData)

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loggedInUser) 
        })
        .then(response => {
            console.log(response);
        })
    };
    console.log(loggedInUser)
    return (
        <div className="container">
             <form className="search-box text-center" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Name" {...register("name")} />
                <br/>
                <input name="email" placeholder="Email" {...register("email")} />
                <br/>
                <input name="address" placeholder="Address" {...register("address")} />
                <br/>
                <input className="btn-primary" type="submit" />
             </form>
        </div>
    );
};

export default Shipment;