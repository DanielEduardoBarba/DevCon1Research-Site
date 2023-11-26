
import config from "../config.json"
import { useState } from "react"

export default function Contact() {
    const [servRes, setServRes] = useState("")

    const handleContact = (e) => {
        e.preventDefault()

        let pkg = {}
        setTimeout(() => {
            setServRes("")
        }, 3000)
        try {
            const email = document.getElementById("email").value
            const name = document.getElementById("name").value
            const comment = document.getElementById("comment").value

            pkg = {
                email,
                name,
                comment
            }
        } catch (err) {
            console.log("Error occured finding name, email, or comment", err)
            return
        }

        fetch(`${config.api}/contact/form`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pkg)
        }).then(incoming => {
                if (incoming.status == 200) setServRes("Message sent succesfully!")
                else setServRes("Error occurred!")
                return incoming.json()
            }).then(response => {
                console.log("Server responded: ", response)
            }).catch(console.error)

    }


    return (

        <>

            <div className=" flex-col items-center">
                <div className="border-4 border-green-500 overflow-scroll h-full w-screen">

                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Reach out to us about your next great idea!
                    </h2>
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Reach out to us about your next great idea!
                    </h2>
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Reach out to us about your next great idea!
                    </h2>
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Reach out to us about your next great idea!
                    </h2>
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Reach out to us about your next great idea!
                    </h2>
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Reach out to us about your next great idea!
                    </h2>

                    <div className="w-full h-min overflow-scroll flex items-center justify-center">

                        <div className="flex max-w-sm space-x-3 ">
                            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-[#ffffffbb] border-2 border-black rounded-lg shadow dark:bg-gray-800">
                                <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                    Contact us !
                                </div>
                                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                                    {!servRes
                                        ? <>
                                            <div className="col-span-2 lg:col-span-1">
                                                <div className=" relative ">
                                                    <input type="text" id="name" className=" shadow-xl rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                                                </div>
                                            </div>
                                            <div className="col-span-2 lg:col-span-1">
                                                <div className=" relative ">
                                                    <input type="text" id="email" className=" shadow-xl rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" />
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <label className="text-gray-700" htmlFor="name">
                                                    <textarea id="comment" className=" shadow-xl flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="enter your comment" name="comment" rows="5" cols="40">
                                                    </textarea>
                                                </label>
                                            </div>
                                        </>
                                        : <p className="col-span-2 text-xl font-bold text-green-500">{servRes}</p>
                                    }
                                    <div className="col-span-2 text-right">
                                        <button onClick={handleContact} className="py-2 px-4 shadow-xl bg-red-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>



    )
}

