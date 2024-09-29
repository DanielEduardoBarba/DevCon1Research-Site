
export default function Home({setScene}) {

    return (
            <div className="flex flex-col items-center justify-between h-[200vh] border-6 border-green-400">
                <div className="flex w-screen flex-col">
                    <h2 className="my-6 text-3xl text-center ">
                        Your ideas are almost ready!
                    </h2>
                    <p className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl ">
                        Software, IT, and Embedded Solutions
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <a onClick={()=>setScene(2)}  className="px-4 py-2 my-2 text-gray-800 uppercase bg-white opacity-[0.7] rounded-xl border-2 border-gray-800 md:mt-16   hover:darkbg-gray-100  hover:bg-gray-800 hover:text-white text-md">
                            CONNECT WITH US
                        </a>
                    </div>
                </div>
            </div>
    )
}


