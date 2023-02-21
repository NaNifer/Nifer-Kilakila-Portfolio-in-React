
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';


export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8db0fkg', 'template_mtvlvlj', form.current, 'LG6wzDtZTpSviWp7k')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Form.Group controlId="name">
        <Form.Label>Full Name: </Form.Label>
        <Form.Control
          type="text"
          name="user_name"
          placeholder="Ada Lovelace"
        />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="email"
          name="user_email"
          placeholder="ada@rocks.com"
        />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label>Subject: </Form.Label>
        <Form.Control
          type="text"
          name="subject"
          placeholder="Hello"
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message: </Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          name="message"
          placeholder="We should connect. Looking forward to hearing from you!"
        />
      </Form.Group>
      <Button
        variant="info"
        type="submit"
        className='text-white my-3' >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
