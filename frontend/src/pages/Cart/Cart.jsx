import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { Navigate, useNavigate } from 'react-router-dom'
const Cart = () => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext)
   const navigate =useNavigate();
  return (
    <div className="cart">
      <div className="cart-tems">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
  if (cartItems[item._id] > 0) {
    return (
      <div key={item._id} className='cart-items-title cart-items-item'>
        <img src={url + "/images/" + item.image} alt="" />
        <p> {item.name}</p>
        <p>${item.price}</p>
        <p> {cartItems[item._id]}</p>
        <p>${item.price * cartItems[item._id]}</p>
        <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
      </div>
    )
  }
})}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
        <div>
        <div className='cart-total-details'>
          <p> Subtotal</p>
          <p>${getTotalCartAmount()}</p></div> <hr/>
        <div className='cart-total-details'>
          <p>Delivery Free</p>
          <p>${getTotalCartAmount()===0?"0":25}</p></div> <hr/>
        <div className='cart-total-details'>
          <p>Total</p>
          <p>${getTotalCartAmount()===0?"0":getTotalCartAmount()+25}</p>
          </div>

      </div>
      <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cart-promocode">
      <p>If you have promocode ,Enter it here</p>
      <div className="cart-promocode-input">
        <input type="text" placeholder='Enter promocode'></input>
        <button>Submit</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Cart