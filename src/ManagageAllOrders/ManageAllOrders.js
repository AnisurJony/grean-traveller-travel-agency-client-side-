import React, { useEffect, useState } from 'react';


const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://safe-crag-67288.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleDelete = id => {

        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {

            const url = `https://safe-crag-67288.herokuapp.com/orders/${id}`;

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
    };



    return (
        <div>

            <h2>There are : {orders.length} Orders place from user</h2>
            <ul>
                {orders.map(order => <li
                    key={order._id}
                >Service Name: {order.servicename}
                    <br />
                    User name: {order.name}
                    <br />
                    User Email: {order.email}
                    <br />
                    Status: {order.status}
                    <br />
                    <button >Approve</button>

                    <button onClick={() => handleDelete(order._id)}>Cencel</button></li>)}
            </ul>
        </div>
    );
};

export default ManageAllOrders;