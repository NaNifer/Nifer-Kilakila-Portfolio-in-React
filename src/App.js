import React from "react";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";
import "./App.css";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <div className="main-content-wrap">
        <Home />
        {/* <Portfolio />
        <Skills />
        <Resume /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}