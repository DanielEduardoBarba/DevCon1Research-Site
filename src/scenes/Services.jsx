import Spline from '@splinetool/react-spline'


export default function Services() {

    const wl=60
    const hl=60

    return (
        <>
            <div className="flex flex-col w-full items-center justify-between px-6 py-4 mx-auto">
                <Spline scene="https://prod.spline.design/lpTp8Ng8HpwtBM7m/scene.splinecode" className=" z-0 w-full h-full" />
                <div className="flex w-screen overflow-scroll flex-col items-center justify-center align-center">
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Full Stack Software and Embedded Development!
                    </h2>
                    <p className="max-w-3xl py-2 mx-auto text-2xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                        We use the same tech as Silicone Valley!
                    </p>
                    <h3 align="left">Languages:</h3>
                    <div className=" w-1/2 grid grid-cols-4 gap-4">
                        <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width={wl} height={hl} /> </a>
                        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width={wl} height={hl} /> </a>
                        <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width={wl} height={hl} /> </a>
                        <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width={wl} height={hl} /> </a>
                        <a href="https://www.lua.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/lua/lua-icon.svg" alt="bash" width={wl} height={hl} /> </a>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={wl} height={hl} /> </a>
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={wl} height={hl} /> </a>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width={wl} height={hl} alt="TypeScript" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={wl} height={hl} /> </a>
                        <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width={wl} height={hl} alt="Python" /></a>
                    </div>

                    <h3 align="left">Tools:</h3>
                    <div className=" w-1/2 grid grid-cols-4 gap-4">
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={wl} height={hl} /> </a>
                        <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width={wl} height={hl} /> </a>
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={wl} height={hl} /> </a>
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width={wl} height={hl} /> </a>
                        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width={wl} height={hl} /> </a>
                        <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width={wl} height={hl} /> </a>
                        <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width={wl} height={hl} /> </a>
                    </div>

                    <h3 align="left">Platforms:</h3>
                    <div className=" w-1/2 grid grid-cols-4 gap-4">
                        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" alt="amazonwebservices" width={wl} height={hl} /> </a>
                        <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width={wl} height={hl} /> </a>
                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg" alt="firebase" width={wl} height={hl} /> </a>
                        <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width={wl} height={hl} /> </a>
                    </div>

                    <h3 align="left">Databases:</h3>
                    <div className=" w-1/2 grid grid-cols-4 gap-4">
                        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width={wl} height={hl} /> </a>
                        <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firestore" width={wl} height={hl} /> </a>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width={wl} height={hl} /> </a>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        </>
    )
}


