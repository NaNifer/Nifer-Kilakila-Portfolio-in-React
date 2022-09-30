import './index.css';
import Portfolio from '../pages/Portfolio/Portfolio';
import Skills from '../pages/Skills/Skills';
import Resume from '../pages/Resume/Resume';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';


const Layout = () => {
    return (
        <>
            <About />
            <Portfolio />
            <Skills />
            <Resume />
            <Contact />
        </>
    )
};

export default Layout;
