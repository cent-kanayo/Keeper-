import React, { useState, useEffect } from "react";
import { bookList } from "./listOfBook";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [books, setBooks] = useState(bookList);
  const [name, setName] = useState(false);
  const handleClick = () => {
    setCount((count) => (count <= 0 ? (count = 0) : (count -= 1)));
  };

  useEffect(() => {
    if (count % 2 === 0) {
      setCount2(count2 + 1);
    }
  }, [count]);
  const handleRemove = (id) => {
    const newList = books.filter((book) => book.num !== id);
    setBooks(newList);
  };
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {name || <p>Welcome To Our Store</p>}
        {books.map((book) => {
          return (
            <article
              key={book.num}
              style={{
                width: "300px",
                background: "#eee",
                margin: "20px",
                padding: "2rem",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                width="200px"
                style={{ display: "block" }}
              />
              <h4>{book.title}</h4>
              <h6>{book.author}</h6>
              <p>${book.price}</p>
              <button onClick={() => handleRemove(book.num)}>Remove</button>
            </article>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

// const Book2 = (props) => {
//   return (
//     <div style={{ border: "1px solid #eee", width: "300px" }}>
//       <p>#2</p>
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/61xkvfPVupL._AC_UL600_SR600,400_.jpg"
//         alt=""
//         width="100"
//       />
//       <h4>November 9: A Novel</h4>
//       <h6>Collen Hoover</h6>
//       <p>${90}</p>
//       <p>{props.title}</p>
//     </div>
//   );
// };
// const Title = () => {
//   return <h1>React Js</h1>;
// };

// function List() {
//   return (
//     <ul>
//       <Title />
//       <li>Cars</li>
//       <li>Bikes</li>
//       <li>Jets</li>
//     </ul>
//   );
// }

// const Header = () => {
//   return (
//     <>
//       <Title />
//       <h2>Welcome to React JS Tutorial</h2>
//     </>
//   );
// };

/* {bookList.map((book) => {
          return (
            <Book
              num={book.num}
              image={book.image}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          );
        })} */

export default App;
