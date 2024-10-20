import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"

export default function Chat() {
    const [hideBeacon, setHideBeacon] = useState(true)
    const {scene, goToScene }=useContext(AppContext)

    const screenWidth = window.innerWidth

    useEffect(() => {
        setTimeout(() => {
            setHideBeacon(false)
        }, 5000)
    }, [])

    useEffect(() => {
        if(scene)setHideBeacon(true)
    }, [scene])
    return (
        <div onClick={() => setHideBeacon(true)} style={{
            backgroundColor:   "pink"  , 
            transform: hideBeacon ? `translateX(-${screenWidth}px)` : ""
        }} className="absolute z-[1000] bottom-0 left-0 overflow-hidden duration-1000 ease pt-t pr-9  transition-all rounded-tr-full">

            <div className="relative w-full h-full">
                <div style={{
                }} className="z-20 text-sm m-6 text-extrabold bottom-0 left-0">
                    <span >
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.3121 23.3511C17.4463 23.0228 16.7081 22.5979 16.1266 22.1995C14.8513 22.7159 13.4578 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.2788 22.306 16.3983 21.1179 18.1551C21.0425 19.6077 21.8054 20.9202 22.5972 22.0816C23.2907 23.0987 23.1167 23.9184 21.8236 23.9917C21.244 24.0245 19.9903 23.9874 18.3121 23.3511ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.9503 20.3808 15.7531 19.328 17.2262C18.8622 17.8782 19.1018 19.0998 19.2616 19.8011C19.4167 20.4818 19.7532 21.2051 20.0856 21.8123C19.7674 21.7356 19.4111 21.6288 19.0212 21.481C18.1239 21.1407 17.3824 20.6624 16.8594 20.261C16.5626 20.0332 16.1635 19.9902 15.825 20.1494C14.6654 20.6947 13.3697 21 12 21C7.02944 21 3 16.9706 3 12ZM8.03001 15.2425C7.87428 14.6196 8.36619 14.0002 9.00016 13.9998H15.0002C15.6333 14.0002 16.126 14.6172 15.9703 15.24C15.4525 16.9881 13.7854 18 12.0002 18C10.2834 18 8.46902 16.9986 8.03001 15.2425ZM16.5 10C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 10C13.5 9.17157 14.1716 8.5 15 8.5C15.8284 8.5 16.5 9.17157 16.5 10ZM9 11.5C9.82843 11.5 10.5 10.8284 10.5 10C10.5 9.17157 9.82843 8.5 9 8.5C8.17157 8.5 7.5 9.17157 7.5 10C7.5 10.8284 8.17157 11.5 9 11.5Z" fill="#000000" />
                        </svg>
                    </span>
                    <p className="text-xs m-2">
                        Got a project?
                    </p>
                    <a onClick={() =>{
                        goToScene(3)
                    }} className="text-xs m-2 cursor-pointer underline whitespace-nowrap">
                        Let's Talk!
                    </a>
                </div>

            </div>
        </div>
    )
}