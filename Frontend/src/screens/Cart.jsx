import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let state = useCart();
  let dispatch = useDispatchCart();
  if (state.length === 0) {
    return (
      <div
        className="m-5 w-100 text-center fs-3"
        style={{ color: "whitesmoke" }}
      >
        Your Cart is Empty
        {console.log(state)}
      </div>
    );
  }
  const totalPrice = state.reduce((total, item) => total + item.price, 0);

  const handleCheck = async () => {
    let email = localStorage.getItem("email");
    let currentDate = new Date();
  
    let response = await fetch("http://localhost:8500/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: state,
        email: email,
        date: currentDate, // Send date as a Date object
      }),
    });
  
    if (response.ok) {
      dispatch({ type: "drop" });
    } else {
      console.error("Error:", response.statusText);
    }
  };
  

  return (
    <div>
      <div className="container m-auto mt-5 table-responisve-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="fs-4">
            <tr>
              <th scope="col">S/No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => dispatch({ type: "remove", id: index })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ color: "whitesmoke" }}>
          <h1>
            Total Price:
            {totalPrice}/-
          </h1>
        </div>
        <div>
          <button
            className="btn btn-outline-danger justify-center"
            onClick={handleCheck}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
