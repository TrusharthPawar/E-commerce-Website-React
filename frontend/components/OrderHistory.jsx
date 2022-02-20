import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { host } from "./host";
import {Link} from 'react-router-dom'

function OrderHistory() {
    let url = '/orders/'
    let [history, sethistory] = useState({
        order_history: [{
            _id: null,
    }]})
  useEffect(async () => {
      const user = await fetch(`${host}api/user`, {
        credentials:"include"
    });
    var userdata = await user.json();
    let order = await fetch(`${host}api/Orders/${userdata}`);
    order = await order.json();
      sethistory(() => ({
        order_history:[...order]
    }))
  },[]);
    
    console.log(history.order_history[0]._id)

  return (
    <>
      <Navbar />
          <h1>OrderHistory</h1>
          {history.order_history.map((data)=>(
              <div className="order_history" key={data._id}>
              <div>
                <span>Order ID:</span><p>{data._id}</p>
                <Link to={url+data._id} className="order_link">details</Link>
              </div>  
            </div>
          ))}
    </>
  );
}

export default OrderHistory;
