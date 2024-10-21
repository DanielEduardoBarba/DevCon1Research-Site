import { useContext, useEffect, useRef, useState } from "react"
import DAN from "../assets/daniel.jpg"
import GABBY from "../assets/gabby.png"
import LINKEDIN from "../assets/linkedinLogo.png"
import GITHUB from "../assets/github-mark-white.png"
import AppContext from "../AppContext"

export default function AboutUs() {
    const [show, setShow] = useState(false)
    const { scene, sceneDelay } = useContext(AppContext)
    useEffect(() => {
        sceneDelay(2, () => {
            setShow(true)
        }, () => {
            setShow(false)
        })
    }, [scene])

    const people = [
        useRef(null),
        useRef(null)
    ]
    const image = [
        useRef(null),
        useRef(null)
    ]

    return (
        <div className="h-full w-screen overflow-scroll ">

            <div className="relative flex flex-col items-center justify-center align-center ">
                <h2 className="my-6 p-1 text-2xl text-center text-white ">
                    Meet the team!
                </h2>
                <p className=" text-md md:text-lg font-bold text-center text-white border-b-2 rounded-xl px-8 mb-2 ">
                    Daniel
                </p>
                <div ref={people[0]} className="relative w-full lg:w-3/4 p-4 flex flex-row justify-between ">
                    <p style={{
                        color: "white",
                        opacity: show ? 1 : 0
                    }} className="max-w-xl w-3/4 text-md lg:text-lg duration-1000">For Daniel, as a former machinist and product developer, building and design is both a trade and hobby.
                        He loves to optimize and create new systems and solutions for clients of all types.
                        A leader and entrepreneur at heart, but engineer in practice,
                        he loves challenges and making ideas a reality.</p>

                    <div style={{
                        opacity: show ? 1 : 0
                    }} className="w-full duration-1000 flex flex-row z-[1000] justify-start items-end">
                        <a href="https://www.linkedin.com/in/daniel-e-barba/"
                            className="mx-4 lg:mx-8">
                            <img src={LINKEDIN} className="h-full bg-white max-h-12  border-2 border-white rounded-lg" />
                        </a>
                        <a href="https://github.com/DanielEduardoBarba/"
                            className="mx-4 lg:mx-8">
                            <img src={GITHUB} className="h-full bg-black max-h-12  border-2 border-white rounded-lg" />
                        </a>
                    </div>

                    <div style={{
                        width: show ? image[0].current?.offsetWidth : people[0].current?.offsetWidth,
                        height: show ? image[0].current?.offsetHieght : people[0].current?.offsetHieght,
                    }} className="absolute  h-full duration-1000 right-0 flex flex-col justify-start items-start mr-4 z-[10000]">

                        <img ref={image[0]} src={DAN} className="h-full bg-black max-h-48  border-2 border-white rounded-3xl" />
                    </div>
                </div>


                <p className=" text-md md:text-lg font-bold text-center text-white border-b-2 rounded-xl px-8 mb-2 mt-16 ">
                    Gabby
                </p>
                <div ref={people[1]} className="relative w-full lg:w-3/4 p-4 flex flex-row justify-between ">
                    <div style={{
                        opacity: show ? 1 : 0
                    }} className="w-full duration-1000 flex flex-row z-[1000] justify-end items-end">
                        {/* <a href="https://www.linkedin.com/in/daniel-e-barba/"
                            className="mx-4 lg:mx-8">
                            <img src={LINKEDIN} className="h-full bg-white max-h-12  border-2 border-white rounded-lg" />
                        </a>
                        <a href="https://github.com/DanielEduardoBarba/"
                            className="mx-4 lg:mx-8">
                            <img src={GITHUB} className="h-full bg-black max-h-12  border-2 border-white rounded-lg" />
                        </a> */}
                    </div>
                    <p style={{
                        color: "white",
                        opacity: show ? 1 : 0
                    }} className="max-w-xl w-3/4 text-md text-end lg:text-lg duration-1000">
                        Gabriela brings over 6 years of experience
                        in accounting, bookkeeping, and payroll. Known for her proactive and practical
                        approach, she values building trust
                        and respect with her clients, focusing on improving their financial health and transparency.
                    </p>

                    <div style={{
                        width: show ? image[1].current?.offsetWidth : people[1].current?.offsetWidth,
                        height: show ? image[1].current?.offsetHieght : people[1].current?.offsetHieght,
                    }} className="absolute  h-full duration-1000 left-0 flex flex-col justify-start items-end mr-4 z-[10000]">

                        <img ref={image[1]} src={GABBY} className="h-full bg-black max-h-48  border-2 border-white rounded-3xl" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>

    )
}


