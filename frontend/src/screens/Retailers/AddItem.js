import React from 'react';

function AddItem() {
  return (
    <form className="add-item-form">
      <label htmlFor="itemName">Item Name:</label>
      <input id="itemName" type="text" />

      <label htmlFor="cures">Cures Illness:</label>
      <input id="cures" type="text" />

      <label htmlFor="price">Price:</label>
      <input id="price" type="number" />

      <label htmlFor="quantity">Quantity Available:</label>
      <input id="quantity" type="number" />

      <label htmlFor="image">Add Image:</label>
      <input id="image" type="file" />

      <button type="submit">Add Item to the Store</button>
    </form>
  );
}

export default AddItem;