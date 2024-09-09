import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
function Card(props) {
  let options = props.options;
  let priceOpTion = Object.keys(options);
  let dispatch = useDispatchCart();
  let state = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const pricRef = useRef();
  const finalprice = qty * (options[size] ? parseInt(options[size]) : 0);

  function handleAddToCart() {
    let Updateitem = [];
    for (const item of state) {
      if (item.id === props.dataItem._id) {
        Updateitem = item;
        break;
      }
    }
  if(Updateitem.length !==0)
  {
    if (Updateitem.size === size) {
      dispatch({
        type: "update",
        id: props.dataItem._id,
        qty: qty,
        price: finalprice,
      });
    } else if (Updateitem.size !== size) {
      dispatch({
        type: "add",
        id: props.dataItem._id,
        name: props.dataItem.name,
        qty: qty,
        size: size,
        price: finalprice,
        img: props.dataItem.img,
      });
      return;
    }
    return;
  }

    dispatch({
      type: "add",
      id: props.dataItem._id,
      name: props.dataItem.name,
      qty: qty,
      size: size,
      price: finalprice,
      img: props.dataItem.img,
    });
  }
  useEffect(() => {
    setSize(pricRef.current.value);
  });
  return (
    <div>
      <div>
        <div className="card" style={{ width: "18rem", maxHeight: "auto" }}>
          <img src={props.dataItem.img} className="card-img-top" alt="..." />
          {/* <span>ZearSports</span> */}
          <div className="card-body">
            <p className="card-text">ZearSports</p>
            <h5 className="card-title">{props.dataItem.name}</h5>

            <div className="container w-100">
              <select
                onChange={(event) => setQty(event.target.value)}
                className="m-2 h-100 rounded p-2"
                style={{ backgroundColor: "#E8F6EA" }}
              >
                {" "}
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={(event) => setSize(event.target.value)}
                className="m-2 h-100 rounded p-2"
                style={{ backgroundColor: "#E8F6EA" }}
                ref={pricRef}
              >
                {priceOpTion.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">Price:{finalprice}</div>
              <hr className="my-4 border-3 border-dark" />

              <button
                className="btn btn-outline-danger justify-center"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
