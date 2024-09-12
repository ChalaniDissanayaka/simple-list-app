import React, { useState } from "react";
import './App.css';

function App() {
  // State for managing the list of items
  const [items, setItems] = useState([]);
  // State for managing the current input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding a new item to the list
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear input after adding
    }
  };

  // Function to handle removing an item from the list
  const removeItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  // Function to handle updating an item
  const updateItem = (index) => {
    const newItem = prompt("Enter the updated value:", items[index]);
    if (newItem !== null && newItem.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[index] = newItem;
      setItems(updatedItems);
    }
  };

  return (
    <div className="App">
      <h1>Simple List App</h1>

      {/* Input field for adding items */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>

      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {/* Update and remove buttons for each item */}
            <div className="button-group">
              <button onClick={() => updateItem(index)}>Update</button>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;