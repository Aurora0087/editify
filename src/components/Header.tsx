import { useEffect, useRef } from "react";
import { SiShopify } from "react-icons/si";
import { Link } from "react-router";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Header() {

    const headerRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: document.body,
                start: "top top",
                onUpdate: (self) => {
                    if (self.direction === 1 && window.scrollY > 100) {
                        // Scrolling down
                        gsap.to(headerRef.current, {
                            y: "-50vh",
                            scale: 0,
                            duration: 0.5,
                            ease: "power2.out",
                        });
                    } else if (self.direction === -1) {
                        // Scrolling up
                        gsap.to(headerRef.current, {
                            y: "0vh",
                            scale: 1,
                            duration: 0.5,
                            ease: "power2.out",
                        });
                    }
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={headerRef} className=" fixed top-8 w-full h-16 z-50 grid place-content-center">
            <div className=" hidden rounded-2xl bg-white shadow-lg shadow-[#FC6351] p-4 md:flex items-center justify-between gap-4 lg:w-[60vw] text-center text-nowrap mx-4">
                <div className=""><Link className="hover:text-[#FC6351]" to='/'>LOGO</Link></div>
                <div className=" flex items-center justify-center gap-4 font-bold">
                    <Link className="hover:text-[#FC6351]" to='/'>Home</Link>
                    <Link className="hover:text-[#FC6351]" to='/how_it_work'>How it Works</Link>
                    <Link className="hover:text-[#FC6351]" to='/esources'>Resources</Link>
                    <Link to="/" className="p-4 py-2 ml-4 bg-[#FC6351] text-white rounded-md shadow-md shadow-[#FF0E0E] flex gap-2 items-center justify-center hover:opacity-90">
                        <SiShopify className=" w-4 h-4" />
                        <span>Install Customizer</span>
                    </Link>
                </div>
            </div>
            <div className=" md:hidden">
                {/* mobile nav */}
            </div>
        </div>
    )
}
