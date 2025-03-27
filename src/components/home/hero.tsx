import { Link } from "react-router";
import HeroBG from "./heroBg";
import { SiShopify } from "react-icons/si";

export default function Hero() {
    return (
        <div className=" min-h-screen m-4 rounded-4xl bg-[#FFE2E2] overflow-hidden relative">

            <div className=" w-full mt-[25vh] z-10 flex flex-col justify-center items-center text-center">
                <div className=" bg-white w-fit flex items-center justify-center p-2 py-1 font-bold text-sm rounded-full">
                    <span className=" py-1 px-4 bg-[#FC6351] text-white rounded-full">31%</span>
                    <span className=" px-8">
                        Increased ADV Value
                    </span>

                </div>
                <h1 className=" mt-4  text-4xl md:text-6xl text-balance md:leading-14">
                    Reduce Support Tickets,
                    Allow Coustomers to edit their orders
                </h1>
                <p className=" mt-8 text-base md:text-xl text-balance text-black/60 lg:w-[50vw]">
                    Let customers Edit Orders Themselves: Save your customers time and yourself from support email headaches
                </p>
                <div className=" mt-8 flex items-center justify-between gap-8">
                    <Link to="/" className="p-4 py-2 bg-white text-[#FC6351] rounded-md shadow-md shadow-[#FF0E0E] flex gap-2 items-center justify-center hover:opacity-90">
                        Get Demo
                    </Link>
                    <Link to="/" className="p-4 py-2 bg-[#FC6351] text-white rounded-md shadow-md shadow-[#FF0E0E] flex gap-2 items-center justify-center hover:opacity-90">
                        <SiShopify className=" w-4 h-4" />
                        <span>Install Customizer</span>
                    </Link>
                </div>
                <div className=" w-full h-full py-4 px-4 md:px-16 mt-16">
                    <img src="/images/nodes.png" className=" w-full h-full object-cover" />
                </div>
            </div>
            <div className=" absolute w-full h-full top-0 left-0 -z-10">
                <HeroBG />
            </div>
        </div>
    )
}
