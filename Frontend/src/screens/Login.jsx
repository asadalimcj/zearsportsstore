import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import background from "../imag/background.png";

export default function Login() {
  const Navigate = useNavigate();
  const [credential, setcredentilas] = React.useState({
    email: "",
    password: "",
  });
  async function handleSubmission(event) {
    event.preventDefault();

    const response = await fetch("https://zearsportsstore-backend.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!data.success) {
      alert("Invalid credentials");
    } else {
      alert("logIn successfully!");
      localStorage.setItem("email", credential.email);
      localStorage.setItem("token", json.token);
      Navigate("/");
    }
  }

  function handleOnchange(event) {
    const { name, value } = event.target;
    setcredentilas((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
  };

  return (
    <div className="form-container" style={backgroundImage}>
      <h1 style={{ color: "whitesmoke", paddingTop: "6rem" }}>Login Here</h1>
      <form onSubmit={handleSubmission}>
        <input
          onChange={handleOnchange}
          type="email"
          className="form-control"
          name="email"
          value={credential.email}
          placeholder="Email Address"
        />

        <input
          onChange={handleOnchange}
          type="password"
          className="form-control"
          name="password"
          value={credential.password}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <Link to="/createuser" className="mt-4 pl-3 btn btn-danger">
          Not Registered
        </Link>
      </form>
    </div>
  );
}
