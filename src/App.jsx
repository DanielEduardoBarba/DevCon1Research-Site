import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import Header from './components/Header'
import Home from './scenes/Home'
import Services from './scenes/Services'
import Contact from './scenes/Contact'
import Chat from "./components/Chat"
import Footer from "./components/Footer"
import './App.css'
import EmulatedKeys from './scenes/EmulatedControls'
import AppContext from './AppContext'


const defaultUser = {
  scene: 0
}
export default function App() {
  const [user, setUser] = useState(defaultUser)
  const [scene, setScene] = useState(0)
  const lsAppName = "devConUser"

  const [scrollPos, setScrollPos] = useState(0)
  const [pageWidth, setPageWidth] = useState(0)

  const mainRef = useRef(null)
  const sceneRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const timeoutIDs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  useEffect(() => {
    getUser()
    setScene(user.scene)
    setPageWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  function saveUser(_user) {
    localStorage.setItem(lsAppName, JSON.stringify(_user))
    setUser(_user)
    console.log("Saved User->",_user)
  }
  function getUser() {
    const _u = localStorage.getItem(lsAppName)
    try {
      console.log("Found User->", user)
      if (_u) setUser(JSON.parse(_u))
    } catch(err){
  console.log("Error occurred getUser()", err)
      // saveUser(defaultUser)
    }
  }

  function handleResize() {
    setPageWidth(window.innerWidth)
  }
  useEffect(() => {
    goToScene(scene)
  }, [scene])

  useEffect(() => {
    waitAndMoveScroll()
  }, [scrollPos])

  const waitAndMoveScroll = () => {
    const closestScene = closestDivider(scrollPos)
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
    // user.scene=_scene
    // saveUser(user)
  }

  const handleScroll = (event) => {
    setScrollPos(event.target.scrollLeft)
  }

  function closestDivider() {
    const end = pageWidth * (appScenes.length - 1)
    if (!end) return 0
    // Generate the list of divider points
    const dividers = []
    for (let i = 0; i <= end; i += pageWidth) {
      dividers.push(i)
    }

    // Find the closest divider
    const closest = dividers.reduce((prev, curr) => {
      return (Math.abs(curr - scrollPos) < Math.abs(prev - scrollPos) ? curr : prev);
    })

    return dividers.indexOf(closest)
  }

  function focusValue(i = 0, multiplier = 1) {
    const iPos = scrollPos / pageWidth
    const opacity = 1 + (Math.abs(iPos - i) * -1)
    // console.log("iPos", iPos)
    // console.log("opacity", opacity)
    return opacity > 0 ? opacity * multiplier : 0
  }


  const appScenes = [
    <Home setScene={setScene} color={"white"} />,
    <Services />,
    <EmulatedKeys />,
    <Contact />
  ]

  function renderApp() {
    return appScenes.map((app, i) => <div
      ref={sceneRef[i]} key={i}
      style={{
        opacity: focusValue(i),
        width: "100vw"
      }} className=" border-2 border-orange-400">
      {app}
    </div>)
  }
  return (
    <AppContext.Provider value={{
      user, saveUser
    }}>
      <main className="relative h-screen flex flex-col overflow-hidden font-mono bg-black border-2 border-purple-500 ">
        {/* <div style={{
          opacity: focusValue(0)
        }} className=" absolute w-full h-full">

        <Spline scene={"https://prod.spline.design/RZzHVB2S0AGzU9bg/scene.splinecode"}
          className="absolute w-full h-full" />
          <div className="absolute w-[170px] h-[10%] right-0 bottom-0 rounded-tl-xl bg-black"/>
        </div> */}
        <Spline style={{
          opacity: focusValue(0)
        }}scene={"https://prod.spline.design/RZzHVB2S0AGzU9bg/scene.splinecode"}
          className="absolute w-full h-full" />

        <Spline style={{
          opacity: focusValue(2)
        }} scene={"https://prod.spline.design/A1i-MMZ2Ie1NTvif/scene.splinecode"}
          className="absolute z-0 w-full h-full" />



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
    </AppContext.Provider>
  )
}


