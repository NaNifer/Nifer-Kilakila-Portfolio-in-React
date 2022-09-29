import { Card, Button, Row, Col } from 'react-bootstrap';
// import { blue3d, greencubed, linedcircle, reddot, tealwhite } from '../../../assets/projectPics/geometricPatterns';
import blue3d from '../../../assets/projectPics/geometricPatterns/blue3d.png';



const Portfolio = () => {
  return (
    <div id="projects-container">
      <Card className="text-center" style={{ width: '25rem' }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Freakimono, digital pet game</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Built with Javascript, jQuery, nodeJS, socketIO, Sequelize, ExpressHandlebars</Card.Subtitle>
          <Card.Text>
            This immersive app combines the joy of creating and caring for a loveable little creature and
            the fun of connecting with other users to battle it out in a dynamic battle environment.           </Card.Text>
          <Card.Link href="#">Live Site</Card.Link>
          <Card.Link href="#">GitHub Repo</Card.Link>
        </Card.Body>
        <Card.Img variant="bottom" src={blue3d} />
      </Card>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default Portfolio
