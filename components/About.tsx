"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                >
                    <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
                        OUR PHILOSOPHY
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-serif leading-tight mb-6 sm:mb-8">
                        Elevating Spaces
                        <br />
                        through Precision &
                        <br />
                        Craft.
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-8 sm:mb-10">
                        Based in Dubai, ESPI creates premium interiors with a perfect
                        balance of architecture, craftsmanship and innovation. Every
                        project is executed with meticulous attention to detail from
                        concept to completion.
                    </p>

                    <div className="grid grid-cols-2 gap-6 sm:gap-10">
                        <div>
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-black font-serif">15+</h3>
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs mt-2 text-gray-500">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-black font-serif">250+</h3>
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs mt-2 text-gray-500">
                                Luxury Projects
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[650px] overflow-hidden"
                >
                    <Image
                        src="https://images.openai.com/static-rsc-4/tpoVpv_dDTZgU2y598DAopc0C4WYVD6c2TUKfiNcYbPjw0DzVaWBWTvAOp_Dt41WA8WqfRCzNZ9eE7ZaPGtg5qE0M_coiMHfmbxUxrNRKr0B6O5K25erVwl4yZvGbZR52FNVA_wAmsTjbf70MCv1HprpJfwibPFwcgp9Ofmds8jEqQqWxNcNteiBSxKAF8bH?purpose=fullsize"
                        alt="About"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 duration-700"
                    />
                </motion.div>

            </div>
        </section>
    );
}