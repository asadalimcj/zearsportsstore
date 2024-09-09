import React from "react";
import f1 from '../imag/features/f1.png';
import f2 from '../imag/features/f2.png';
import f3 from '../imag/features/f3.png';
// import f4 from '../imag/features/f4.png';
import f5 from '../imag/features/f5.png';
import f6 from '../imag/features/f6.png';

export default function Whyus() {
  return (
    <div className="container">
    <h1 style={{textAlign:'center', margin:'30px', fontFamily:'cursive', fontWeight:'700'}}>Why Us</h1>
      <section id="features">
        <div className="FeatureBox">
          <img src={f1} alt="shipping" />
          <h6>Free Shipping</h6>
        </div>
        <div className="FeatureBox">
          <img src={f2} alt="shipping" />
          <h6>Online Orders</h6>
        </div>
        <div className="FeatureBox">
          <img src={f3} alt="shipping" />
          <h6>Save Money</h6>
        </div>
        <div className="FeatureBox">
          <img src={f6} alt="shipping" />
          <h6>24/7 Support</h6>
        </div>
        {/* <div className="FeatureBox">
          <img src={f4} alt="shipping" />
          <h6>Promotions</h6>
        </div> */}
        <div className="FeatureBox">
          <img src={f5} alt="shipping" />
          <h6>Happy Sell</h6>
        </div>
      </section>
    </div>
  );
}
