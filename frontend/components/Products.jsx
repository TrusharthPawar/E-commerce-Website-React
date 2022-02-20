import { cache } from "ejs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import Navbar from "./Navbar";
function Products() {
  let [product, setProduct] = useState({
    list: [],
  });

  const [isloading, setloading] = useState(true);
  let url = "/product/";
  useEffect(async () => {
    try {

      let products = await fetch(`${host}api/cloths/mens-cloths`);
      
      let products_data = await products.json();
      setProduct((prev_product) => ({
        list: [...products_data],
      }));
      setloading(false);
      // console.log(logged_user)
    } catch (error) {
      console.log({ Error: error.message });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-container">
        {isloading ? <Loader /> : null}
        <div id="container">
          <div id="api" className="products-list">
            {product.list.map((item) => (
              <div className="product" key={item.id}>
                <div className="info">
                  <Link to={url + item.id}>
                    <img src={item.img} alt="image" />
                  </Link>
                  <p className="label">{item.title}</p>
                  <p className="type">{item.brand}</p>
                  <p className="price">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
