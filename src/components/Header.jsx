import { useContext, useEffect, useRef, useState } from "react"
import Logo from "./Logo"
import AppContext from "../AppContext"


export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const{scene, goToScene}=useContext(AppContext)
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

    const options = [
        "Home",
        "Services",
        "About Us",
        "QR Generator",
        "Demo App",
        "Contact Us"
    ]

    const renderMenu = () => {
        return options.map((opt, i) => <a key={i} onClick={() => {
            goToScene(i)
            setShowMenu(false)
        }} style={{
            backgroundColor: scene == i ? "#999" : "transparent", 
            textShadow:scene != i?"1px 1px 5px black":""
        }} className="flex px-6 py-2 mx-2 my-1 border-2 cursor-pointer border-transparent hover:border-red-500 rounded-xl">
           <p className="text-black lg:text-white">
             {opt}
            </p>
        </a>)

    }

    return (
        <header className=" z-10 flex w-full justify-between">
            <div className="p-4 h-[50px] lg:h-[70px] pb-0">
                <Logo h={"100%"} />
            </div>


            <div className="flex items-center z-10">
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
                    <div className="z-10 relative  inline-block text-left lg:hidden">
                        <div className="absolute  right-0 w-56 mt-8 mr-4 origin-top-right bg-white rounded-2xl shadow-lg">
                            <div ref={ref} className="py-0" >
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