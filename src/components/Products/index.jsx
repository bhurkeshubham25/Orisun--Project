import React from "react";
import "./products.css";
import value1 from "../../assets/value1.jpeg";

const Product = () => {
  return (
    <div>
      <section className="product-section">
        <div className="container curve-background">
          <div className="productbanner-heading">
            <p style={{marginBottom:'9px'}}>Our Products</p>
            <p>
              Beacuse Every Women Deserve <br></br>
              The Best Care
            </p>
          </div>
          <div className="productbanner-apple">
            <div className="apple">
             <img src={value1} alt="" /> 
            </div>
          </div>
        </div>        
      </section>
    </div>
  );
};

export default Product;
