import { useEffect } from "react"


export default function Services() {


    useEffect(() => {
        setInterval(() => {

            const i = Math.floor(Math.random() * services.length)
            const element= document.getElementById(i)
            if(!element)return
            element.style.opacity = 1
            element.style.scale = 1.1
            setTimeout(() => {
                element.style.opacity = 0.2
                element.style.scale = 1
            }, 500)
        }, 700)
    }, [])


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
            <div className="h-full w-screen overflow-scroll border-4 border-purple-500 ">
   
                <div className="flex flex-col items-center justify-center align-center border-2 border-black">
                    <h2 className="my-6 p-1 text-3xl text-center ">
                        Full Stack Software and Embedded Development!
                    </h2>
                    <p className="max-w-3xl py-2 mx-auto text-2xl font-bold text-center text-gray-800 md:text-6xl ">
                        We use the same tech as Silicon Valley!
                    </p>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                    <div className=" w-full h-full flex justify-center items-center align-center z-[-300]">
                        <div className=" w-ful h-full flex grid grid-cols-4 xl:grid-cols-6 gap-10 sm:gap-12 border-2 border-green-500">
                            {
                                renderServices()
                            }
                        </div>
                    </div>

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


