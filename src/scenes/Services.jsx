import { useEffect } from "react"


export default function Services() {

    const dispatchPopup = (i) => {

        const element = document.getElementById(i)
        if (!element) return
        element.style.opacity = 1
        element.style.scale = 1.1
        setTimeout(() => {
            element.style.opacity = 0.2
            element.style.scale = 1
        }, 500)
    }

    const order = [5, 12, 3, 19, 0, 7, 22, 1, 14, 9, 18, 6, 21, 4, 11, 8, 23, 2, 15, 10, 13, 17, 20, 16]
    let i = 0

    const nextI = () => {
        i++
        if (i > services.length - 1) i = 0
        return order[i]
    }
    useEffect(() => {
        setInterval(() => {
            dispatchPopup(nextI())
            //    dispatchPopup(nextI()) 
            //    dispatchPopup(nextI()) 
        }, 1000)
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
        <div className="h-full w-screen overflow-scroll ">

            <div className="relative flex flex-col items-center justify-center align-center ">
                <h2 className="my-12 p-1 text-3xl text-center text-white ">
                    Truly Full Stack Software Development!
                </h2>
                <p className="max-w-3xl py-2 mx-auto text-2xl font-bold text-center text-white md:text-6xl ">
                    We are your one stop shop for all things software!
                </p>




                <div className="absolute  w-full h-full flex justify-center items-center align-center z-[-300]">
                    <div className="opacity-[0.8] h-full flex grid grid-cols-4 xl:grid-cols-6 gap-10 sm:gap-12 ">
                        {
                            renderServices()
                        }
                    </div>
                </div>

                <p className="max-w-xl py-2 mx-12 text-xl lg:text-2xl  text-start text-white ">
                    We tailor software to your needs. Working with web, mobile, and embedded platforms.
                    We can custom develop and design your system from idea to production.  </p>
                <p className="max-w-xl py-2 mx-12 text-xl lg:text-2xl  text-start text-white ">
                    We work with all major
                    infastructures like Azure, GCP, and AWS, and are able to implement available solutions or build
                    them from the ground up. </p>

                    <p className="max-w-xl py-2 mx-12 text-xl lg:text-2xl  text-start text-white ">
                   We take your project from start to finish! From design, developing, 
                   and deploying to the cloud, web, or app store, to lower level systems like micro 
                   controllers and Linux distributions, we will bring the project from idea to reality. </p>
                <p className="max-w-xl py-2 mx-12 text-xl lg:text-2xl  text-start text-white ">
                    Let us help you make your idea come alive today!
                </p>
                <p className="max-w-xl py-2 mx-12 text-xl lg:text-2xl  text-start text-white ">
                    Reach out to us through our contact page and happy programming!
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


