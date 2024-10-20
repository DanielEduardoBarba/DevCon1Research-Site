import { useEffect, useRef, useState } from "react"
import Pedals from "../components/Pedals"
import Steering from "../components/Steering"
import ArrowSVG from "../assets/ArrowSVG"



export default function EmulatedControls() {
    const [steer, setSteer] = useState(0)

    const intervalID = useRef(null)
    const timeGap = 30
    const smallestGap = 2
    useEffect(() => {
        clearInterval(intervalID.current)
        const delay = timeGap - (Math.abs(steer) * timeGap)

        console.log("Stereing:", steer)
        console.log("Int:", delay)
        if (steer == 0) return
        else if (steer < 0) {
            intervalID.current = setInterval(() => {
                holdKey("ArrowLeft")
                setTimeout(() => {
                    releaseKey("ArrowLeft")
                    releaseKey("ArrowRight")
                }, smallestGap + 2)
            }, delay > smallestGap ? delay : smallestGap)
        } else if (steer > 0) {
            intervalID.current = setInterval(() => {
                holdKey("ArrowRight")
                setTimeout(() => {
                    releaseKey("ArrowLeft")
                    releaseKey("ArrowRight")
                }, smallestGap + 2)
            }, delay > smallestGap ? delay : smallestGap)
        }

    }, [steer])



    function holdKey(key) {
        const event = new KeyboardEvent('keydown', { key })
        document.dispatchEvent(event)
    }
    function releaseKey(key) {
        const event = new KeyboardEvent('keyup', { key })
        document.dispatchEvent(event)
    }




    return (
        <div className="relative h-full w-screen flex-col items-center ">
            <div className="absolute bottom-0 w-screen flex flex-col-reverse lg:flex-row  justify-between">
            <div className="flex flex-row justify-start translate-x-[-20px]">
                    <Pedals h={125} brakeFx={() => {
                        releaseKey("ArrowUp")
                    }} accelFx={() => {
                        holdKey("ArrowUp")
                    }} />
                </div>
                    <div onClick={() => setSteer(0)} className="absolute bottom-0 right-0 bg-gray-400 rounded-xl flex flex-row justify-between">
                        <button
                            onTouchStart={() => holdKey("ArrowLeft")}
                            onTouchEnd={() => releaseKey("ArrowLeft")}
                            onMouseDown={() => holdKey("ArrowLeft")}
                            onMouseUp={() => releaseKey("ArrowLeft")}
                            style={{ backgroundColor: "black" }}
                            className="default-btn">
                            <ArrowSVG w={50} h={50} deg={180} />
                        </button>
                        <button
                            onTouchStart={() => holdKey(" ")}
                            onTouchEnd={() => releaseKey(" ")}
                            onMouseDown={() => holdKey(" ")}
                            onMouseUp={() => releaseKey(" ")}
                            style={{ backgroundColor: "black" }}
                            className="default-btn">
                            <ArrowSVG w={50} h={50} deg={270} />
                        </button>
                        <button
                            onTouchStart={() => holdKey("ArrowRight")}
                            onTouchEnd={() => releaseKey("ArrowRight")}
                            onMouseDown={() => holdKey("ArrowRight")}
                            onMouseUp={() => releaseKey("ArrowRight")}
                            style={{ backgroundColor: "black" }}
                            className="default-btn">
                            <ArrowSVG w={50} h={50} deg={0} />
                        </button>
                    </div>
               
                
            </div>
        </div>
    )
}


