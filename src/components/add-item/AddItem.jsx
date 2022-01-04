import React, { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-name">Item Name</label>
      <input
        name="item-name"
        id="item-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
