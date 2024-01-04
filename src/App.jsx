import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProyectsPage from "./pages/proyectsPage";
import SkillsPage from "./pages/SkillsPage";
import Heder from "./components/header/Heder";
import WhatSapp from "./components/redes/WhatSapp";
import { useState } from "react";

function App() {

  const [ isOn, setIsOn] = useState(true)

  const escuchador = () => {
    setIsOn( !isOn)
  }

  return (
    <section className='dark-mode'>
      <div className={`dark ${isOn ? 'claro' : 'oscuro'}`}>
        <button className='bottonn' onClick={escuchador}>
          <i className='bx bx-brightness-half bx-md'></i>
        </button>
        <div>
          <Heder />
          <WhatSapp />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/proyects' element={<ProyectsPage />} />
            <Route path='/skills' element={<SkillsPage />} />
          </Routes>
        </div>
      </div>
    </section>
  )
}

export default App;


