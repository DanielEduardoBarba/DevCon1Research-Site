import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import Header from './components/Header'
import Home from './scenes/Home'
import Services from './scenes/Services'
import Contact from './scenes/Contact'
import Chat from "./components/Chat"
import Footer from "./components/Footer"
import EmulatedKeys from './scenes/EmulatedControls'
import AppContext from './AppContext'
import LoadingPage from './components/LoadingPage'
import QRApp from './scenes/QRApp'
import AboutUs from './scenes/AboutUs'
import { analytics } from './firebase.js'
import './App.css'
import { logEvent } from 'firebase/analytics'

const defaultUser = {}
export default function App({ routeScene = 0 }) {
  const [lockScroll, setLockScroll] = useState(false)
  const [user, setUser] = useState(defaultUser)
  const [scene, setScene] = useState(0)

  const lsAppName = "devConUser"

  const [isLoading, setIsLoading] = useState(true)
  const [loadRest, setLoadRest] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)
  const [pageWidth, setPageWidth] = useState(0)

  const mainRef = useRef(null)
  const sceneRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  useEffect(() => {
    getUser()
    logEvent(analytics,'Hyper link selection', {
      scene: routeScene,
      pageName: menuOptions[routeScene]
    })
    goToScene(routeScene)
    console.log("route scene: ", routeScene)
    setPageWidth(window.innerWidth)

    setTimeout(() => setLoadRest(true), 3000)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function saveUser(_user) {
    localStorage.setItem(lsAppName, JSON.stringify(_user))
    setUser(_user)
    console.log("Saved User->", _user)
  }
  function getUser() {
    const _u = localStorage.getItem(lsAppName)
    try {
      console.log("Found User->", user)
      if (_u) setUser(JSON.parse(_u))
    } catch (err) {
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

 logEvent(analytics,'Menu selection', {
      scene,
      pageName: menuOptions[scene]
    })
    setScene(_scene)
    sceneRef[_scene].current.scrollIntoView({ behavior: 'smooth' })
    setLoadRest(true)
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

  function renderApp() {
    return appScenes.map((app, i) => <div
      ref={sceneRef[i]} key={i}
      style={{
        opacity: focusValue(i),
        width: "100vw"
      }} className="w-screen">
      {app}
    </div>)
  }
  async function delay(ts) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), ts))
  }
  const sceneDelay = async (_scene, trueFx = () => { }, falseFx = () => { }) => {
    if (scene == _scene) {
      await delay(500)
      trueFx()
    } else {
      falseFx()
    }
  }
  const appScenes = [
    <Home />,
    <Services />,
    <AboutUs />,
    <QRApp />,
    <EmulatedKeys />,
    <Contact />
  ]

  const menuOptions = [
    "Home",
    "Services",
    "About Us",
    "QR Generator",
    "Demo App",
    "Contact Us"
  ]
  return (
    <AppContext.Provider value={{
      user, saveUser,
      scene, menuOptions,
      setScene,
      goToScene,
      setLockScroll,
      delay,
      sceneDelay
    }}>
      <main onLoad={() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }} style={{
        height: "100svh"
      }} className="relative flex flex-col overflow-hidden font-mono bg-black  ">
        {
          isLoading
            ? <LoadingPage />
            : null
        }
        <Spline style={{
          opacity: focusValue(0)
        }} scene={"https://prod.spline.design/RZzHVB2S0AGzU9bg/scene.splinecode"}
          className="absolute w-full h-full" />
        {
          loadRest
            ? <Spline style={{
              opacity: focusValue(4)
            }} scene={"https://prod.spline.design/A1i-MMZ2Ie1NTvif/scene.splinecode"}
              className="absolute z-0 w-full h-full" />
            : null
        }
        <Header />
        <div ref={mainRef}
          onScroll={handleScroll}
          className={`h-full flex w-screen z-0 overflow-y-hidden ${lockScroll ? "overflow-x-hidden" : "overflow-x-scroll"}`}>
          {renderApp()}
        </div>
        <Chat />
        <Footer />
      </main>
    </AppContext.Provider>
  )
}


