import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './HomeService.css'
const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="services">
            <h2 className="text-primary mt-3">Our services</h2>
            <div className="service-container">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;