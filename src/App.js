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
    // setList([...list, input]);
    localStorage.setItem("todoItems", JSON.stringify([...list, input]));
    setList(JSON.parse(localStorage.getItem("todoItems")));
    console.log(list);
    fetchLocalStorage();
  };
  const fetchLocalStorage = _ => {
    console.log(localStorage.getItem("todoItems"));
  };

  const removeFromList = id => {
    console.log(`delete #${id} from my precious list (${list[id]})`);
    let tempList = [...list];
    tempList.splice(list[id], 1);
    localStorage.setItem("todoItems", JSON.stringify(tempList));
    fetchLocalStorage();
    setList([...JSON.parse(localStorage.getItem("todoItems"))]);
    console.log(list);
    // let tempList = [];
    // for (let i = 0; i < list.length; i++) {
    //   if (id !== i) {
    //     console.log(list[i]);
    //     tempList.push(list[i]);
    //   }
    // }
    // console.log(tempList);
    // setList([...tempList]);
    // console.log(list);
    // setList(prev => {
    //   return prev.filter((e, index) => {
    //     return index !== id;
    //   });
    // });
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
  // fetchLocalStorage();
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
