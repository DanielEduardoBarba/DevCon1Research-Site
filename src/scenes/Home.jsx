import Chat from "../components/Chat";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <>
          
            <div class="relative z-20 flex items-center">
                <div class="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
                    <div class="flex flex-col">

                        <p class="my-6 text-3xl text-center dark:text-white">
                            Your ideas are almost ready!
                        </p>
                        <h2 class="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                            Software, IT, and Embedded Solutions
                        </h2>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div class="flex items-center justify-center mt-4">
                            <a href="#" class="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                                CONNECT WITH US
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <Chat />
            <Footer/>

        </>
    )
}


