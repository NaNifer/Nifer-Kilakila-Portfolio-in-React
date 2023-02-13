import React, { useState } from "react";

import {
  Form,
  Button
} from 'react-bootstrap';


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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control type="text" id="name" placeholder="Ada Lovelace" required />
      </Form.Group >
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control type="email" id="email" placeholder="ada@rocks.com" required />
      </Form.Group >
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message">Message:</Form.Label>
        <Form.Control id="message" placeholder="Looking forward to hearing from you!" required />
      </Form.Group >
      <Button className='btn btn-info text-white' type="submit">{status}</Button>
    </Form>
  );
};

export default ContactForm;