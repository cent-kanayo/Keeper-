import React, { useState, useEffect } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usersInfo, setUserInfo] = useState([]);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (
      !firstName &&
      !lastName &&
      !password &&
      !confirmPassword &&
      !email &&
      !gender
    ) {
      setDisable(true);
      return;
    }
    if (password !== confirmPassword) {
      alert("Password mismatch");
      setError(true);
      return;
    }
    setUserInfo((prevState) => [
      ...prevState,
      {
        firstName,
        lastName,
        gender: gender,
        email: email,
        confirmPassword: confirmPassword,
        password: password,
      },
    ]);
    setEmail("");
    setConfirmPassword("");
    setLastName("");
    setFirstName("");
    setGender("");
    setPassword("");
  };
  useEffect(() => {
    if (
      firstName &&
      lastName &&
      password &&
      confirmPassword &&
      email &&
      gender
    ) {
      setDisable(false);
    }
  }, [firstName, lastName, password, confirmPassword, email, gender]);
  return (
    <div style={{ paddingTop: "10%" }}>
      <form
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#eee",
          padding: "20px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {error && <p>Password does not match!</p>}
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Gender</label>
          <select
            name=""
            id=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          style={{
            padding: "4px 8px",
            background: "blue",
            color: "white",
            border: "none",
          }}
          type="submit"
          onClick={handleSubmit}
          disabled={disable}
        >
          Submit
        </button>
      </form>
      <div>
        {usersInfo.map((userInfo, index) => {
          return (
            <div
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              key={index}
            >
              <h3>{userInfo.firstName}</h3>
              <h3>{userInfo.lastName}</h3>
              <p>{userInfo.gender}</p>
              <p>{userInfo.email}</p>
              <p>{userInfo.password}</p>
              <p>{userInfo.confirmPassword}</p>
              <a href="#">Hi</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
