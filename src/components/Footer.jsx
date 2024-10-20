import { useEffect, useState } from "react"


export default function Footer() {
    const [showFooter, setShowFooter] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShowFooter(false)
        }, 2000)
    }, [showFooter])
    return (
        <div
            onMouseOverCapture={() => setShowFooter(true)}
            onMouseOver={() => setShowFooter(true)} style={{
                opacity: showFooter ? 1 : 0
            }} className="absolute z-[10] duration-1000 transition-opacity w-[100vw] flex bottom-0 right-0 m-2 items-center justify-between ">
            <p className=" text-xs text-white"></p>
            <a href="mailto:daniel@devcon1solutions.com">
                <p style={{
                    textShadow: "0px 0px 3px black"
                }} className="shadow-xl text-xs text-white">
                    daniel@devcon1solutions.com
                </p></a>
            <p style={{
                textShadow: "0px 0px 3px black"
            }} className="cursor-pointer hidden md:block text-xs text-white">
                DevCon1 Solutions LLC, All Rights Reserved
            </p>
            <p style={{
                textShadow: "0px 0px 3px black"
            }} className="cursor-pointer  text-xs text-white">
                Copyright @{new Date().getFullYear()}
            </p>
        </div>
    )
}