import { useEffect, useRef, useState } from "react"
import Logo from "./Logo"


export default function Header({ scene, setScene }) {
    const [showMenu, setShowMenu] = useState(false)
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
        "Examples",
        "Contact"
    ]

    const renderMenu = () => {
        return options.map((opt, i) => <a key={i} onClick={() => {
            setScene(i)
            setShowMenu(false)
        }} style={{
            backgroundColor: scene == i ? "#cccccc" : "transparent", 
            color: scene == i ? "black" : "white", 
            textShadow:"1px 1px 5px black"
        }} className="default-btn flex px-6 py-2 mx-2 border-2 cursor-pointer hover:border-2 border-transparent hover:border-red-500 rounded-xl">
            {opt}
        </a>)

    }

    return (
        <header className="  z-10 flex w-full justify-between">
            <div className="p-4 pb-0">
                <Logo h={50} />
            </div>


            <div className="flex items-center z-10">
                <nav className="items-center text-lg text-gray-800 uppercase hidden lg:block lg:flex">
                    {
                        renderMenu()
                    }
                </nav>
                <button onClick={() => {
                    setShowMenu(showMenu ? false : true)
                }} className="default-btn flex flex-col ml-4 lg:hidden">
                    <span className="w-6 h-1 mt-1 bg-black">
                    </span>
                    <span className="w-6 h-1 my-1 bg-black">
                    </span>
                    <span className="w-6 h-1 mb-1 bg-black">
                    </span>
                </button>
                {showMenu
                    ?
                    <div className="z-10 relative  inline-block text-left lg:hidden">
                        <div className="absolute  right-0 w-56 mt-8 mr-4 origin-top-right bg-white rounded-md shadow-lg">
                            <div ref={ref} className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <nav className="z-1000 items-center text-lg text-gray-800 uppercase font-sen  lg:flex">
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