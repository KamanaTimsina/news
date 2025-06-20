import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Global/Navbar'
import Footer from './Components/Global/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
     </div>
    </>
  )
}

export default App
