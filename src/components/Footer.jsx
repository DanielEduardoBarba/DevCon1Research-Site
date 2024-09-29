import { useEffect, useState } from "react"


export default function Footer() {
const [showFooter,setShowFooter]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setShowFooter(false)
        },2000)
    },[])
    return ( 
            <div onMouseOver={()=>setShowFooter(true)}
            onMouseLeave={()=>setShowFooter(false)} style={{
                opacity:showFooter?1:0
            }} className="absolute duration-1000 transition-opacity w-[75vw] flex bottom-0 right-0 m-2 items-center justify-between ">
                <p className=" text-xs text-white"></p>
                <a href="mailto:daniel@devcon1solutions.com">
                    <p className="hidden lg:block text-xs text-white">
                        DANIEL@DEVCON1SOLUTIONS.COM
                    </p></a>
                <p className="hidden md:block text-white">
                    DevCon1 Solutions LLC, All Rights Reserved
                </p>
                <p className=" text-xs text-white">
                    Copyright @{new Date().getFullYear()}
                </p>
            </div> 
    )
}