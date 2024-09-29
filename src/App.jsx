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
  const timeoutIDs = [
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
  const waitAndMoveScroll = () => {
    // console.log("WAIT then change")
    // console.log("scrollPosition", scrollPosition)
    const closestScene = closestDivider(scrollPosition)
    focusValue(0,scrollPosition)
    console.log("closestScene", closestScene)
    handleSceneChange(closestScene)
  } 

  const handleSceneChange = (_scene) => {
    clearTimeout(timeoutIDs[0].current)
    timeoutIDs[0].current = setTimeout(() => {
      goToScene(_scene)
    }, 100)
  }

  const goToScene = (_scene) => {
    setScene(_scene)
    sceneRef[_scene].current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollLeft)
  }

  function closestDivider(pos) {
    const end= pageWidth * (appScenes.length-1) 
    if (!end) return 0
    // Generate the list of divider points
    const dividers = []
    for (let i = 0; i <= end; i += pageWidth) {
      dividers.push(i)
    }

    // Find the closest divider
    const closest = dividers.reduce((prev, curr) => {
      return (Math.abs(curr - pos) < Math.abs(prev - pos) ? curr : prev);
    })

    return dividers.indexOf(closest)
  }
  

  function focusValue(i,pos) {
    const end= pageWidth * (appScenes.length-1) 
    if (!end) return 0
    // Generate the list of divider points
    const dividers = []
    for (let i = 0; i <= end; i += pageWidth) {
      dividers.push(i)
    }

    // Find the closest divider
    const closest = dividers.reduce((prev, curr) => {
      return (Math.abs(curr - pos) < Math.abs(prev - pos) ? curr : prev);
    })

    const opacity=closest-pos
    console.log("opacity",opacity)
    return  
  }


  const appScenes = [
    <Home setScene={setScene} />,
    <Services />,
    <Contact />
  ]

  function renderApp() { 
    return appScenes.map((app, i) => <div
      ref={sceneRef[i]} key={i}
      className="w-screen border-2 border-orange-400">
      {app}
    </div>)
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
        }} className="h-full flex w-screen z-0 overflow-y-hidden overflow-x-scroll border-4 border-red-500">
        {renderApp()}
      </div>

      <Chat scene={scene} setScene={setScene} />
      <Footer />

    </main>

  )
}


