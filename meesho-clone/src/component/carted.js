import "./cart/cart.css";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "../features/cartslice";
export const Carted = (props) => {
  const dispatch = useDispatch();
  let amount = props.price * props.quantity;
  // console.log(amount)
  let discountamount = Math.floor((amount * props.discount) / 100);
  let totalsubtotal = amount - discountamount;
  const Add = (item) => {
    dispatch(increase(item));
    // console.log(item)
  };
  const Sub = (item) => {
    dispatch(decrease(item));
    // console.log(item);
  };
  const remove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <div className="Carted">
        <img src={props.img} alt="" />
        <p>ID:{props.id}</p>
        <p>Brand:{props.brand}</p>
        <p>Price:{props.price}</p>
        <p>Discount:{props.discount}%</p>
        <p>QTY:{props.quantity}</p>
        <button onClick={() => Add(props)}>+</button>
        <button onClick={() => Sub(props)}>-</button>
        <button onClick={() => remove(props.index)}>Remove</button>
        <p>Subtotal:{totalsubtotal}</p>
      </div>
    </>
  );
};

export const TOTAL = () => {
  const items = useSelector((state) => state.cart.cartSlice.items);
  // console.log(items)
  let totalamount = 0;
  const getTotal = () => {
    items.forEach((element) => {
      let amount = element.price * element.quantity;
      // console.log(amount);
      let total = 0;
      total += amount;
      let discount = Math.floor((total * element.discount) / 100);
      console.log(discount);
      totalamount += total - discount;
      // console.log(totalamount)
    });
  };
  getTotal();
  return (
    <>
      <h2 className="total-amount">TOTAL:{totalamount}</h2>
    </>
  );
};
