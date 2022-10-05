import resumePDF from '../../../assets/Kilakila-resume.pdf'

const Resume = () => {
  return (
    <div id='resume'>
      <h2>Click on the link below to open a PDF of my resumé</h2>
      <a href={resumePDF} target="_blank" 
                    rel="noreferrer">
                    Nifer Kilakila, web developer
                </a> 
    </div>
  )
}

export default Resume
