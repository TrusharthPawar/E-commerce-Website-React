import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import parseurl from "./parseurl";
import { host } from "./host";

function Order() {
  let orderid = parseurl().id;
  const [product, setproduct] = useState({
    orders: {
      _id: null,
      items: [
        {
          title: "",
          img: "",
          price: null,
          id: null,
        },
      ],
      ispaid: null,
    },
  });
  console.log(orderid);
  useEffect(async () => {
    var order = await fetch(`${host}api/order/${orderid}`);
    order = await order.json();
    setproduct(() => ({
      orders: {
        _id: order._id,
        items: [...order.items],
        ispaid: order.ispaid,
      },
    }));
  }, []);

  async function senddata() {
    try {
      let checkout = await fetch(`${host}checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: [...product.orders.items],
          order_id: product.orders._id,
        }),
      });
      let payout = await checkout.json();
      console.log(payout);
      window.location = payout.session;
    }
    catch (err) {
      console.log({err:message})
    }
  }

  return (
    <>
      <Navbar />
      <h1>Orders</h1>
      {product.orders.items.map((data) => (
        <div className="orders" key={data.id}>
          <img src={data.img} width="200" height="200" />
          <p className="order_title">{data.title}</p>
          <p className="order_price">₹{data.price}</p>
          <p>
            {product.orders.ispaid ? (
              <span id="paid">Payment Successfull</span>
            ) : (
              <span id="unpaid">Not Paid</span>
            )}
          </p>
        </div>
      ))}
      <button id="order_btn" onClick={senddata}>
        Order
      </button>
    </>
  );
}

export default Order;
