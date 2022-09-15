import React, { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';


export default function About() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="heroImageContainer">
        <img src="assets/images/NiferK.jpg" alt="A photo of Nifer Kilakila" />
      </div>
      <div className="heroDescription">
        <p className="greeting">HI THERE! I'M</p>
        <h1><span>Nifer</span> Kilakila</h1>
        <p className="smallBio">A <span>Front-End Web Developer</span> passionate about tackling adaptive and technical challenges.</p>
        <div className="socialsResume">
          <a className="resumeLink" href="#!" alt="Nifer Kilakila's resume" target="_blank" rel="noopener noreferrer">Resumé</a>
        </div>
      </div>
    </div>
  )
};





// export default function About() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>How's it going?!</Alert.Heading>
//         <p>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//           fermentum.
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me y'all!
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }
