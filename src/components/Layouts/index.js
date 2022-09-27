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
            {/* <Header /> */}
            {/* <div className="main-content-wrap"> */}
                {/* <Home /> */}
                <About />
                <Portfolio />
                <Skills />
                <Resume />
                <Contact />
                
            {/* </div> */}
        </>
    )
};

export default Layout;
