
import React from 'react'
import './PlaceOrder.css' 
const PlaceOrder = () => {
  return (
    <form className='place-order'> 
    <div className='place-order-left'>
      <p className="title">Delivery Information</p>
      <div className='multi-fields'>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='Email'/>
      <input type="text" placeholder='Street'/>
      <div className='multi-fields'>
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
        </div>
        <div className='multi-fields'>
        <input type="text" placeholder='Pin Code'/>
        <input type="text" placeholder='Country'/></div>
    </div>
    <input type="text" placeholder='Phone'/>
    <div className='place-order-right'>
      
    </div>
    </form>
  )
}

export default PlaceOrder;