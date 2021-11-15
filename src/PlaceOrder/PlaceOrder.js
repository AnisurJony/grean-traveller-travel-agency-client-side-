import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState({});
    const { serviceId } = useParams();
    console.log(selectedService)

    useEffect(() => {
        fetch('https://safe-crag-67288.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    useEffect(() => {
        const selectedService = services.find(service => service._id === serviceId);
        setSelectedService(selectedService);
    }, [serviceId, services])






    return (
        <div>
            <h2>Place The Order Please</h2>
            <h4>{selectedService?.name} Trip</h4>
            <p>{selectedService?._id}</p>
            <p>Price{selectedService?.price}</p>
            <p>Price{selectedService?.description}</p>
            <Link to={`/booking/${selectedService?._id}`}> <Button>Place Order</Button></Link>

        </div>
    );
};

export default PlaceOrder;