import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './styles.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Testimonials from './pages/Testimonials';
import Store from './pages/Store';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header logoSrc="/brm-logo2.png" />
      <main>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/Portfolio" element= {<Portfolio />} />
          <Route path="/Portfolio/:id" element={<Project />} />
          <Route path="/Contact" element= {<Contact />} />
          <Route path="/Testimonials" element= {<Testimonials />} />
          <Route path="/Store" element= {<Store />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
