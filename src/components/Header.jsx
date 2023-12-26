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

    const renderMenu = () => {
        return <>
            <a onClick={() => {
                setScene(0)
                setShowMenu(false)
            }} className="flex cursor-pointer px-6 py-2 hover:text-black">
                Home
            </a>
            <a onClick={() => {
                setScene(1)
                setShowMenu(false)
            }} className="flex cursor-pointer px-6 py-2 hover:text-black">
                Services
            </a>
            <a onClick={() => {
                setScene(2)
                setShowMenu(false)
            }} className="flex cursor-pointer px-6 py-2 hover:text-black">
                Contact
            </a>
        </>
    }

    return (
        <>
            <header className="relative z-10 flex items-center w-full h-14 md:h-24 lg:h-32">
                <Logo />
                <div className="container flex items-center justify-end px-6 mx-auto">

                    <div className="flex items-center z-10">
                        <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            {
                                renderMenu()
                            }
                        </nav>
                        <button onClick={() => {
                            setShowMenu(showMenu ? false : true)
                        }} className="flex flex-col ml-4 lg:hidden">
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                        </button>
                        {showMenu
                            ?
                            <div className="z-10 relative top-0 right-0 inline-block text-left lg:hidden">
                                <div className="absolute  right-0 w-56 mt-4 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div ref={ref} className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <nav className="z-1000 items-center text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
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
                </div>
            </header>
        </>
    )
}