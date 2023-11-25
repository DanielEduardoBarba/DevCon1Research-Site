

export default function Header() {

    return (
        <>
            <header class=" z-30 flex items-center w-full h-24 sm:h-32">
                <div class="container flex items-center justify-end px-6 mx-auto">
               
                    <div class="flex items-center z-10">
                        <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            <a href="#" class="flex px-6 py-2 hover:text-black">
                                Works
                            </a>
                            <a href="#" class="flex px-6 py-2 hover:text-black">
                                Resume
                            </a>
                            <a href="#" class="flex px-6 py-2 hover:text-black">
                                Services
                            </a>
                            <a href="#" class="flex px-6 py-2 hover:text-black">
                                Contact
                            </a>
                        </nav>
                        <button class="flex flex-col ml-4 lg:hidden">
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}