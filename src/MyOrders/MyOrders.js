import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])


    const handleDelete = id => {

        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {

            const url = `http://localhost:5000/orders/${id}`;

            fetch(url, {

                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert('Order deleted successfully');

                        const remainingOrders = orders.filter(order => order._id !== id);

                        setOrders(remainingOrders);

                    }
                })
        }
    }

    return (
        <div>
            <h2>You have: {orders.length} Orders</h2>
            <ul>
                {orders.map(order => <li
                    key={order._id}
                >{order.name}::{order.email} <button onClick={() => handleDelete(order._id)}>Cencel</button></li>)}
            </ul>
        </div>
    );
};

export default MyOrders;