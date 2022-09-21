import './index.css';
import Home from '../pages/Home/Home';
import Header from '../Header/Header';
import Contact from '../pages/Contact/Contact';
import Footer from '../Footer/Footer';


const Layout = () => {
    return (
        <div className="main-content-wrap">
            <Header />
            <Home />
            {/* <Portfolio />
            <Skills />
            <Resume /> */}
            <Contact />
            <Footer />
        </div>
    )
};

export default Layout;
