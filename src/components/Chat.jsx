import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"
import FaceChatSVG from "../assets/FaceChatSVG"

export default function Chat() {
    const [alive, setAlive] = useState(false)
    const [wink, setWink] = useState(false)
    const [hideBeacon, setHideBeacon] = useState(true)
    const { scene, goToScene } = useContext(AppContext)

    const screenWidth = window.innerWidth

    useEffect(() => {

        setTimeout(() => {
            setHideBeacon(false)
            setTimeout(() => {
                setWink(true)
                setTimeout(()=>setAlive(true),2000)
            }, 2000)

        }, 5000)
    }, [])

    useEffect(() => {
        if (scene) setHideBeacon(true)
    }, [scene])
    return (
        <div onClick={() => setHideBeacon(true)} style={{
            backgroundColor: "pink",
            transform: hideBeacon ? `translateX(-${screenWidth}px)` : ""
        }} className="absolute z-[1000] bottom-0 left-0 overflow-hidden duration-1000 ease pr-2  transition-all rounded-tr-full">

            <div className="relative w-full h-full">
                <div style={{
                }} className="z-[20] text-sm m-4 bottom-0 left-0">
                    <span >
                        <FaceChatSVG w={50} h={50} alive={alive} wink={wink} />
                    </span>
                    <p className="text-xs m-0">
                        Got a project?
                    </p>
                    <a onClick={() => {
                        goToScene(5)
                    }} className="text-xs  font-bold m-0 cursor-pointer underline whitespace-nowrap">
                        Let's Talk!
                    </a>
                </div>

            </div>
        </div>
    )
}