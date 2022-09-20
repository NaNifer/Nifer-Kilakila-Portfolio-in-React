import React from 'react';
import Nifer from '../../assets/nifer.jpg'

export default function Home() {
  return (
    <div id="home" className="jumbotron jumbotron-fluid">
      <div className="container" alt="Nifer Kilakila smiling">
        <img className="rounded-circle mx-auto d-block img-fluid" src={Nifer} alt="Nifer Kilakila smiling" id="nifer-head"/>
      </div>
      <div className="heroDescription">
        <p className="greeting">HI THERE!  I'M</p>
        <h1 className='display-4'><span>Nifer</span> Kilakila</h1>
        <p className="smallBio">A Front-End Web Developer passionate about tackling adaptive and technical challenges.</p>
        <div className="resumeBox">
          <a className="resumeLink" href="#!" alt="Nifer Kilakila's resume">Resumé</a>
        </div>
      </div>
    </div>
  )
};
