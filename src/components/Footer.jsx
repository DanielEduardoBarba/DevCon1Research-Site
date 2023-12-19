

export default function Footer() {

    return (
        <>
            <div className="absolute w-full flex bottom-0 right-0 m-2 items-center justify-between dark:text-white">
                <p className=" text-xs font-black"></p>
                <a href="mailto:daniel@devcon1solutions.com"><p className="hidden lg:block text-xs font-black">DANIEL@DEVCON1SOLUTIONS.COM</p></a>
                <p className=" text-xs font-black"><p className="hidden md:block">DevCon1 Solutions LLC, All Rights Reserved</p>Copyright @{new Date().getFullYear()}</p>
            </div>
            
           
        </>
    )
}