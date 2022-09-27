import './index.css';
import Home from '../pages/Home/Home';
import Header from '../Header/Header';
import Portfolio from '../pages/Portfolio/Portfolio';
import Skills from '../pages/Skills/Skills';
import Resume from '../pages/Resume/Resume';
import Contact from '../pages/Contact/Contact';
import Footer from '../Footer/Footer';
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
