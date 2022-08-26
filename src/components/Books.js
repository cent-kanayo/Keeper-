import Book from "./Book";
import { listOfBooks2 } from "./utils";

const Books = () => {
  return (
    <div>
      <div>
        <h2>List of Books</h2>
        {listOfBooks2.map((book) => {
          return <Book list={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};

export default Books;
