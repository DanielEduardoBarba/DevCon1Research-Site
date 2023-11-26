
export default function Home({setScene}) {

    return (

        <>

            <div className="border-2 border-green-500 flex flex-col items-center justify-between ">
                <div className="flex w-screen flex-col">
                    <h2 className="my-6 text-3xl text-center dark:text-white">
                        Your ideas are almost ready!
                    </h2>
                    <p className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                        Software, IT, and Embedded Solutions
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="flex items-center justify-center mt-4">
                        <a onClick={()=>setScene(2)}  className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                            CONNECT WITH US
                        </a>
                    </div>

                </div>
            </div>


        </>



    )
}


