import React from "react";
import Layout from "./components/Layouts";

// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";
import "./App.css";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  );
}