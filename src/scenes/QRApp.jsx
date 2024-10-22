import { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import html2canvas from "html2canvas"
import DownloadSVG from "../assets/DownloadSVG"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import SpinnerSVG from "../assets/SpinnerSVG"


export default function QRApp() {
    const [text, setText] = useState("")
    const [qr, setQr] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (qr) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }, [qr])

    const snapShotQR = async () => {
        const div = document.getElementById('qrdiv')
        const canvas = await html2canvas(div)
        const imgData = canvas.toDataURL('image/png')

        const link = document.createElement('a')
        link.href = imgData
        link.download = 'myQRcode.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="h-full w-screen pt-[50px] lg:pt-[60px] flex flex-row justify-center items-start  overflow-scroll ">
            <div className="w-full flex justify-center py-8 ">
                <div className="max-w-sm w-full h-min bg-white flex flex-col justify-between rounded-2xl p-8 border-2">
                    <div className="w-full flex flex-col justify-center p-4 ">
                        {
                            qr
                                ? isLoading
                                    ? <SpinnerSVG w={"100%"} h={50} color={"black"} />
                                    : <>
                                        <div id="qrdiv" className="bg-transparent border-2 lg:border-4 p-4 lg:p-4 border-black rounded-xl">
                                            <div style={{
                                                height: "auto",
                                                maxWidth: 400,
                                                width: "100%",
                                            }} >
                                                <QRCode size={256} value={qr}
                                                    style={{
                                                        height: "auto",
                                                        maxWidth: "100%",
                                                        width: "100%",
                                                    }} viewBox={`0 0 256 256`} />
                                            </div>
                                        </div>
                                        <button onClick={snapShotQR}
                                            style={{
                                                backgroundColor: "#55cc55"
                                            }} className="default-btn w-min flex flex-row items-center justify-between">
                                            <DownloadSVG w={30} h={30} color={"black"} />
                                            <p className="whitespace-nowrap pl-2 color-white text-md">
                                                QR
                                            </p>
                                        </button>
                                    </>
                                : <p className="color-black text-center">
                                    Start typing to generate your QR code!
                                </p>
                        }
                    </div>

                    <div className="flex flex-col">
                        <input type="text" id="qrtext"
                            onChange={(e) => { setText(e.target.value) }}
                            placeholder="Enter url, text, etc..."
                            className="border-2 border-black rounded-lg p-2" />
                        <button onClick={(e) => {
                            setQr(text)
                        }} disabled={!text} style={{
                            backgroundColor: text == qr
                                ? "#ccc"
                                : text
                                    ? "#55cc55"
                                    : "gray",
                            opacity: text ? 1 : 0.2
                        }} className="default-btn bg-black ">
                            {
                                isLoading
                                    ? "..."
                                    : text == qr && text
                                        ? "Ready!"
                                        : "Generate"
                            }

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


