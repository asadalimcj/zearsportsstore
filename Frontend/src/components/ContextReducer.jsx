import React, { createContext, useContext, useReducer } from "react";

const stateContext = createContext();
const dispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          img: action.img,
          price: action.price,
        },
      ];
      case'drop':
      let empty = [];
      return empty
    case "remove":
      return state.filter((item, index) => index !== action.id);
    case "update":
      let Newarr = [...state];
      Newarr.find((item, index) => {
        if (item.id === action.id) {
          Newarr[index] = { ...item, qty: action.qty, price: action.price };
        }
        return Newarr;
      });
      return Newarr;
    default:
      console.log("reducer is not working");
      return state; // This return is necessary in the default case.
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useCart = () => useContext(stateContext);
export const useDispatchCart = () => useContext(dispatchContext);
