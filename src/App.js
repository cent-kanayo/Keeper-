import listOfBooks from "./components/utils";
import Books from "./components/Books";
import { useEffect, useState } from "react";
const App = () => {
  const [users, setUsers] = useState();
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [name, setName] = useState("Cent");
  const [isTrue, setIsTrue] = useState(false);
  const url = "https://randomuser.me/api/?results=5";
  const fetchUsers = async (url) => {
    try {
      setLoading(true);
      const users = await fetch(url);
      const result = await users.json();
      setUsers(result);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers(url);
  }, []);
  useEffect(() => {
    if (count % 2 !== 0) {
      setNumber(number);
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }

    // eslint-disable-next-line
  }, [count]);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return (
      <h2>
        Oops!. We can't seem to find what you are looking for. Please try again.
      </h2>
    );
  }
  const {
    email,
    picture: { large },
    country,
    name: { first, last },
    phone,
  } = users.results[count];
  const arrLength = users.results.length;
  return (
    <div>
      <h1>Users</h1>
      {isTrue && <h1>Yes Short circuiting is working</h1>}
      <h1>{number}</h1>
      <h1>{name || "Baniext"}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "20px" }}>
          <img src={large} alt="" />
          <h2>
            {first} {last}
          </h2>
          <h4>{country}</h4>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
      <div style={{ width: "200px", margin: "0 auto" }}>
        <button
          style={{ margin: "5px", padding: "8px" }}
          onClick={() => setCount(count === 0 ? 0 : count - 1)}
        >
          prev
        </button>
        <button
          style={{ margin: "5px", padding: "8px" }}
          onClick={() =>
            setCount(count === arrLength - 1 ? arrLength - 1 : count + 1)
          }
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
