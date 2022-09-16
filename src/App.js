import React, { useState, useEffect } from "react";
import { bookList } from "./listOfBook";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = "https://api.github.com/user";
  const fetchUsers = async () => {
    try {
      // const resp = await fetch(url);
      // const data = await resp.json();
      // if (data.length > 0) {
      //   setUsers(data);
      //   setLoading(false);
      // } else {
      //   setError(true);
      //   setLoading(false);
      // }
      const result = await axios.get(url);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops! Something went wrong. Please Try again</h1>;
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt="" width="200" />
            <h3>{user.login}</h3>
          </div>
        ))}
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
