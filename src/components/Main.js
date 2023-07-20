import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
        </Routes>
    </div>
  )
}

export default Main