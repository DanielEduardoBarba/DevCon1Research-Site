import devCon1 from "../assets/devcon1-logo.png"

export default function Logo(){

    return(
        <>

        <img src={devCon1} className="absolute z-0 bg-black top-0 left-0 rounded-[5px] lg:rounded-[10px] w-1/2 sm:w-1/4 m-2 md:m-6" />
        </>
    )
}