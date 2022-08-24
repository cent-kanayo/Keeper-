import React, { useEffect, useState } from "react";
import CreateForm from "./components/CreateForm";
import Header from "./components/Header";
import NoteItems from "./components/NoteItems";

const App = () => {
  const getFromLocalStorage = () => {
    const list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };

  const [list, setList] = useState(getFromLocalStorage());
  const onAdd = (notes) => {
    setList([...list, notes]);
  };
  const removeItem = (cake) => {
    setList(list.filter((item, index) => index !== cake));
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <Header></Header>
      <div className="app">
        <CreateForm onAdd={onAdd} />
        <div className="notes">
          {/* {list.map((note, index) => {
            return (
              <article className="article" key={index}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
                <button onClick={() => removeItem(index)}>remove</button>
              </article>
            );
          })} */}
          <NoteItems list={list} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
};
export default App;
