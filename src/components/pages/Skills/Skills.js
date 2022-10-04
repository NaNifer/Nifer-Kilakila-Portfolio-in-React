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
      <div class="skillsContainer sectionContainer">
            <ul class="skillsGrid">
              <li>
                <div class="itemContainer">
                  <img src={htmlIcon}/>
                  <p>HTML</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src={cssIcon}/>
                  <p>CSS</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src={jsIcon}/>
                  <p>Javascript</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src=""/>
                  <p>JQuery</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src={reactIcon}/>
                  <p>React</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src={bootstrapIcon}/>
                  <p>Bootstrap</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src={nodejsIcon}/>
                  <p>nodeJS</p>
                </div>
              </li>
              <li>
                <div class="itemContainer">
                  <img src={mongoIcon}/>
                  <p>mongoDB</p>
                </div>
              </li>
            </ul>
          </div>
      <p>HTML5, CSS3, JavaScript, jQuery, NodeJS, Bootstrap, ExpressJS, mongoDB, ReactJS</p>
      <br></br>
      <br></br>
      <p><strong>UI Web Technologies: </strong>HTML, HTML5, CSS3, SASS, JavaScript, jQuery, WordPress, 
      JSON, Twitter, Bootstrap, React JS, Redux, Express JS, Node.js, GitHub</p>
      <p><strong>Databases: </strong>mongoDB, Sequelize </p>
      <p><strong>Frameworks: </strong>React JS, Redux, ES6, NodeJS</p>
      <p><strong>Languages: </strong>Typescript, MySQL</p>
      <div className='pageSpacer'></div>

    </div>
  )
}

export default Skills;


