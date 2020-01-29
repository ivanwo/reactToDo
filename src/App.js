import React, { useState } from "react";
import "./App.css";
import ListMeister from "./ListMeister";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(
    typeof localStorage["todoItems"] != "undefined"
      ? JSON.parse(localStorage.getItem("todoItems"))
      : [
          {
            text:
              "ivan todo uses local storage to keep your to-do items to~you",
            btn: "right on!"
          }
        ]
  );

  const inputValue = event => {
    const newValue = event.target.value;
    setInput(newValue);
    // console.log(newValue);
  };

  const addToList = event => {
    // setList([...list, input]);
    if (input === "") {
      alert("please supply a to-do item");
    } else {
      localStorage.setItem(
        "todoItems",
        JSON.stringify([...list, { text: input, btn: "delete" }])
      );
      setList(JSON.parse(localStorage.getItem("todoItems")));
      setInput("");
      console.log(list);
      fetchLocalStorage();
    }
  };
  const fetchLocalStorage = _ => {
    console.log(localStorage.getItem("todoItems"));
  };

  const removeFromList = id => {
    // console.log(`delete #${id} from my precious list (${list[id]})`);
    let tempList = [...list];
    tempList.splice(id, 1);
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
      <div className="App-header">
        <h1>to "do"</h1>
        <div className="inputBar">
          <input onChange={inputValue} value={input} className="thing left">
            {}
          </input>
          <button onClick={addToList} className="thing right">
            add item
          </button>
          {/* <button onClick={fetchLocalStorage}>localstorage</button> */}
        </div>
      </div>
      {/* map provides index for everything, you MUST include 'key' on individual items */}
      <section className="todoHolder">
        {list.map((listItem, index) => (
          <ListMeister
            key={index}
            list={listItem}
            id={index}
            remove={removeFromList}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
