import React from "react";
import CartItems from "./CartIems";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { host } from "./host";

function Cart() {
  let [price, setPrice] = useState(0);
  let [user, setuser] = useState({ User: '' })
  let [order,setorder] = useState({orders:null})

  function update(value) {
    setPrice(value);
  }

  useEffect(async () => {
    try {
      const user = await fetch(`${host}api/user`);
      var userdata = await user.json();
      setuser(() => ({
        User:userdata
      }))
      let cart = await fetch(`http://localhost:4000/api/cart`);
      cart = await cart.json();
      setorder(() => (
        {
          orders:cart
        }
      ))
    } catch (error) {
      console.log({error:error.message})
    }
  }, [])
  

  async function checkout() {
    let Orders = await fetch(`${host}order`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({orderitem:order.orders,user:user.User})
    })
    let order_id = await Orders.json()
    console.log(order_id)
    document.location = `/orders/${order_id}`
  }


  return (
    <>
      <Navbar />
      <h1 id="cart_heading">Shopping Cart</h1>
      <main id="main-container">
        <div className="cart-container">
          <CartItems price={update} />
          <div className="check-out">
            <h2>Cart Total</h2>
            <div className="total">
              <h3>Total</h3>
              <h3 id="price">₹{price}</h3>
            </div>
            <div id="button">
              <button className="check-out-btn" role="btn" id="checkout">
                <a onClick={checkout}>Proceed to Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
