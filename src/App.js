import React from "react";

// import Layout from "./components/Layouts";
import Home from "./components/pages/Home/Home";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Skills from "./components/pages/Skills/Skills";
import Resume from "./components/pages/Resume/Resume";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About"
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          index element={<Home />} />
        <Route
          path='about'
          element={<About />} />
        <Route
          path='portfolio'
          element={<Portfolio />} />
        <Route
          path='resume'
          element={<Resume />} />
        <Route
          path='skills'
          element={<Skills />} />
        <Route
          path='contact'
          element={<Contact />} />
        <Route
          path='/*'
          element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}