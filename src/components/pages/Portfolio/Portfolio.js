import { Card, Col, Row } from 'react-bootstrap';
// import { blue3d, greencubed, linedcircle, reddot, tealwhite } from '../../../assets/projectPics/geometricPatterns';
import blue3d from '../../../assets/projectPics/geometricPatterns/blue3d.png';



const Portfolio = () => {
  return (
    <div id="projects-container">
      <Card className="text-center" id="freakimono" style={{ width: '25rem' }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title className="text-center font-weight-bold">Freakimono, a digital pet game</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Built with Javascript, jQuery, nodeJS, socketIO, Sequelize, ExpressHandlebars</Card.Subtitle>
          <Card.Text>
            This immersive app combines the joy of creating and caring for a loveable little creature and
            the fun of connecting with other users to battle it out in a dynamic battle environment.           </Card.Text>
          <Card.Link href="https://freakimono.herokuapp.com/">Live Site</Card.Link>
          <Card.Link href="https://github.com/Team-Narwhal/My_Pet">GitHub Repo</Card.Link>
        </Card.Body>
        <Card.Img variant="bottom" src={blue3d} />
      </Card>
      <div>
      <Row xs={1} md={2} className="g-4 smallCards">
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">PAWSitive Pals</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
              A mobile friendly app enabling users to set up a playdate with an animal at a local shelter or adoption organization.
Gain the experience of what it may be like to own a pet without the full commitment of adopting one.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="https://github.com/project-3-collab/Pawsitive-Pals">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">NaNarWord, a wordgame</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Built with HTML5, CSS, JavaScript, Materialize, Animista</Card.Subtitle>
              <Card.Text> 
                This game is a mobile friendly web app providing an immersive experience into the world of words.
              </Card.Text>
              <Card.Link href="https://nanifer.github.io/NaNarWord-word-game/">Live Site</Card.Link>
              <Card.Link href="https://github.com/NaNifer/NaNarWord-word-game">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
      </Row>
      <Row xs={1} md={2} className="g-4 smallCards">
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold" className="text-center font-weight-bold">Team Cards in NodeJS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Built with Semantic HTML5 Markup, CSS, JavaScript, Node.js, Jest, Inquirer</Card.Subtitle>
              <Card.Text>
              A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="https://github.com/NaNifer/Team-Cards-in-NodeJS">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={blue3d} />
          </Card>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">Card Title</Card.Title>
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
      </Row>
      </div>
      <div className='pageSpacer'></div>
    </div>
  )
}

export default Portfolio
