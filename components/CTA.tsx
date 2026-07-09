"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#191C40] py-32 text-white">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_40%)]" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                >

                    <span className="uppercase tracking-[6px] text-white/50 text-sm">
                        LET'S BUILD TOGETHER
                    </span>

                    <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-6">
                        Let's Build Something
                        <br />
                        Exceptional
                    </h2>

                    <p className="mt-8 max-w-2xl mx-auto text-white/70 text-lg leading-8">
                        From luxury residences to commercial developments,
                        ESPI delivers premium interiors that redefine spaces
                        with precision and craftsmanship.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-14">

                        <button className="bg-white text-black px-10 py-5 uppercase tracking-[3px] text-sm font-medium hover:bg-gray-200 transition">
                            Request a Quote
                        </button>

                        <button className="border border-white px-10 py-5 uppercase tracking-[3px] text-sm hover:bg-white hover:text-black transition flex items-center justify-center gap-3">
                            Download Brochure
                            <ArrowRight size={18} />
                        </button>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}