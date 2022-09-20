import React from 'react';

export default function Home() {
  return (
    <div id="home">
      <div className="heroImageContainer ms-200">
        <img src="/assets/NIFER.jpg" alt="Nifer Kilakila smiling" />
      </div>
      <div className="heroDescription">
        <p className="greeting">HI THERE! I'M</p>
        <h1><span>Nifer</span> Kilakila</h1>
        <p className="smallBio">A Front-End Web Developer passionate about tackling adaptive and technical challenges.</p>
        <div className="resumeBox">
          <a className="resumeLink" href="#!" alt="Nifer Kilakila's resume">Resumé</a>
        </div>
      </div>
    </div>
  )
};
