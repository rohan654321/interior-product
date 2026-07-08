"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { header } from "framer-motion/client";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "#",
        dropdown: [
            "Turnkey Interior Fit-Out",
            "Custom Joinery",
            "Renovation",
            "Solid Surface",
            "Steel Fabrication",
        ],
    },
    {
        label: "Projects",
        href: "#",
        dropdown: [
            "Residential",
            "Commercial",
            "Hospitality",
            "Healthcare",
        ],
    },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    // Close mobile menu on route change / link click
    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || mobileOpen
                    ? "bg-white shadow-md py-3 sm:py-4"
                    : "bg-transparent py-4 sm:py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

                <Link
                    href="/"
                    onClick={closeMobile}
                    className="shrink-0"
                >
                    <Image
                        src="/logo.svg"
                        alt="ESPI Logo"
                        width={150}
                        height={50}
                        className="w-[110px] h-auto sm:w-[130px] lg:w-[150px]"
                        priority
                    />
                </Link>

                {/* Desktop */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">

                            <Link
                                href={item.href}
                                className={`flex items-center gap-1 uppercase tracking-[2px] xl:tracking-[3px] text-xs whitespace-nowrap transition ${scrolled ? "text-black" : "text-white"
                                    }`}
                            >
                                {item.label}
                                {item.dropdown && <ChevronDown size={15} />}
                            </Link>

                            {item.dropdown && (
                                <div
                                    className="absolute top-10 left-0
                                    invisible opacity-0
                                    group-hover:visible
                                    group-hover:opacity-100
                                    transition-all
                                    duration-300
                                    text-black
                                    bg-white
                                    shadow-xl
                                    min-w-[220px] xl:min-w-[250px]
                                    max-w-[90vw]"
                                >
                                    {item.dropdown.map((d) => (
                                        <a
                                            key={d}
                                            href="#"
                                            className="block px-6 py-4 hover:bg-gray-100 text-sm"
                                        >
                                            {d}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
        </nav>

                {/* Button */ }
    <Link
        href="/contact"
        className={`hidden lg:flex px-5 xl:px-6 py-3 border uppercase tracking-[2px] xl:tracking-[3px] text-xs transition whitespace-nowrap ${scrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
    >
        Get In Touch
    </Link>

    {/* Mobile toggle */ }
    <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden p-1"
        aria-label="Toggle menu"
    >
        {mobileOpen ? (
            <X className="text-black" />
        ) : (
            <Menu className={scrolled ? "text-black" : "text-white"} />
        )}
    </button>
            </div >

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-y-auto transition-all duration-500 bg-white ${
                    mobileOpen ? "max-h-[calc(100vh-64px)]" : "max-h-0"
                }`}
            >
                {navItems.map((item) => (
                    <div key={item.label} className="border-b">
                        {item.dropdown ? (
                            <>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(
                                            openDropdown === item.label ? null : item.label
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left uppercase tracking-[2px] text-xs sm:text-sm text-black"
                                >
                                    {item.label}
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${
                                            openDropdown === item.label ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 bg-gray-50 ${
                                        openDropdown === item.label ? "max-h-[400px]" : "max-h-0"
                                    }`}
                                >
                                    {item.dropdown.map((d) => (
                                        <a
                                            key={d}
                                            href="#"
                                            onClick={closeMobile}
                                            className="block px-8 sm:px-10 py-3 text-sm text-gray-700"
                                        >
                                            {d}
                                        </a>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <Link
                                href={item.href}
                                onClick={closeMobile}
                                className="block px-5 sm:px-6 py-4 uppercase tracking-[2px] text-xs sm:text-sm text-black"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}

                <div className="p-5 sm:p-6">
                    <Link
                        href="/contact"
                        onClick={closeMobile}
                        className="block w-full text-center border border-black py-3 uppercase tracking-[2px] text-xs text-black"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </header >
    );
}