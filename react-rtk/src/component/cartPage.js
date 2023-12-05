import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";
import "../App.css";


const CartPage = () => {
  const { cart, totalQuantity,totalPrice } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  return (
    <div style={{ gap: "30px", display: "grid" }} className="ml-20">
      <div>Total Quantity - ({totalQuantity})</div>
      <div>Total Price - ({totalPrice})</div>
      <div style={{ gap: "50px", display: "flex" }}>
        {cart.map((data) => (
          <div>
            <div>
              <img
                src={data.img}
                alt="..."
                style={{ width: "150px", height: "250px" }}
              />
            </div>
            <div>{data.title}</div>
            <div>{data.price}</div>
            <div>
              <div
                className=""
                data-mdb-toggle="tooltip"
                onClick={() => dispatch(removeItem(data.id))}
                style={{ padding: "10px", backgroundColor: "yellow" }}
              >
                <i className="pi pi-trash"></i>Remove
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
