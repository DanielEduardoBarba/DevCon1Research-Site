import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
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

  const [goTo, setGoTo] = useState(null)

  const mainRef = useRef(null)
  const sceneRef = [
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const timeoutIDs=[
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  useEffect(() => {
    setPageWidth(window.innerWidth)

    window.addEventListener("resize", handleResize) 
    return () => {
      window.removeEventListener("resize", handleResize) 
    }
  }, [])
  function handleResize() {
    setPageWidth(window.innerWidth)
  }

 
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    if (goTo != null) {

    }
  }, [goTo])

  useEffect(() => {
    goToScene(scene)
  }, [scene])
  useEffect(() => {
    waitAndMoveScroll()
  }, [scrollPosition])
  const waitAndMoveScroll=()=>{
    // console.log("WAIT then change")
    // console.log("scrollPosition", scrollPosition)
    const closestScene=closestDivider(scrollPosition, 0,pageWidth*2, pageWidth)
    console.log("closestScene", closestScene)
    handleSceneChange(closestScene)
  }
  const getAndMoveScroll=()=>{
    // console.log("IMMEDIATE change")
    // console.log("scrollPosition", scrollPosition)
    const closestScene=closestDivider(scrollPosition, 0,pageWidth*2, pageWidth)
    // console.log("closestScene", closestScene)
    // handleSceneChange(closestScene)
  }

  const handleSceneChange = (_scene) => {
    clearTimeout(timeoutIDs[0].current)
    timeoutIDs[0].current=setTimeout(()=>{
      goToScene(_scene)
    },100) 
  }

  const goToScene=(_scene)=>{
    setScene(_scene)
    sceneRef[_scene].current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollLeft)
  }

  function closestDivider(num, start, end, divider) {
    if(!end)return 0
    // Generate the list of divider points
    const dividers = []
    for (let i = start; i <= end; i += divider) {
        dividers.push(i)
    }

    // Find the closest divider
    const closest = dividers.reduce((prev, curr) => {
        return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
    })

    return dividers.indexOf(closest)
}
  return (
    <main className="app-container relative h-screen flex flex-col overflow-hidden font-mono bg-white border-2 border-purple-500 ">
      <Spline style={{
        opacity: scene == 0 ? 1 : 0
      }} scene={"https://prod.spline.design/dNQ123nn0WoNdmt8/scene.splinecode"}
        className="absolute duration-1000 ease z-0 w-full h-full" />
      <Spline style={{
        opacity: scene == 2 ? 1 : 0
      }} scene={"https://prod.spline.design/lpTp8Ng8HpwtBM7m/scene.splinecode"}
        className="absolute duration-1000 ease z-0 w-full h-full" />


      <Header scene={scene} setScene={setScene} />

      <div ref={mainRef}
      onScroll={handleScroll} 
      style={{
        //  transform: scene?`translateX(-${pageWidth*scene}px)`:"",
        //  transition:"transform 3s ease"
      }} className=" h-full flex w-screen  z-0 overflow-scroll border-2 border-green-500">
        <div ref={sceneRef[0]}>
          <Home setScene={setScene} />
        </div>
        <div ref={sceneRef[1]}>
          <Services />
        </div>
        <div ref={sceneRef[2]}>
          <Contact />
        </div>
      </div>

      <Chat setScene={setScene} />
      <Footer />

    </main>

  )
}


