import { useEffect, useRef, useState } from "react"
import ComputerEmojiSVG from "../assets/ComputerEmojiSVG"
import PhoneEmojiSVG from "../assets/PhoneEmojiSVG"
import Confetti from "react-confetti"


export default function Services() {
    const [celebrate, setCelebrate] = useState(false)
    const dispatchID = useRef(null)
    const dispatchPopup = (i) => {

        const element = document.getElementById(i)
        if (!element) return
        element.style.opacity = 0.3
        // element.style.scale = 1.1
        // element.style.filter = "drop-shadow(0px 0px 10px white)"
        setTimeout(() => {
            element.style.opacity = 0.1
            // element.style.scale = 1
            // element.style.filter = ""
        }, 2000)
    }

    const order = [5, 12, 3, 19, 0, 7, 22, 1, 14, 9, 18, 6, 21, 4, 11, 8, 23, 2, 15, 10, 13, 17, 20, 16]
    let i = 0

    const nextI = () => {
        i++
        if (i > services.length - 1) i = 0
        return order[i]
    }
    useEffect(() => {
        dispatchID.current = setInterval(() => {
            if (celebrate) return
            dispatchPopup(nextI())
            dispatchPopup(nextI())
            //    dispatchPopup(nextI()) 
            //    dispatchPopup(nextI()) 
        }, 1000)
    }, [])

    // useEffect(() => {
    //     if(celebrate){
    //         clearInterval(dispatchID.current)
    //     }
    // }, [celebrate])

    const services = [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
        , "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
        , "https://www.vectorlogo.zone/logos/lua/lua-icon.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        , "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        , "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
        , "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        , "https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
        , "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
        , "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        , "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"
        , "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
        , "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        , "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
        , "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
    ]

    function renderServices() {
        const elements = []
        for (let i = 0; i < services.length; i++) {
            // console.log(services[i])
            const el = <a key={i} id={i} target="_blank" rel="noreferrer"
                className="w-[50px] sm:w-[100px] duration-1000 ease opacity-[.1]" >
                <img className="" src={services[i]} />
            </a>
            elements.push(el)
        }
        return elements
    }

    return (
        <div className="h-full w-screen pt-[50px] lg:pt-[60px] overflow-scroll ">
            {
                celebrate
                    ? <Confetti width={window.innerWidth} hieght={window.innerHeight} />
                    : null
            }

            <div className="relative flex flex-col items-center justify-center align-center ">
                <h2 className="my-6 p-1 text-2xl text-center text-white ">
                    Truly Full Stack Software Development!
                </h2>
                <p className="max-w-3xl pb-7 mx-auto text-lg md:text-3xl font-bold text-center text-white  ">
                    We are your one stop shop for all things software!
                </p>
                <div className="absolute  w-full h-full flex justify-center items-center align-center z-[-300]">
                    <div className="opacity-[0.8] h-full flex grid grid-cols-4 xl:grid-cols-6 gap-10 sm:gap-6 ">
                        {
                            renderServices()
                        }
                    </div>
                </div>

                <div className="flex flex-row justify-between items-end">

                    <p className="max-w-4xl py-2 m-3 flex-row text-start text-lg lg:text-xl text-white ">
                        We tailor software to your needs. Working with web, mobile, and embedded platforms.
                        We tailor and design your system from idea to production.
                    </p>
                    <PhoneEmojiSVG w={200} h={200} color1={"#22bb22"} />
                </div>

                <div className="flex flex-row justify-between items-end">
                    <ComputerEmojiSVG w={200} h={200} color5={"#22bb22"} />
                    <p className="max-w-4xl py-2 m-3  text-end  text-lg lg:text-xl text-white ">
                        We work with all major
                        infastructures like Azure, GCP, and AWS, and are able to implement available solutions or build
                        them from the ground up.

                    </p>
                </div>

                <p className="max-w-4xl py-2 m-3 mr-6 text-start text-lg lg:text-xl text-white ">
                    We take your project from start to finish... and that's something to
                    <button onClick={() => setCelebrate(cl => cl ? false : true)}
                        style={{
                            backgroundColor: celebrate ? "#33ff33" : "",
                            boxShadow: celebrate ? "0px 0px 52px 5px #33ff33" : ""
                        }} className="default-btn text-black text-sm"> 👉🏼 celebrate</button>
                    about!
                </p>
                {/* <p className="max-w-4xl py-2 m-3 ml-6  text-end  text-lg lg:text-xl text-white  ">
                    From design, developing,
                    and deploying to the cloud, web, or app store, to lower level systems like micro
                    controllers and Linux distributions, we will bring the project from idea to reality. 
                  
                    </p> */}
                <p className="max-w-4xl py-2 m-3 ml-6  text-end  text-lg lg:text-xl text-white  ">
                    Reach out to us through our contact page and happy programming!
                </p>
                <p className="max-w-4xl py-2 m-3 mr-6 text-start text-lg lg:text-xl text-white ">
                    Let us help you make your idea come alive today!
                </p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>

    )
}


