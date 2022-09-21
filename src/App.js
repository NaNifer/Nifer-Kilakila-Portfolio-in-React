import React from "react";
import Layout from "./components/Layouts";
import Home from "./components/pages/Home/Home";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Skills from "./components/pages/Skills/Skills";
import Resume from "./components/pages/Resume/Resume";
import "./App.css";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/home' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  );
}