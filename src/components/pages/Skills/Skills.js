import bootstrapIcon from '../../../assets/skill-icons/icons8-bootstrap-96.png';
import cssIcon from '../../../assets/skill-icons/icons8-css3-96.png';
import htmlIcon from '../../../assets/skill-icons/icons8-html-5-96.png';
import jsIcon from '../../../assets/skill-icons/icons8-js-100.png';
import nodejsIcon from '../../../assets/skill-icons/icons8-node-js-96.png';
import mongoIcon from '../../../assets/skill-icons/mongoDB-logo.jpeg';
import reactIcon from '../../../assets/skill-icons/React-icon.png';



const Skills = () => {
  return (

    <div id='skills'>
      <h2>SKILLS</h2>
      <h5>HTML5, CSS3, JavaScript, jQuery, NodeJS, Bootstrap, ExpressJS, mongoDB, ReactJS</h5>
      <div class="skillsContainer sectionContainer">
        <ul class="skillsGrid">
          <div>
            <div class="itemContainer">
              <img alt="html Icon" src={htmlIcon} />
              <p>HTML</p>
            </div>
          </div>
          <div>
            <div class="itemContainer">
              <img alt="css Icon" src={cssIcon} />
              <p>CSS</p>
            </div>
          </div>
          <div>
            <div class="itemContainer">
              <img alt="javascript Icon" src={jsIcon} />
              <p>Javascript</p>
            </div>
          </div>
          {/* <div>
            <div class="itemContainer">
              <img alt="" src="" />
              <p>JQuery</p>
            </div>
          </div> */}
          <div>
            <div class="itemContainer">
              <img alt="react Icon" src={reactIcon} />
              <p>React</p>
            </div>
          </div>
          <div>
            <div class="itemContainer">
              <img alt="bootstrap Icon" src={bootstrapIcon} />
              <p>Bootstrap</p>
            </div>
          </div>
          <div>
            <div class="itemContainer">
              <img alt="node js Icon" src={nodejsIcon} />
              <p>nodeJS</p>
            </div>
          </div>
          <div>
            <div class="itemContainer">
              <img alt="mongo DB Icon" src={mongoIcon} />
              <p>mongoDB</p>
            </div>
          </div>
        </ul>
      </div>
      <br></br>
      <br></br>
      <p><strong>UI Web Technologies: </strong>HTML, HTML5, CSS3, SASS, JavaScript, jQuery, WordPress,
        JSON, Twitter, Bootstrap, ReactJS, Redux, ExpressJS, NodeJS, GitHub</p>
      <p><strong>Databases: </strong>mongoDB, Sequelize </p>
      <p><strong>Frameworks: </strong>ReactJS, Redux, ES6, NodeJS, VueJS</p>
      <p><strong>Languages: </strong>Typescript, MySQL</p>
      <div className='pageSpacer'></div>

    </div>
  )
}

export default Skills;


