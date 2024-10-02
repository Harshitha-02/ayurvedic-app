import React, { useState } from 'react';
import './MyOrders.css'; // Make sure to link the CSS file

function MyOrders() {
    const [status, setStatus] = useState('received'); // Default to received

    const orders = [
        {
            id: 1,
            itemName: "Item Name 1",
            price: "20",
            totalValue: "40",
            buyer: "John Doe",
            quantity: "2",
            recommendedBy: "Dr. Smith",
            image: "/path-to-image-1.jpg"
        },
        {
            id: 2,
            itemName: "Item Name 2",
            price: "30",
            totalValue: "90",
            buyer: "Jane Roe",
            quantity: "3",
            recommendedBy: "Dr. Jones",
            image: "/path-to-image-2.jpg"
        },
        {
            id: 3,
            itemName: "Item Name 3",
            price: "50",
            totalValue: "150",
            buyer: "Jim Beam",
            quantity: "3",
            recommendedBy: "Dr. Who",
            image: "/path-to-image-3.jpg"
        }
    ];

    return (
        <div className="orders-container">
            <h1>My Orders</h1>
            <div className="order-tabs">
                <button className={status === 'received' ? 'active' : ''} onClick={() => setStatus('received')}>Received (Not Sent)</button>
                <button className={status === 'sent' ? 'active' : ''} onClick={() => setStatus('sent')}>Sent</button>
            </div>
            {orders.map(order => (
                <div key={order.id} className="order-card">
                    <img src={order.image} alt={`Order ${order.id}`} />
                    <div className="order-details">
                        <p><strong>Item Name:</strong> {order.itemName}</p>
                        <p><strong>Price:</strong> ${order.price}</p>
                        <p><strong>Total Value:</strong> ${order.totalValue}</p>
                        <p><strong>Name of the Buyer:</strong> {order.buyer}</p>
                        <p><strong>Quantity:</strong> {order.quantity}</p>
                        <p><strong>Recommended by Dr:</strong> {order.recommendedBy}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyOrders;