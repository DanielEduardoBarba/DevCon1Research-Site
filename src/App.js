import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import binCube from "./assets/bin-cube.splinecode"

import Header from './components/Header'
import Home from './scenes/Home'
import Services from './scenes/Services'
import Contact from './scenes/Contact'
import Chat from "./components/Chat"
import Footer from "./components/Footer"
import './App.css'

export default function App() {

  const [scene, setScene] = useState(0)
  const [pageWidth, setPageWidth] = useState(707)


  useEffect(()=>{
    setPageWidth(window.innerWidth)
  },[scene])
  // function handleResize() {
  //   // if(pageWidth) return
  //   // Get the width of the "scroll-div" element
  //   const scrollDiv = document.getElementById("scroll-div")
  //   if (scrollDiv) {
  //     setPageWidth(window.innerWidth)
  //     console.log(`Width of scroll-div: ${pageWidth}px`)
  //   }
  
  // }
  
  // window.addEventListener("resize", handleResize)

  // handleResize()


  return (
    <>
      <main className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        {/* <div className="relative w-screen h-screen overflow-scroll"> */}
        <Spline scene={binCube} className="absolute z-0 w-full h-full" />
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


