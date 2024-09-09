import React from 'react';

function Newsletter() {
  return (
    <section id="news-letter" className="section-ml section-P">
      <div className="newstext">
        <h4>Sign Up for our Newsletter</h4>
        <p>
          Get E-mail updates about our latest products and
          <span> special offers</span>
        </p>
      </div>
      <form className="form" action="/" method="post">
        <input type="text" name="fname" placeholder="Enter first name" required />
        <input type="text" name="sname" placeholder="Enter last name" required />
        <input type="email" name="email" placeholder="Enter your email address" required />
        <button className="normal" type="submit" name="submit">Sign Up</button>
      </form>
    </section>
  )
}

export default Newsletter;
