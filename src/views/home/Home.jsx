import React, { useReducer } from 'react';
import AddItem from '../../components/add-item/AddItem';
import List from '../../components/list/List';

const items = [
  { id: 0, name: 'Parsley' },
  { id: 1, name: 'Sage' },
  { id: 2, name: 'Rosemary' },
  { id: 3, name: 'Thyme' },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: Math.max(...items.map((item) => item.id)) + 1,
          name: action.name,
          checked: false,
        },
      ];
    }
    case 'edit': {
      return items.map((item) =>
        item.id === action.item.id ? action.item : item
      );
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
  }
}

export default function Home() {
  const [items, dispatch] = useReducer(itemsReducer, items);

  const handleAddItem = (name) => {
    dispatch({
      type: 'add',
      name,
    });
  };

  const handleEditItem = (name) => {
    dispatch({
      type: 'edit',
      name,
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'delete',
      id,
    });
  };

  return (
    <>
      <h1>Shopping List!</h1>
      <AddItem onAddItem={handleAddItem} />
      <List
        items={items}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}
