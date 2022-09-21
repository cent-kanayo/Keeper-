import React, { useState, useEffect } from "react";

const App = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [usersInfo, setUserInfo] = useState([]);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);

  const canSave = [
    userRegister.firstName,
    userRegister.lastName,
    userRegister.gender,
    userRegister.password,
    userRegister.email,
    userRegister.confirmPassword,
  ].every(Boolean);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegister((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (!canSave) {
      setDisable(true);
      return;
    } else if (
      canSave &&
      userRegister.password !== userRegister.confirmPassword
    ) {
      alert("Password mismatch");
      setError(true);
      return;
    } else {
      setUserInfo((prevState) => [
        ...prevState,
        {
          firstName: userRegister.firstName,
          lastName: userRegister.lastName,
          gender: userRegister.gender,
          email: userRegister.email,
          confirmPassword: userRegister.confirmPassword,
          password: userRegister.password,
        },
      ]);
    }
    setUserRegister({
      firstName: "",
      lastName: "",
      gender: "",
      password: "",
      email: "",
      confirmPassword: "",
    });
  };
  useEffect(() => {
    if (canSave) {
      setDisable(false);
    }
  }, [canSave]);

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
            value={userRegister.firstName}
            onChange={handleChange}
            name="firstName"
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={userRegister.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Gender</label>
          <select
            name="gender"
            id=""
            value={userRegister.gender}
            onChange={handleChange}
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
            value={userRegister.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={userRegister.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={userRegister.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
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
