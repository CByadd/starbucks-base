import { useState } from 'react'
import './styles/App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Footer/>
   

    
    </>
  )
}

export default App
