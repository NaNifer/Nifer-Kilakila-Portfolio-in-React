import {
  Form,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import "../Contact/Contact.css"
import ContactForm from '../../ContactForm/ContactForm';

const Contact = () => {
  return (
    <Container id='contact' className='contact-container'>
      <Row className="justify-content-md-center link-container">

        <h5 className='contact-link'>E-mail
          <a className="link-color" href="mailto:niferkilakila@gmail.com"><i className="icon fa fa-envelope"></i> niferkilakila@gmail.com</a></h5>

        <h5 className='contact-link'>LinkedIn
          <a className="link-color" href="https://www.linkedin.com/in/nifer-kilakila-b0721565/"><i className="icon fa fa-linkedin"></i> N Kilakila</a></h5>

        <h5 className='contact-link'>Github
          <a className="link-color" href="https://github.com/NaNifer"><i className="icon fa fa-github"></i> NaNifer</a></h5>

        <h5 className='contact-link'>StackOverflow
          <a className="link-color" href="https://stackoverflow.com/users/18479722/nifer"><i className="icon fa fa-stack-overflow"></i> @nanifer</a></h5>
      </Row>
      <div id="contactForm-cont">
        <h5>Do you have any questions? Please do not hesitate to contact me. I'll will reach back to you directly.</h5>
        <ContactForm />
      </div>
      <div className='pageSpacer'></div>
    </Container>
  )
};

export default Contact;
