import React, { useState } from "react";

const CreateForm = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(note);
  };
  return (
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Enter Title"
          className="form-input"
          onChange={handleChange}
        />

        <textarea
          name="content"
          cols="3"
          rows="5"
          value={note.content}
          placeholder="Enter content"
          onChange={handleChange}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateForm;
