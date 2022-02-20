import React from "react";
import { useState, useEffect } from "react";
import { host } from "./host";
import Loader from "./loader";
import Navbar from "./Navbar";
import parseurl from "./parseurl";

function Item() {
  let [item, setItem] = useState({ list: [] });
  let [isloading, setLoading] = useState(true);
  let { id } = parseurl();

  useEffect(async () => {
    let items = await fetch(`${host}api/product/${id}`);
    let items_data = await items.json();
    setItem(() => ({
      list: [items_data],
    }));

    setLoading(false);
  }, []);

  async function Add_to_Cart(item) {
    let cart_item = await fetch(`${host}api/product/${item}`)
    let cart_item_data = await cart_item.json()
    let { id, title, brand, price,img } = cart_item_data
    let cart_info = {
      image: img,
      title: title,
      price: price,
      id: id,
    }
    let add_to_cart = await fetch(`${host}add_to_cart`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart_info),
    })
    alert("Added to Cart")
    document.location = '/cart'
  }

  return (
    <>
      <Navbar />
      <main id="main-container">
        {isloading ? <Loader /> : null}
        {item.list.map((item) => (
          <div className="product-info main-info" key={item.id}>
            <div className="info" id="info">
              <img src={item.img} className="img-data" alt="image" />
              <p className="label">{item.title}</p>
              <span>
                ₹<p className="price">${item.price}</p>
              </span>
              <a className="cart" id="shop" onClick={() => {
                Add_to_Cart(item.id)
              }}>
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default Item;
