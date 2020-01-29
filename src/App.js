import React, { useState } from "react";
import "./App.css";
import ListMeister from "./ListMeister";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(
    typeof localStorage["todoItems"] != "undefined"
      ? JSON.parse(localStorage.getItem("todoItems"))
      : []
  );

  const inputValue = event => {
    const newValue = event.target.value;
    setInput(newValue);
    console.log(newValue);
  };

  const addToList = event => {
    setList([...list, input]);

    updateLocalStorage();
    fetchLocalStorage();
  };

  const updateLocalStorage = _ => {
    localStorage.setItem("todoItems", JSON.stringify(list));
  };

  const removeFromList = id => {
    // alert(`delete ${id} from my precious list`);
    let tempList = [];
    for (let i = 0; i < list.length; i++) {
      if (id !== i) tempList.push(list[i]);
    }
    setList(tempList);
    console.log(list);
    updateLocalStorage();
    fetchLocalStorage();
    /*
    setList(prev=> {
      return prev.filter((e,index)=>{return index !== id});
    });
    */
  };
  const fetchLocalStorage = _ => {
    console.log(localStorage.getItem("todoItems"));
  };
  /*
  // this way taps into values of previous items
  // uses less memory
  const addToList = event => {
    setList(prev => {
      return [...prev, input]
    });
  }
   */

  return (
    <div className="App">
      <h1>to "do"</h1>
      <input onChange={inputValue} value={input}></input>
      <button onClick={addToList}>add item</button>
      <button onClick={fetchLocalStorage}>
        console log items in localstorage
      </button>
      {/* map provides index for everything, you MUST include 'key' on individual items */}
      {list.map((listItem, index) => (
        <ListMeister
          key={index}
          list={listItem}
          id={index}
          remove={removeFromList}
        />
      ))}
    </div>
  );
}

export default App;
