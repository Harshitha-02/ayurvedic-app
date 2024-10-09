import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    cures: '',
    price: '',
    quantity: '',
    category: '', // Add category field
    prescription: false, // Add prescription field
    image: null,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox for boolean fields
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.itemName);
    formDataToSend.append('cures', formData.cures);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('category', formData.category); // Ensure category is sent
    formDataToSend.append('prescription', formData.prescription); // Ensure prescription is sent
    formDataToSend.append('image', formData.image);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/medicines/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        navigate('/my-items');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to add item');
      }
    } catch (error) {
      setError('An error occurred while adding the item');
    }
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <label htmlFor="itemName">Item Name:</label>
      <input id="itemName" name="itemName" type="text" value={formData.itemName} onChange={handleChange} required />

      <label htmlFor="cures">Cures Illness:</label>
      <input id="cures" name="cures" type="text" value={formData.cures} onChange={handleChange} required />

      <label htmlFor="price">Price:</label>
      <input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required />

      <label htmlFor="quantity">Quantity Available:</label>
      <input id="quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} required />

      <label htmlFor="category">Category:</label>
      <input id="category" name="category" type="text" value={formData.category} onChange={handleChange} required />

      <label htmlFor="prescription">Prescription Required:</label>
      <input id="prescription" name="prescription" type="checkbox" checked={formData.prescription} onChange={handleChange} />

      <label htmlFor="image">Add Image:</label>
      <input id="image" name="image" type="file" onChange={handleFileChange} />

      <button type="submit">Add Item to the Store</button>
    </form>
  );
};

export default AddItem;
