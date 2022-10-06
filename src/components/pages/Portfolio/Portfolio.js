import { Card, Row } from 'react-bootstrap';
// import { blue3d, greencubed, linedcircle, reddot, tealwhite } from '../../../assets/projectPics/geometricPatterns';
// import blue3d from '../../../assets/projectPics/geometricPatterns/blue3d.png';
import greencube from '../../../assets/projectPics/geometricPatterns/greencubed.png';
import reddot from '../../../assets/projectPics/geometricPatterns/reddot.png';
import freakimono from '../../../assets/projectPics/freakimonocover.png';
import nanarwhal from '../../../assets/projectPics/nanarwhal800px.jpg';
import PAWSitive from '../../../assets/projectPics/PAWSitive-Pals-logo-orange.png';


const Portfolio = () => {
  return (
    <div id="projects-container">
      <Card className="text-center" id="freakimono" style={{ width: '25rem' }}>
        <Card.Header className="bg-dark text-light">Featured</Card.Header>
        <Card.Body>
          <Card.Title className="text-center font-weight-bold">Freakimono, a digital pet game</Card.Title>
          <Card.Subtitle className="mb-2 text-muted border-bottom">Built with Javascript, jQuery, nodeJS, socketIO, Sequelize, ExpressHandlebars</Card.Subtitle>
          <Card.Text>
            This immersive app combines the joy of creating and caring for a loveable little creature and
            the fun of connecting with other users to battle it out in a dynamic battle environment.           </Card.Text>
          <Card.Link href="https://freakimono.herokuapp.com/">Live Site</Card.Link>
          <Card.Link href="https://github.com/Team-Narwhal/My_Pet">GitHub Repo</Card.Link>
        </Card.Body>
        <Card.Img variant="bottom" src={freakimono} className="card-pics"/>
      </Card>
      <div>
      <Row xs={1} md={2} className="g-4 smallCards">
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">PAWSitive Pals</Card.Title>
              <Card.Subtitle className="mb-2 text-muted border-bottom">Built with GraphQL, Node.js, Express.js, MongoDB, React, JWT, Heroku</Card.Subtitle>
              <Card.Text>
              A mobile friendly app enabling users to set up a playdate with an animal at a local shelter or adoption organization.
Gain the experience of what it may be like to own a pet without the full commitment of adopting one.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="https://github.com/project-3-collab/Pawsitive-Pals">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={PAWSitive} />
          </Card>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">NaNarWord, a wordgame</Card.Title>
              <Card.Subtitle className="mb-2 text-muted border-bottom">Built with HTML5, CSS, JavaScript, Materialize, Animista</Card.Subtitle>
              <Card.Text> 
                This game is a mobile friendly web app providing an immersive experience into the world of words.
              </Card.Text>
              <Card.Link href="https://nanifer.github.io/NaNarWord-word-game/">Live Site</Card.Link>
              <Card.Link href="https://github.com/NaNifer/NaNarWord-word-game">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={nanarwhal} className="card-pics" />
          </Card>
      </Row>
      <Row xs={1} md={2} className="g-4 smallCards">
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">Team Cards in NodeJS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted border-bottom">Built with Semantic HTML5 Markup, CSS, JavaScript, Node.js, Jest, Inquirer</Card.Subtitle>
              <Card.Text>
              A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="https://github.com/NaNifer/Team-Cards-in-NodeJS">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={reddot} />
          </Card>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">Social Network API in Mongoose</Card.Title>
              <Card.Subtitle className="mb-2 text-muted border-bottom">Built with Semantic HTML5 markup, CSS, Express Handlebars, MySQL2, Sequelize, dotenv, bcrypt, Express Sessions, Heroku</Card.Subtitle>
              <Card.Text>
              A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts.
              </Card.Text>
              <Card.Link href="#">Live Site</Card.Link>
              <Card.Link href="https://github.com/NaNifer/Tech-Blog-with-Sequelize-h14">GitHub Repo</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src={greencube} />
          </Card>
      </Row>
      </div>
      <div className='pageSpacer'></div>
    </div>
  )
}

export default Portfolio
