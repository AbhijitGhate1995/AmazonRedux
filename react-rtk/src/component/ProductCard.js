import React from "react";
import shoe from "../images/shoe.png";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { addToCart } from "../features/counter/counterSlice";

const ProductCard = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <img
            src={item?.img}
            alt="..."
            style={{ width: "100px", height: "100px" }}
          />
          <div>{item.title}</div>
          <div>{item.price}</div>
          <Button
            label={`Add to Cart`}
            icon="pi pi-check"
            onClick={ ()=> dispatch(addToCart(item))}
            style={{
              backgroundColor: "yellow",
              width: "150px",
              height: "50px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
