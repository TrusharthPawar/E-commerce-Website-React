const express = require('express');
const app = express()
const mens_cloths = require('../Backend/models/mens_cloths');
const router = express.Router()
const orders = require("../Backend/models/Order");
const bodyparser = require("body-parser");
const jwt = require('jsonwebtoken')
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Cart = require('../Backend/models/Cart');
const { auth } = require("../authentication");
const cors = require("cors");

router.use(cors({
  origin:'http://shop-cloths.herokuapp.com/',
  credentials:true
}))

router.use(bodyparser.urlencoded({ extended: true }));
router.use(cookieParser());

router.get("/cloths/mens-cloths", (req, res) => {
    mens_cloths.find({}, (err, data) => {
      err ? console.log(err.message) : res.json(data);
    });
});
  

router.get("/user", (req, res) => {
  let token = req.cookies.jwt || req.query.token;
  if (token) {
    let user = jwt.verify(token, "wildshoter@123");
    res.json(user);
  } else {
    res.json(null);
  }
});

router.get("/product/:id", (req, res) => {
  mens_cloths.findOne({ id: req.params.id }, (err, data) =>
    err ? console.log(err.message) : res.json(data)
  );
});

router.get("/cart",(req, res) => {
  Cart.find({}, (err, data) => {
    err ? res.sendStatus(404).json({err:message}) : res.json(data);
  });
});


router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ user: "logout" });
});

router.get("/Orders/:user", (req, res) => {
  orders.find({ User: req.params.user }, (err, Orders) => {
    err ? res.json({ err: err.message }) : res.json(Orders);
  });
});

router.get("/order/:id", (req, res) => {
  orders.findById({ _id: req.params.id }, (err, order) => {
    err ? res.json({ error: "order not found" }) : res.json(order);
  });
});


 
module.exports = router