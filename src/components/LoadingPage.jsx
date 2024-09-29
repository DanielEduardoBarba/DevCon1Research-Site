import SpinnerSVG from "../assets/SpinnerSVG";








export default function LoadingPage() {

    return (
        <div className="absolute z-[10000000] w-screen h-full bg-black flex flex-row items-center justify-center">
            <SpinnerSVG w={100} h={100} color={"white"} />
        </div>
    )
}