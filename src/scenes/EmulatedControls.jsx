import Steering from "../components/Steering"



export default function EmulatedControls() {

    function holdKey(key) {
        const event = new KeyboardEvent('keydown', { key })
        document.dispatchEvent(event)
    }
    function releaseKey(key) {
        const event = new KeyboardEvent('keyup', { key })
        document.dispatchEvent(event)
    }


    return (
        <div className="relative h-full flex-col items-center ">
            <div className="absolute bottom-0 w-screen flex flex-row justify-between border-2 border-red-500">
                <Steering w={50} h={50} />

                <div className="">

                {/* <button
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
                    </button> */}

                    <button onClick={() => holdKey("ArrowUp")} className="default-btn">
                        Go
                    </button>
                    <button onClick={() => releaseKey("ArrowUp")} className="default-btn">
                        Stop
                    </button>
                   


                </div>
            </div>
        </div>
    )
}


