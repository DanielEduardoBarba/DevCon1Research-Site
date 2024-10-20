import { useContext } from "react"
import AppContext from "../AppContext"

export default function Home({}) {
const {goToScene}=useContext(AppContext)
    const hero=()=>{
        return<>
        <h2   className="my-6 text-xl lg:text-3xl text-white text-center ">
                        Your ideas are almost ready!
                    </h2>
                    <p className="max-w-3xl py-2 mx-8  text-white text-3xl lg:text-5xl font-bold text-center text-gray-800 ">
                        Software, IT, and Custom Solutions
                    </p>
                    <p className="max-w-3xl pt-12 mx-8  text-white text-xl lg:text-2xl  text-center text-gray-800  ">
                        Take control of your next big web, mobile, or cloud based product!
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <button  onClick={()=>goToScene(3)}  
                        className="px-4 py-2 my-2 cursor-pointer  text-white  uppercase bg-black hover:bg-white opacity-[0.7] rounded-xl border-2 border-gray-500 md:mt-16   hover:darkbg-gray-100  hover:bg-gray-800 text-white hover:text-black text-md">
                            CONNECT WITH US
                        </button>
                    </div></>
    }
    return (
            <div className="flex flex-col items-center justify-between h-[200vh] border-6 border-green-400">
                <div className="relative flex w-screen flex-col">
                    <div className="absolute mt-16">

                    {hero()}
                    </div>
                </div>
            </div>
    )
}


