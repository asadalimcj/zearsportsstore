import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const Navigate = useNavigate();
  const [credential, setcredentilas] = React.useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  async function handleSubmission(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8500/api/createuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.location,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert("Enter valid credentials");
    } else {
      alert("Registered successfully!");
      // setcredentilas({
      //   name: "",
      //   email: "",
      //   password: "",
      //   location: "",
      // });
      Navigate("/login");
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
  return (
    <div className="form-container">
      <form onSubmit={handleSubmission}>
        <input
          onChange={handleOnchange}
          type="text"
          className="form-control"
          name="name"
          value={credential.name}
          placeholder="User Name"
        />

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

        <input
          onChange={handleOnchange}
          type="text"
          className="form-control"
          name="location"
          value={credential.location}
          placeholder="Location"
        />

        <button type="submit">Submit</button>
        <Link to="/login" className="pl-3 mt-4 btn btn-danger">
          Already A User
        </Link>
      </form>
    </div>
  );
}

export default Signup;
