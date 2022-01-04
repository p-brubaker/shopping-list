import React from 'react';
import Item from '../item/Item';

export default function List({ items, onEditItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} onChange={onEditItem} onDelete={onDeleteItem} />
        </li>
      ))}
    </ul>
  );
}
