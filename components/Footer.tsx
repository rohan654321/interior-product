"use client";

import Link from "next/link";
import {

    ArrowUpRight,
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#404472] text-white">

            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-4 gap-14">

                    {/* Logo */}

                    <div>

                        <h2 className="font-serif text-4xl mb-6">
                            ESPI
                        </h2>

                        <p className="text-white/60 leading-8">
                            Redefining luxury interiors through
                            craftsmanship, innovation and timeless
                            architectural excellence.
                        </p>

                        <div className="flex gap-5 mt-10">

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                        </div>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="uppercase tracking-[4px] text-sm mb-8">
                            Services
                        </h3>

                        <ul className="space-y-4 text-white/60">

                            <li><Link href="#">Turnkey Fit-Out</Link></li>

                            <li><Link href="#">Custom Joinery</Link></li>

                            <li><Link href="#">Renovation</Link></li>

                            <li><Link href="#">Commercial Interiors</Link></li>

                        </ul>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="uppercase tracking-[4px] text-sm mb-8">
                            Company
                        </h3>

                        <ul className="space-y-4 text-white/60">

                            <li><Link href="#">About</Link></li>

                            <li><Link href="#">Projects</Link></li>

                            <li><Link href="#">Contact</Link></li>

                            <li><Link href="#">Careers</Link></li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="uppercase tracking-[4px] text-sm mb-8">
                            Contact
                        </h3>

                        <p className="text-white/60 leading-8">
                            Al Quoz Industrial Area
                            <br />
                            Dubai, UAE
                        </p>

                        <p className="mt-6 text-white/60">
                            info@espi.ae
                        </p>

                        <p className="mt-2 text-white/60">
                            +971 4 000 0000
                        </p>

                        <button className="mt-8 flex items-center gap-3 uppercase tracking-[3px] text-sm">

                            View Location

                            <ArrowUpRight size={16} />

                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between text-white/40 text-sm">

                    <p>
                        © 2026 ESPI. All Rights Reserved.
                    </p>

                    <div className="flex gap-8 mt-5 md:mt-0">

                        <Link href="#">
                            Privacy Policy
                        </Link>

                        <Link href="#">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}