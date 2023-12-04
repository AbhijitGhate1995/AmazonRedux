import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCartTotal, removeItem } from "../features/cartSlice";

const CartPage = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);

  return (
    <div style={{gap:"50px",display:"flex"}}>
     <div>
            {
                cart.map((data)=>(
                    <div>
                        <div>
                            <img src={data.img} alt="..."/>
                        </div>
                        <div>
                            {data.title}
                        </div>
                        <div>
                        <div
                          className=""
                          data-mdb-toggle="tooltip"
                          onClick={() => dispatch(removeItem(data.id))}
                          style={{padding:"10px",backgroundColor:"yellow"}}
                        >
                          <i className="pi pi-trash"></i>Remove
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default CartPage;
