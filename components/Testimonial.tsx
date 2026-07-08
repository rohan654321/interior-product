"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-5xl mx-auto px-6 text-center">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                >

                    <Quote
                        className="mx-auto text-gray-300 mb-10"
                        size={70}
                    />

                    <p className="text-4xl md:text-5xl font-serif text-black leading-relaxed italic">

                        ESPI transformed our vision into reality with
                        exceptional craftsmanship and flawless execution.
                        Every detail exceeded our expectations.

                    </p>

                    <div className="mt-14">

                        <h4 className="uppercase tracking-[4px] text-gray-800 text-lg">
                            Michael Anderson
                        </h4>

                        <p className="text-gray-500 mt-2">
                            CEO • Vantage Holdings
                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}