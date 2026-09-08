import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Products from './Pages/Products'
import Routine from './Pages/Routine'
import Footer from './Components/Footer'
import Beauty from './Pages/Beauty'
import HairCare from './Pages/HairCare'
import Skincare from './Pages/Skincare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Routine"  element={<Routine/>}/>
      <Route path="/Beauty"   element={<Beauty/>}/>
      <Route path="/HairCare" element={<HairCare/>}/>
      <Route path="/Skincare" element={<Skincare/>}/> 
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
