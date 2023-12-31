import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);
  const addNewItem = (item) => {
    setItems([item, ...items]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
    else return;
  };

  return (
    <div>
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
