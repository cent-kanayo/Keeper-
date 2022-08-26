import Books from "./components/Books";
import { useState } from "react";
const App = () => {
  console.log(useState("hello"));
  return (
    <div>
      <h1>Book Store</h1>
      <Books />
    </div>
  );
};

export default App;
