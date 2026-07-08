"use client";

import { motion } from "framer-motion";
import {
    Building2,
    BadgeCheck,
    Users,
    Clock3,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Technical Precision",
        description:
            "We utilize advanced planning and architectural detailing to deliver flawless execution.",
    },
    {
        icon: BadgeCheck,
        title: "Premium Sourcing",
        description:
            "We work with the finest suppliers and premium materials to create timeless interiors.",
    },
    {
        icon: Users,
        title: "Master Craftsmen",
        description:
            "Our skilled artisans bring decades of experience and unmatched craftsmanship.",
    },
    {
        icon: Clock3,
        title: "On-Time Delivery",
        description:
            "Every project follows strict timelines while maintaining exceptional quality.",
    },
];

export default function WhyChoose() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="grid lg:grid-cols-2 gap-16 items-end mb-20"
                >
                    <div>
                        <p className="uppercase tracking-[5px] text-sm text-gray-500 mb-4">
                            THE ESPI STANDARD
                        </p>

                        <h2 className="text-5xl md:text-6xl text-black font-serif leading-tight">
                            Uncompromising Quality
                            <br />
                            in Every Millimeter
                        </h2>
                    </div>

                    <p className="text-gray-600 leading-8">
                        Our reputation is built on technical expertise,
                        architectural precision and a passion for creating
                        exceptional luxury interiors.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * .15,
                                    duration: .7,
                                }}
                                className="
                border
                border-gray-200
                p-10
                hover:border-black
                text-black
                transition-all
                duration-300
                group"
                            >
                                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition">
                                    <Icon size={30} />
                                </div>

                                <h3 className="text-2xl text-black font-serif mb-5">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}