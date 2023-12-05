import React, { useEffect } from "react";
import Amazon from "../images/amazon.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";
import "../App.css";



const NavBar = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);
    
  return (
    <div>
      <div className="w-full flex justify-between px-4 py-4" style={{display: "flex",gap:"100px"}}>
        <div>
          <img
            src={Amazon}
            alt="amazon"
            style={{ height: "80px", width: "200px" }}
          />
        </div>
        <div className="bg-green-500 px-4 py-2 h-12 cursor-pointer text-[#fff]">
          <Link to="/">Home Page</Link>
        </div>
        <div className="cursor-pointer bg-pink-500 px-4 py-2 h-12  text-[#fff]">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
