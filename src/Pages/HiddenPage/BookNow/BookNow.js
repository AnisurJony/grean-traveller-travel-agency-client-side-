import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './BookNow.css'
const BookNow = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [selectedService, setSelectedService] = useState({});
    const { serviceId } = useParams();

    console.log(selectedService)

    const onSubmit = data => {



        const order = {
            ...data,
            serviceName: `${selectedService?.name}`,
            status: 'pending'
        }

        console.log(order)
        fetch('https://safe-crag-67288.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');

                    reset();
                }
            })
    };



    useEffect(() => {
        fetch('https://safe-crag-67288.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const service = data.find(service => service._id == serviceId)

                setSelectedService(service)
            })
    }, [serviceId])












    return (
        <>
            <div className="booking-form">
                <h1 className="my-5 "><span className="text-info">Book </span>Now</h1>
                <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='my-3'>{selectedService.name} Trip</h2>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <br />
                    <br />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    {/* <input placeholder="Service Name" defaultValue={`${selectedService?.name} Trip`} {...register("servicename")} /> */}
                    {/* <br />
                    <br /> */}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <br />
                    <br />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <br />
                    <br />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    <br />
                    <br />

                    <input type="submit" />
                </form>
            </div >

        </>
    );
};

export default BookNow;