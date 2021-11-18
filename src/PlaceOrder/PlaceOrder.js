import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState({});
    const [id, setId] = useState('');
    const { serviceId } = useParams();
    console.log('vera', selectedService)
    useEffect(() => {
        setId(serviceId)
    }, [])

    console.log(serviceId)
    console.log(services)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    useEffect(() => {
        const selectedService = services.find(service => service._id === serviceId);
        setSelectedService(selectedService);
        console.log('hi', selectedService)
    }, [serviceId, services])






    return (
        <div>
            <h2>Place The Order Please</h2>
            <h4>{selectedService?.name} Trip</h4>
            <p>{selectedService?._id}</p>
            <p>Price{selectedService?.price}</p>
            <p>Price{selectedService?.description}</p>
            <Link to={`/booking/${serviceId}`}> <Button>Place Order</Button></Link>

        </div>
    );
};

export default PlaceOrder;