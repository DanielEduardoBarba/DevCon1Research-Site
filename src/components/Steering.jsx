import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";


export default function Steering({ w, h, turnFx = () => { } }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0)

    const { setLockScroll } = useContext(AppContext)

    useEffect(() => {
        console.log(position)

        const delta = (position.x - (w / 2)) / (w / 2)
        setRotation((delta * 90))
        turnFx(delta)
        console.log("Delta", delta)
    }, [position])
    
    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
    }
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            onMouseLeave={() => setLockScroll(false)}
            onTouchEnd={() => setLockScroll(false)}
            onTouchMove={handleTouchMove}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseMove}
            onTouchStart={() => setLockScroll(true)}
            style={{
                transform: `rotate(${rotation}deg)`
            }}
            height={h} width={w} viewBox="0 0 512 512" className=" overscroll-contain"  >
            <polygon fill="#C6C5CA" points="284.632,483.368 227.368,483.368 216.14,310.44 295.86,310.44 " />
            <polygon fill="#8A8A91" points="256,483.368 284.632,483.368 295.86,310.44 256,310.44 " />
            <polygon fill="#C6C5CA" points="201.56,292.491 28.632,279.018 28.632,232.982 201.56,216.14 " />
            <polygon fill="#8A8A91" points="483.368,279.018 310.44,292.491 310.44,216.14 483.368,232.982 " />
            <g>
                <path fill="#57565C" d="M256,512c-68.38,0-132.668-26.628-181.02-74.981C26.628,388.668,0,324.38,0,256   S26.628,123.332,74.98,74.981C123.332,26.628,187.62,0,256,0s132.667,26.628,181.02,74.981C485.372,123.332,512,187.62,512,256   s-26.628,132.667-74.98,181.019C388.668,485.372,324.38,512,256,512z M256,57.263C146.416,57.263,57.263,146.416,57.263,256   S146.416,454.737,256,454.737S454.737,365.584,454.737,256S365.584,57.263,256,57.263z" />
                <path fill="#57565C" d="M256,339.072c-45.806,0-83.072-37.266-83.072-83.072s37.266-83.072,83.072-83.072   s83.072,37.266,83.072,83.072S301.806,339.072,256,339.072z" />
            </g>
            <g>
                <path fill="#1D1D1F" d="M454.737,256c0,109.584-89.153,198.737-198.737,198.737V512c68.38,0,132.667-26.628,181.02-74.981   C485.372,388.668,512,324.38,512,256s-26.628-132.668-74.98-181.019C388.668,26.628,324.38,0,256,0v57.263   C365.584,57.263,454.737,146.416,454.737,256z" />
                <path fill="#1D1D1F" d="M339.072,256c0-45.806-37.266-83.072-83.072-83.072v166.144   C301.806,339.072,339.072,301.806,339.072,256z" />
            </g>
            <path fill="#DE3205" d="M256,284.07c-15.478,0-28.07-12.592-28.07-28.07s12.592-28.07,28.07-28.07s28.07,12.592,28.07,28.07  S271.478,284.07,256,284.07z" />
            <path fill="#690812" d="M284.07,256c0-15.478-12.592-28.07-28.07-28.07v56.14C271.478,284.07,284.07,271.478,284.07,256z" />
        </svg>

    )
}