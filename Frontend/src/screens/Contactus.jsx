import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k6q23om", "template_m7n8cfb", form.current, {
        publicKey: "ll_Of3U8dR6FQ4kZh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(error);
        }
      );    
  };

  return (

    <div className='form-container'>
    <h1>Send Message to us</h1>
    <form ref={form} onSubmit={sendEmail}>
        <input placeholder='Name' className="form-control" type="text" name="user_name"></input>
        <input placeholder='Email' className="form-control" type="email" name="user_email"></input>
        <input placeholder='Subject'></input>
        <textarea placeholder='message' rows="4" className="form-control" name="message"></textarea>
        <button type="submit" value="Send">Send Message</button>
    </form>
    </div>



    /* <form className="container" ref={form} onSubmit={sendEmail} >
      <div className="form-group m-3">
        <label>Name</label>
        <input className="form-control" type="text" name="user_name" />
      </div>
      <div className="form-group m-3">
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" />
      </div>
      <div className="form-group m-3">
      <label>Message</label>
      <textarea rows={3} className="form-control" name="message" />
      </div>
      <input className="btn btn-outline-danger m-3" type="submit" value="Send" />
    </form> */


    
    );
};
