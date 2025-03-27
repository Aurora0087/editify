import { SiShopify } from "react-icons/si";
import { Link } from "react-router";

const points = [
    {
        title: 'Lower Support Tickets',
        desc: 'Let customers edit orders themselves. reducing your support workload and faster response times.',
        imgUrl: '/images/benefit1.png'
    },
    {
        title: 'Less Cart Abandonment',
        desc: 'Improve customer experience by letting them fix order mistalces, reducing canllations, and keeping sales on track.',
        imgUrl: '/images/benefit2.png'
    },
    {
        title: 'Add products to an Order',
        desc: 'Easily modify existing orders by adding new products, maximizing sales opportunities and enhancing order flexiblity.',
        imgUrl: '/images/benefit3.png'
    },
]

export default function Benefits() {
    return (
        <div className=' w-full p-8 mt-[15vh]'>
            <div className=' px-2 pt-1 shadow shadow-[#FC6351] rounded w-fit text-sm'>Benefits</div>
            <div className=" flex flex-col md:flex-row gap-8 md:items-center justify-between w-full mt-16">
                <div className="">
                    <h1 className=" text-4xl md:text-6xl leading-8 md:leading-12">Boost Sales and Simplify</h1>
                    <h1 className="text-[#FC6351] text-4xl md:text-6xl leading-8 md:leading-12">Order Managment</h1>
                </div>
                <Link to="/" className="p-4 py-2 bg-[#FC6351] text-white rounded-md shadow-md shadow-[#FF0E0E] flex gap-2 items-center justify-center hover:opacity-90 w-fit">
                    <SiShopify className=" w-4 h-4" />
                    <span>Install Customizer</span>
                </Link>
            </div>
            <div className="mt-16 flex flex-col md:grid  md:grid-cols-3 gap-8">
                <div className="bg-[#FFE2E2] rounded-2xl w-full h-fit md:h-full flex flex-col justify-end">
                    <div className=" py-16 grid place-content-center w-full h-full">
                        <img src='/images/benefit1.png' className=" w-fit h-full object-cover" />
                    </div>
                    <div className=" p-8">
                        <h4 className=" text-4xl">Lower Support Tickets</h4>
                        <p className=" text-black/60">Let customers edit orders themselves. reducing your support workload and faster response times.</p>
                    </div>
                </div>
                <div className="bg-[#FFE2E2] rounded-2xl w-full h-full relative">
                    <div className=" p-8 absolute bottom-0 left-0">
                        <h4 className=" text-4xl">Less Cart Abandonment</h4>
                        <p className=" text-black/60">Improve customer experience by letting them fix order mistalces, reducing canllations, and keeping sales on track.</p>
                    </div>
                    <div className=" w-full h-full">
                        <img src='/images/benefit2.png' className=" w-full h-full object-cover" />
                    </div>
                </div>
                <div className="bg-[#FFE2E2] rounded-2xl w-full h-fit md:h-full p-8  flex flex-col justify-end">
                    <div className=" py-16 grid place-content-center w-full h-full">
                        <img src='/images/benefit3.png' className=" w-fit h-full object-cover" />
                    </div>
                    <div>
                        <h4 className=" text-4xl">Add products to an Order</h4>
                        <p className=" text-black/60">Easily modify existing orders by adding new products, maximizing sales opportunities and enhancing order flexiblity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
