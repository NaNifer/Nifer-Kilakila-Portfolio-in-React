import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id='about' className="jumbotron jumbotron-fluid">
      <div id="home" >
        <div className="heroDescription2">
          <p className="greeting"><b>Nerdy, enterprising creative, a lifetime Maker, and web developer.</b> That's me, </p>
          <h1 className='display-4'>Nifer Kilakila</h1>
          <p className="smallBio">For the last 15+ years, I have been utilizing the principles and soft skills needed to thrive in programming.</p>
          <p>I founded and built my businesses from the ground up, as well as worked tirelessly in fundraising for small nonprofits for several years. Building my businesses from the ground up required self-organization, research, and the ability to develop internal systems and processes, and I enjoyed every minute of it. Nonprofit work also brought its own set of challenges and rewards — like learning to analyze and manipulate SOQL queries, or learning formulas in GoogleSheets, so that I could better serve my donor base.</p>
          <p>I was drawn to web development because of the blend of both technical and creative challenges that it provides. As a highly creative person, I can also be process-driven, think scale, and rely on data to make decisions, and the challenges that coding provides seemed like a perfect fit.</p>
          <p>Through my time at Berkeley Extension Bootcamp, I have really enjoyed working in collaboration with other driven people. What a great feeling it is to find a perplexing bug, spend hours sifting through and modifying code, collaborate with a colleague about the problem, and discover the solution together!  I'm looking forward to many more of these collaborative puzzle solving as I continue my journey into coding.</p>
          <div className="resumeBox">
            <Link to='/resume' className="flat-button">Resumé</Link>
          </div>
        </div>
      </div>
      <div className='pageSpacer'></div>
    </div>
  )
}

export default About
