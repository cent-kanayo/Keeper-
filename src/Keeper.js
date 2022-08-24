  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({ [name]: value });
  };
  return (
    <div>
      <header>
        <h1>Keeper App</h1>
      </header>
      <div className="app">
        <form>
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
            rows="10"
            value={note.content}
            placeholder="Enter content"
            onChange={handleChange}
          ></textarea>
        </form>
        <div className="notes">
          {notes.map((note) => {
            return (
              <article key={note.id}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>