
export default function HeroBG() {
    return (
        <div className="w-full h-full relative blur-2xl bg-[#FFE2E2]">
            <div className=" absolute -bottom-5 left-4 w-[50vw] -rotate-12">
                <img src="/images/Vector1.svg" className=" w-full h-full object-cover" />
            </div>
            <div className=" absolute -top-16 -right-16 w-[50vw] rotate-45">
                <img src="/images/Vector1.svg" className=" w-full h-full object-cover" />
            </div>
        </div>
    )
}
