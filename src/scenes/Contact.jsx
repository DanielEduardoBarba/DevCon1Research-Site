import SpinnerSVG from "../assets/SpinnerSVG"
import config from "../config.json"
import { useState } from "react"

export default function Contact() {
    const [servRes, setServRes] = useState("")
    const [error, setError] = useState("")
    const [isSent, setIsSent] = useState(false)

    const handleContact = (e) => {
        e.preventDefault()

        let pkg = {}

        try {
            const name = document.getElementById("name").value
            const email = document.getElementById("email").value
            const phone = document.getElementById("phone").value
            const comment = document.getElementById("comment").value

            let notify = ""
            if (!email) notify += " email"
            if (!name) notify += " name"
            if (!phone) notify += " phone"
            if (!comment) notify += " comment"
            if (notify) {
                setError("missing:" + notify)
                return
            } else {
                setError("")
            }
            pkg = {
                name,
                email,
                phone,
                comment
            }
        } catch (err) {
            console.log("Error occured finding name, email, or comment", err)
            return
        }

        if (isSent) return
        setIsSent(true)

        document.getElementById("name").style.opacity = 0.5
        document.getElementById("email").style.opacity = 0.5
        document.getElementById("phone").style.opacity = 0.5
        document.getElementById("comment").style.opacity = 0.5

        // return
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
            setIsSent(false)
        }).catch(console.error)
    }

    return (
        <div className="flex-col w-screen h-full items-center ">

            <div className="w-full h-full flex overflow-scroll items-start py-10 justify-center">

                <div >
                    <form className="z-[100000] max-w-2xl px-5 py-10 bg-[#ffffffdd] rounded-3xl ">
                        {
                            error
                                ? <div className="mb-6 text-sm font-light text-center text-red-500">
                                    {error}
                                </div>
                                : <div className="mb-6 flex flex-col items-center">

                                    <p className="mt-2 text-lg font-light text-center text-gray-800 ">
                                        Text/Call: <a className="cursor-pointer">
                                            (954) 902-0115
                                        </a>
                                    </p>
                                    <a href="tel:+19549020115" className="default-btn mt-2 w-min whitespace-nowrap">Call Now!</a>
                                    {
                                        !servRes
                                            ? <h1 className=" text-xl font-light text-center text-gray-800 ">
                                                Or leave us a message!
                                            </h1>
                                            : null
                                    }

                                </div>
                        }
                        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                            {!servRes
                                ? <>
                                    <div className="col-span-2 lg:col-span-1">
                                        <div className=" relative ">
                                            <input type="text" id="name" className=" shadow-xl rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <div className=" relative ">
                                            <input type="text" id="phone" className=" shadow-xl rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-2">
                                        <div className=" relative ">
                                            <input type="text" id="email" className=" shadow-xl rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <input id="comment" className=" shadow-xl flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="Message Here" name="comment" >
                                        </input>

                                    </div>
                                </>
                                : <>
                                    <p className="col-span-2 text-xl font-bold text-green-500">{servRes}</p>
                                    <p className="col-span-2 text-center text-md">We'll get back to you shortly!</p>
                                    <br />
                                    <br />
                                    <p className="col-span-2 text-center text-md">or reach us directly at</p>
                                    <p className="col-span-2 text-center text-md font-bold">daniel@devcon1solutions.com</p>
                                </>
                            }
                            <div className="col-span-2 text-right">
                                {
                                    !servRes && !isSent
                                        ? <button onClick={(e) => {
                                            try {

                                                handleContact(e)
                                            } catch (err) {
                                                console.error("Submissiong ERROR:", err)
                                            }
                                        }} className="active:shadow-xl py-2 px-4 shadow-xl bg-red-600 active:bg-indigo-700 active:ring-indigo-500 active:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md active:outline-none active:ring-2 active:ring-offset-2  rounded-lg ">
                                            Send
                                        </button>

                                        : !servRes
                                            ? <div className="w-full flex justify-center">
                                                <SpinnerSVG w={50} h={50} color={"black"} />
                                            </div>
                                            : null
                                }
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}


