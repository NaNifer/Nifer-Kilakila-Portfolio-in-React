import React from "react";
import About from "./components/About/About";
// import Contact from "./components/Contact";
import Nav from "./components/Navigation/Navigation";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main>
      <Nav />
      <About />
      {/* <Projects />
      <Skills />
      <Resume />
      <Contact /> */}
      <Footer />
    </main>
  );
}