import React, { useEffect } from "react";
import Amazon from "../images/amazon.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

const NavBar = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);
    
  return (
    <div>
      <div className="w-full grid grid-cols-3" style={{display: "flex",gap:"100px"}}>
        <div>
          <img
            src={Amazon}
            alt="amazon"
            style={{ height: "80px", width: "200px" }}
          />
        </div>
        <div>
          <Link to="/">Home Page</Link>
        </div>
        <div>
          <Link to="/cart">Cart({totalQuantity})</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
