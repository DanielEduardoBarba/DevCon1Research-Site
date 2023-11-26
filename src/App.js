import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import binCube from "./assets/binary-cube.splinecode"

import Header from './components/Header'
import Home from './scenes/Home'
import Services from './scenes/Services'
import Contact from './scenes/Contact'
import Chat from "./components/Chat"
import Footer from "./components/Footer"
import './App.css'

export default function App() {

  const [scene, setScene] = useState(0)

  useEffect(() => {
    // scrollToPos(scene, 2)

  }, [scene])



  function scrollToPos(pos, maxPos) {
    const scrollableDiv = document.getElementById('scroll-div')
    const scrollPosition = (scene / maxPos) * (scrollableDiv.scrollWidth - scrollableDiv.clientWidth)

    scrollableDiv.scrollLeft = scrollPosition
    console.log(scrollPosition)
  }


  return (
    <>
      <main class="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        <Spline scene="https://prod.spline.design/dNQ123nn0WoNdmt8/scene.splinecode" className="absolute z-0 w-full h-full" />
        
        <Header scene={scene} setScene={setScene} />

        <div style={{
           transform: scene?'translateX(500px)':'translateX(-500px)',
           transition:"transform 2s ease"
        }} id="scroll-div" className="absolute  flex w-screen h-full z-0">
          <Home setScene={setScene} />
          <Services />
          <Contact />
        </div>

        <Chat setScene={setScene}/>
        <Footer />
      </main>
    </>
  )
}


