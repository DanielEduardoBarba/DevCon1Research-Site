import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import binCube from "./assets/binary-cube.splinecode"
import devCon1 from "./assets/devcon1-logo.png"
import Home from './scenes/Home'
import Header from './components/Header'
import './App.css'

export default function App() {

  const [scene, setScene] = useState(1)

  return (
    <>
      <main class="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        <Spline scene="https://prod.spline.design/dNQ123nn0WoNdmt8/scene.splinecode" className="absolute z-0 w-full h-full" />
        {/* <Spline scene={binCube} className="absolute z-0 w-full h-full" /> */}
        <img src={devCon1} className="absolute z-0 bg-black rounded-2xl w-1/4 m-8" />
        
        <div className="absolute w-full h-full z-10 border-2 border-red-500">

        <Header />
        {
          scene == 1
            ? <Home />
            : ""
        }
        </div>
      </main>
    </>
  )
}


