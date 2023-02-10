import React, { useState } from "react";

import { 
  Form,
  Button, 
  Container,
  Row,
  Col } from 'react-bootstrap';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Ada Lovelace" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="ada@rocks.com" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Looking forward to hearing from you!" required />
      </div>
      <button className='btn btn-info text-white' type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;