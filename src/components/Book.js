const Book = (props) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        width: "300px",
        margin: "10px",
      }}
    >
      <p>#{props.num}</p>
      <img src={props.image} alt="" width="100" />
      <h4>{props.title}</h4>
      <h6>{props.author}</h6>
      <p>${props.price}</p>
    </div>
  );
};
export default Book;
