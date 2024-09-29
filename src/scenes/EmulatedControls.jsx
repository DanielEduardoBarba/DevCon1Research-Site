import { useEffect, useRef, useState } from "react"
import Pedals from "../components/Pedals"
import Steering from "../components/Steering"



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

                <div className="relative z-0 w-min h-min ">
                    <Steering w={300} h={300}
                        turnFx={setSteer} />
                    <div onClick={()=>setSteer(0)} className="absolute bottom-0 w-full flex flex-row justify-between">
                        <button
                            onTouchStart={() => holdKey("ArrowLeft")}
                            onTouchEnd={() => releaseKey("ArrowLeft")}
                            onMouseDown={() => holdKey("ArrowLeft")}
                            onMouseUp={() => releaseKey("ArrowLeft")}
                            className="default-btn">
                            Left
                        </button>
                        <button
                            onTouchStart={() => holdKey("ArrowRight")}
                            onTouchEnd={() => releaseKey("ArrowRight")}
                            onMouseDown={() => holdKey("ArrowRight")}
                            onMouseUp={() => releaseKey("ArrowRight")}
                            className="default-btn">
                            Right
                        </button>
                    </div>
                </div>



                <div className="w-full flex flex-row justify-end pr-4 lg:pr-9">


                    <Pedals h={150} brakeFx={() => {
                        releaseKey("ArrowUp")
                    }} accelFx={() => {
                        holdKey("ArrowUp")
                    }} />



                </div>
            </div>
        </div>
    )
}


