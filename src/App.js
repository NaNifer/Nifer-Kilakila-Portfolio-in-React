import React from "react";
import About from "./components/About/About";
// import Contact from "./components/Contact";
import Header from "./components/Header/Header";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <div className="main-content-wrap">
        <About />
        {/* <Portfolio />
        <Skills />
        <Resume />
        <Contact /> */}
        <Footer />
      </div>
    </main>
  );
}