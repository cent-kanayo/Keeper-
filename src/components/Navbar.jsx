import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>BookStore</h2>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
