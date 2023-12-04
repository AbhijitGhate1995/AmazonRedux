import React from 'react'
import Amazon from "../images/amazon.png"

const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div>
            <img src={Amazon} alt="amazon" style={{height:"80px", width:"200px"}}/>
            </div>
            <div>Cart</div>
        </div>
    </div>
  )
}

export default NavBar