import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Products from "../components/products";
import Loader from "../components/loader";
import Item from "../components/Item";
import Cart from "../components/Cart";
import { Routes, Route, Link, Router } from "react-router-dom";
import Login from "../components/Login";
import CreateUser from "../components/CreateUser";
import CartScreen from "../components/CartScreen";
import Order from "../components/Order";
import OrderHistory from "../components/OrderHistory";
import Success from "../components/Success";
import Cancel from '../components/Cancel'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path="/cart" element={<CartScreen />}></Route>
        <Route path="/product/:id" element={<Item />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register_user' element={<CreateUser />}></Route>
        <Route path='/orders/:id' element={<Order />}></Route>
        <Route path='/history' element={<OrderHistory />}></Route>
        <Route path='/success' element={<Success/> }></Route>
        <Route path='/cancel' element={<Cancel />}></Route>
      </Routes>
    </div>
  );
}
0;

export default App;
