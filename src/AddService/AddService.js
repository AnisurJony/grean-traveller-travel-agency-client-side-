import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";



const AddService = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {


        fetch('http://localhost:5000/servcies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data.insertedId)
                    alert('Service has added successfully');
                    reset();
                }
            })
    };


    return (
        <div className="add-service">
            <h2>Please add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;