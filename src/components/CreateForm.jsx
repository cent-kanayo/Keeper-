import React, { useState } from "react";

const CreateForm = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [empty, setEmpty] = useState(true);
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
      {empty && (
        <p style={{ background: "red", color: "white", borderRadius: "5px" }}>
          Please enter all fields
        </p>
      )}
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
          rows="3"
          value={note.content}
          placeholder="Enter content"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          disabled={empty}
          style={{ display: "block", width: "100%", cursor: "disa" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
