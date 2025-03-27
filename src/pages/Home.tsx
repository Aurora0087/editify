import Benefits from "@/components/home/Benefits";
import Brands from "@/components/home/Brands";
import Hero from "@/components/home/hero";

export default function Home() {
    return (
        <div className=" w-full min-h-screen overflow-x-hidden">
            <Hero />
            <Brands />
            <Benefits />
        </div>
    )
}
