import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';



const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [result, setResult] = useState(null);
  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setResult({ success: false, message: 'Something went wrong. Try again later.' })
      });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };
  return (
    <div>
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Ada Lovelace"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="ada@rocks.com"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject: </Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message: </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Looking forward to hearing from you!"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="info" type="submit" className='text-white' >
          Submit
        </Button>
      </form>
    </div>
  );
};


// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3">
//         <Form.Label htmlFor="name">Name:</Form.Label>
//         <Form.Control type="text" id="name" placeholder="Ada Lovelace" required />
//       </Form.Group >
//       <Form.Group className="mb-3">
//         <Form.Label htmlFor="email">Email:</Form.Label>
//         <Form.Control type="email" id="email" placeholder="ada@rocks.com" required />
//       </Form.Group >
//       <Form.Group className="mb-3">
//         <Form.Label htmlFor="message">Message:</Form.Label>
//         <Form.Control id="message" placeholder="Looking forward to hearing from you!" required />
//       </Form.Group >
//       <Button className='btn btn-info text-white' type="submit">{status}</Button>
//     </Form>
//   );
// };

export default ContactForm;