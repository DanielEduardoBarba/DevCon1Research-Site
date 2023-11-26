import { useState } from "react"
import Logo from "./Logo"


export default function Header({ scene, setScene }) {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <header class="z-30 flex items-center w-full h-14 md:h-24 lg:h-32">
                <Logo />
                <div class="container flex items-center justify-end px-6 mx-auto">

                    <div class="flex items-center z-10">
                        <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            <a onClick={() => {
                                setScene(0)
                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                Home
                            </a>
                            {/* <a onClick={() => {
                                setScene(1)
                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                Works
                            </a> */}
                            <a onClick={() => {
                                setScene(1)
                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                Services
                            </a>
                            <a onClick={() => {
                                setScene(2)
                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                Contact
                            </a>
                        </nav>
                        <button onClick={() => {
                            setShowMenu(showMenu ? false : true)
                        }} class="flex flex-col ml-4 lg:hidden">
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                        </button>
                        {showMenu
                            ?
                            <div class="relative top-0 right-0 inline-block text-left lg:hidden">
                                <div class="absolute z-[100] right-0 w-56 mt-4 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <nav class="items-center text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                                            <a onClick={() => {
                                                setScene(0)
                                                setShowMenu(false)
                                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                                Home
                                            </a>
                                            {/* <a onClick={() => {
                                                setScene(1)
                                                setShowMenu(false)
                                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                                Works
                                            </a> */}
                                            <a onClick={() => {
                                                setScene(1)
                                                setShowMenu(false)
                                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                                Services
                                            </a>
                                            <a onClick={() => {
                                                setScene(2)
                                                setShowMenu(false)
                                            }} href="#" class="flex px-6 py-2 hover:text-black">
                                                Contact
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            : ""

                        }
                    </div>
                </div>
            </header>
        </>
    )
}