import devCon1 from "../assets/devcon1-logo.png"

export default function Logo({ w, h }) {
    return (

        <img src={devCon1}
            style={{
                width: w ? w : "",
                height: h ? h : ""
            }} className="z-0 bg-black rounded-[5px] lg:rounded-[10px]" />

    )
}