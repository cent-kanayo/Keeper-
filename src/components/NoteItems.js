import React from "react";

const NoteItems = ({ list, removeItem }) => {
  return (
    <div className="note">
      {list.map((note, index) => {
        return (
          <article className="article" key={index}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={() => removeItem(index)}>remove</button>
          </article>
        );
      })}
    </div>
  );
};

export default NoteItems;
