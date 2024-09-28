import React from 'react';

function MyItems() {
  // This would ideally be fetched from a server
  const items = [
    { name: "Medicine 1", price: "100", quantity: 50, category: "Analgesic" },
    // Add more items here
  ];

  return (
    <div className="items-grid">
      {items.map((item, index) => (
        <div key={index} className="item-card">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Category: {item.category}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MyItems;
