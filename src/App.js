import React from "react";
import About from "./components/About/About";
// import Contact from "./components/Contact";
import Aside from "./components/Aside/Aside";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";

export default function App() {
  return (
    <main>
      <Aside />
      <About />
      {/* <Projects />
      <Skills />
      <Resume />
      <Contact /> */}
    </main>
  );
}