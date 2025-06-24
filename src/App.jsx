import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Global/Navbar'
import Footer from './Components/Global/Footer'
import LanguageConverter from './Components/Languages/LamguageConverter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <div>
      <LanguageConverter/>
    <Navbar/>
    <Outlet/>
    <Footer/>
     </div>
    </>
  )
}

export default App
