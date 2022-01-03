import React, { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(item.name);

  return editMode ? (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          onChange({ id: item.id, name });
          setEditMode(false);
        }}
      >
        Save
      </button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  ) : (
    <div>
      <p>{item.name}</p>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}
