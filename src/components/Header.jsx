import { useContext, useEffect, useRef, useState } from "react"
import Logo from "./Logo"
import AppContext from "../AppContext"


export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const{scene,menuOptions, goToScene}=useContext(AppContext)
    const ref = useRef(null)

    useEffect(() => {

        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowMenu(false)
            }
        }


        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    })

  

    const renderMenu = () => {
        return menuOptions.map((opt, i) => <a key={i} onClick={() => {
            goToScene(i)
            setShowMenu(false)
        }} style={{
            backgroundColor: scene == i ? "#999" : "transparent", 
            textShadow:scene != i?"1px 1px 5px black":""
        }} className="flex px-4 py-1 mx-2 my-1 border-2 cursor-pointer border-transparent hover:border-red-500 rounded-lg">
           <p className="text-black lg:text-white whitespace-nowrap">
             {opt}
            </p>
        </a>)

    }

    return (
        <header style={{
            // backgroundColor:"transparent"
        }} className="absolute  z-10 flex w-full justify-between">
            <div className="p-4 h-[50px] lg:h-[60px] pb-0">
                <Logo h={40} />
            </div>


            <div className="flex items-end z-10">
                <nav className="items-center hidden lg:block lg:flex">
                    {
                        renderMenu()
                    }
                </nav>
                <button onClick={() => {
                    setShowMenu(showMenu ? false : true)
                }} className="default-btn flex flex-col ml-4 lg:hidden">
                    <span className="w-6 h-1 mt-1 bg-black rounded-sm"/>    
                    <span className="w-6 h-1 my-1 bg-black rounded-sm"/>
                    <span className="w-6 h-1 mb-1 bg-black rounded-sm"/>
                </button>
                {showMenu
                    ?
                    <div className="z-10 relative inline-block text-left lg:hidden">
                        <div className="absolute right-0 w-56 mt-0 mr-4 origin-top-right bg-white rounded-xl shadow-lg">
                            <div ref={ref} className="py-1" >
                                <nav className="z-1000 items-center lg:flex">
                                    {
                                        renderMenu()
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>
                    : null

                }
            </div>

        </header>
    )
}