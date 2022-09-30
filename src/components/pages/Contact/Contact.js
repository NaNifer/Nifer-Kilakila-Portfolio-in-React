import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <Container id='contact' className='contact-container'>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 3 }}>

          <h5 className='d-inline'>E-mail
            <a className="link-color" href="mailto:niferkilakila@gmail.com"><i className="icon fa fa-envelope"></i> niferkilakila@gmail.com</a></h5>

          <h5 className='d-inline'>LinkedIn
            <a className="link-color" href="https://www.linkedin.com/in/nifer-kilakila-b0721565/"><i className="icon fa fa-linkedin"></i> N Kilakila</a></h5>

          <h5 className='d-inline'>Github
            <a className="link-color" href="https://github.com/NaNifer"><i className="icon fa fa-github"></i> NaNifer</a></h5>

          <h5 className='d-inline'>StackOverflow
            <a className="link-color" href="https://stackoverflow.com/users/18479722/nifer"><i className="icon fa fa-stack-overflow"></i> @nanifer</a></h5>
        </Col>
      </Row>
      <div id="contactForm-cont">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <h5>Do you have any questions? Please do not hesitate to contact me. I'll will reach back to you directly.</h5>
          <Form.Label>Your name</Form.Label>
          <Form.Control type="name" placeholder="Ada Lovelace" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>I'm looking forward to hearing from you!</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </div>
    </Container>
  )
};

export default Contact;
