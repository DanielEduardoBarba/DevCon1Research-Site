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
            }} className="absolute duration-1000 transition-opacity w-full flex bottom-0 right-0 m-2 items-center justify-between ">
                <p className=" text-xs font-black"></p>
                <a href="mailto:daniel@devcon1solutions.com">
                    <p className="hidden lg:block text-xs font-black">
                        DANIEL@DEVCON1SOLUTIONS.COM
                    </p></a>
                <p className="hidden md:block">
                    DevCon1 Solutions LLC, All Rights Reserved
                </p>
                <p className=" text-xs font-black">
                    Copyright @{new Date().getFullYear()}
                </p>
            </div> 
    )
}