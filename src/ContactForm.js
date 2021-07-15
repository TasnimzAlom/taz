import React from 'react';
import { BiPaperPlane } from "react-icons/bi"

export default function ContactForm() {
  return (
    <div className="wrapper">
    <div className="contact-form">
      <div className="input-fields">
        <input type="text" className="input" placeholder="Name"/>
        <input type="text" className="input" placeholder="Company"/>
        <input type="text" className="input" placeholder="Email Address"/>
        <input type="text" className="input" placeholder="Phone"/>
        <input type="text" className="input" placeholder="Subject"/>
      </div>
      <div className="msg">
        <textarea placeholder="Message"></textarea>
        <div className="btn">send<BiPaperPlane/></div>
      </div>
    </div>
 </div>
    
  );
}
