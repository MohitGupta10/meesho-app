// import { useLocation } from "react-router-dom";
import { Carted } from "../carted";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { removeItem, clearItem } from "../../features/cartslice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { TOTAL } from "../carted";
import "./cart.css";
// import { Button } from "@mui/material";
export const CartPage = () => {
  let dispatch = useDispatch();
  let items = useSelector((state) => state.cart.cartSlice.items);
  const navigate = useNavigate();
  // const remove = (item) => {
  //   dispatch(removeItem(item));
  // };
  const viewProduct = () => {
    navigate("/");
    window.location.reload(true);
  };
  const addMore = () => {
    navigate("/");
  };
  const cleardata = () => {
    dispatch(clearItem());
  };
  return (
    <>
      <h1>SHOPING CART </h1>
      {items.length === 0 ? (
        <div className="empty">
          <img
            src="https://images.meesho.com/images/pow/empty-cart.png"
            alt=""
          />
          <p>Your card is Empty </p>
          <button onClick={viewProduct}>View Product</button>
        </div>
      ) : (
        <div className="carted-main">
          <button onClick={addMore}>Add moreProduct</button>
          {items.map((item, index) => {
            return (
              <>
                <div className="carted-main1">
                  <div>
                    <Carted
                      id={item.id}
                      brand={item.brand}
                      img={item.imageurl}
                      price={item.price}
                      discount={item.discount}
                      rating={item.rating}
                      quantity={item.quantity}
                      index={index}
                    />
                  </div>
                </div>
              </>
            );
          })}

          <div className="totals">
            <Button onClick={cleardata}>
              <DeleteIcon />
              ClearDATA
            </Button>
            <TOTAL className="totalamount" />
          </div>
        </div>
      )}
    </>
  );
};
