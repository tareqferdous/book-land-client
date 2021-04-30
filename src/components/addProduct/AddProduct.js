import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);


    const onSubmit = data => {
      const eventData = {
        name: data.name,
        price: data.price,
        imageUrl: imageUrl
      };
      const url = `https://young-garden-91386.herokuapp.com/addEvent`
        console.log(eventData)
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2fcb3e4a487e3faff20e9074db8dbc9e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
  return (
    <div className="container">
      <form className="search-box text-center" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="New Event" {...register("name")} />
        <br/>
        <input name="price" defaultValue="price" {...register("price")} />
        <br/>
        <input type="file" onChange={handleImageUpload}/> 
        <br/>
        <input className="btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
