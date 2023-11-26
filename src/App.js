import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
// import binCube from "./assets/bin-cube.splinecode"

import Header from './components/Header'
import Home from './scenes/Home'
import Services from './scenes/Services'
import Contact from './scenes/Contact'
import Chat from "./components/Chat"
import Footer from "./components/Footer"
import './App.css'

export default function App() {

  const [scene, setScene] = useState(0)
  const [pageWidth, setPageWidth] = useState(0)


  useEffect(()=>{
    setPageWidth(window.innerWidth)
  },[scene])


  return (
    <>
      <main className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        {/* <div className="relative w-screen h-screen overflow-scroll"> */}
        {/* <Spline scene={binCube} className="absolute z-0 w-full h-full" /> */}
        <Spline style={{
          opacity:scene==0?1:0
        }} scene={"https://prod.spline.design/dNQ123nn0WoNdmt8/scene.splinecode" } className="absolute duration-1000 ease z-0 w-full h-full" />
        <Spline style={{
          opacity:scene==2?1:0
        }} scene={"https://prod.spline.design/lpTp8Ng8HpwtBM7m/scene.splinecode" } className="absolute duration-1000 ease z-0 w-full h-full" />
        
        
        <Header scene={scene} setScene={setScene} />

        <div style={{
           transform: scene?`translateX(-${pageWidth*scene}px)`:"",
           transition:"transform 1s ease"
        }} id="scroll-div" className="absolute flex w-screen z-0">

          <Home setScene={setScene} />
          <Services />
          <Contact />
        </div>

        <Chat setScene={setScene}/>
        <Footer />
        {/* </div> */}
      </main>
    </>
  )
}


