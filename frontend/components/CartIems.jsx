import React from "react";
import { useEffect, useState,useLayoutEffect } from "react";
import { host } from "./host";
import Loader from "./loader";

function CartItems(props) {
  let filtered_Item;
  let total = 0;
  let deleted = 0;
  let value;
  let [cartItem, setCartItem] = useState({ list: [] });
  let [pricedata, setPricedata] = useState(0);
  useEffect(async () => {
   try {
    let cart = await fetch(`${host}api/cart`);
    let cart_data = await cart.json();
    setCartItem(() => ({
      list: [...cart_data],
    }));
    let result = cart_data.map((item) => {
      return (total = total + item.price);
    });
    setPricedata(() => {
      return (pricedata = total);
    });
    props.price(pricedata);
    
   } catch (err) {
     console.log(err)
   }
  }, [pricedata]);

  return (
    <div id="container">
      {cartItem.list.map((item) => (
        <div className="cart-element" key={item.id}>
          <div className="info" id="info">
            <img src={item.img} alt="image" />
            <p className="label">{item.title}</p>
            <p className="price cart-price">₹{item.price}</p>
            <a
              className="remove"
              id={item.id}
              onClick={() => {
                filtered_Item = cartItem.list.filter((Item) => {
                  return Item.id != item.id;
                });
                setCartItem(() => ({
                  list: [...filtered_Item],
                }));

                setPricedata((prev) => {
                  return (pricedata = prev - item.price);
                });

                fetch(`${host}delete/cart/${item.id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then((deleted) => deleted.json());
                // .then(() => alert("Deleted"));
              }}
            >
              Remove
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
