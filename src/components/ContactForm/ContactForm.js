
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;


// import React, { useState, useRef } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import emailjs from 'emailjs-com';
// // require('dotenv').config();

// // import axios from 'axios';


// const ContactForm = () => {
//   const form = useRef();

//   const [state, setState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   // const [result, setResult] = useState(null);
  
//   // const sendEmail = event => {
//   //   event.preventDefault();
//   //   axios
//   //     .post('/send', { ...state })
//   //     .then(response => {
//   //       setResult(response.data);
//   //       setState({ name: '', email: '', subject: '', message: '' });
//   //     })
//   //     .catch(() => {
//   //       setResult({ success: false, message: 'Something went wrong. Try again later.' })
//   //     });
//   // };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_mtvlvlj', form.current, 'LG6wzDtZTpSviWp7kY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//   };

//   const onInputChange = event => {
//     const { name, value } = event.target;

//     setState({
//       ...state,
//       [name]: value
//     });
//   };
//   return (
//     <div>
// {/*       
//       {result && (
//         <p className={`${result.success ? 'success' : 'error'}`}>
//           {result.message}
//         </p>
//       )} */}

//       <form onSubmit={sendEmail}>
//         <Form.Group controlId="name">
//           <Form.Label>Full Name: </Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={state.name}
//             placeholder="Ada Lovelace"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label>Email: </Form.Label>
//           <Form.Control
//             type="text"
//             name="email"
//             value={state.email}
//             placeholder="ada@rocks.com"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="subject">
//           <Form.Label>Subject: </Form.Label>
//           <Form.Control
//             type="text"
//             name="subject"
//             value={state.subject}
//             placeholder="Subject"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="subject">
//           <Form.Label>Message: </Form.Label>
//           <Form.Control
//             as="textarea"
//             name="message"
//             value={state.message}
//             rows="3"
//             placeholder="Looking forward to hearing from you!"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Button variant="info" type="submit" className='text-white' >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;