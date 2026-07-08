"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-white shadow-md py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

                <Link
                    href="/"
                    className={`text-3xl font-serif tracking-wide ${scrolled ? "text-black" : "text-white"
                        }`}
                >
                    <Image
                        src="/logo.svg"
                        alt="ESPI Logo"
                        width={150}
                        height={50}
                    />
                </Link>

                {/* Desktop */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">

                            <Link
                                href={item.href}
                                className={`flex items-center gap-1 uppercase tracking-[3px] text-xs transition ${scrolled
                                        ? "text-black"
                                        : "text-white"
                                    }`}
                            >
                                {item.label}

                                {item.dropdown && (
                                    <ChevronDown size={15} />
                                )}
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
                  min-w-[250px]"
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

                {/* Button */}
                <Link
                    href="/contact"
                    className={`hidden lg:flex px-6 py-3 border uppercase tracking-[3px] text-xs transition ${scrolled
                            ? "border-black text-black hover:bg-black hover:text-white"
                            : "border-white text-white hover:bg-white hover:text-black"
                        }`}
                >
                    Get In Touch
                </Link>

                {/* Mobile */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden"
                >
                    {mobileOpen ? (
                        <X
                            className={scrolled ? "text-black" : "text-white"}
                        />
                    ) : (
                        <Menu
                            className={scrolled ? "text-black" : "text-white"}
                        />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}

            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-[600px]" : "max-h-0"
                    } bg-white`}
            >
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="block px-6 py-4 border-b"
                    >
                        {item.label}
                    </a>
                ))}

                <div className="p-6">
                    <button className="w-full border py-3 uppercase">
                        Get In Touch
                    </button>
                </div>
            </div>
        </header>
    );
}