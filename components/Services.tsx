"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/servicesData";

export default function Services() {
    return (
        <section className="py-28 bg-[#f7f7f7]">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-5">
                        CAPABILITIES
                    </p>

                    <h2 className="text-5xl text-black font-serif">
                        Comprehensive Fit-Out Solutions
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{
                                opacity: 0,
                                y: 70,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: .8,
                                delay: index * .2,
                            }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}