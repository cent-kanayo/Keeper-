const Book = (props) => {
  const { imgUrl, title, author, desc } = props.list;
  return (
    <div>
      <img src={imgUrl} alt="" />
      <h4>{title}</h4>
      <h5>
        by <span>{author}</span>
      </h5>
      <p>{desc}</p>
    </div>
  );
};
export default Book;
