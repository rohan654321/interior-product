"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
    title: string;
    description: string;
    image: string;
}

export default function ServiceCard({
    title,
    description,
    image,
}: Props) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative h-[560px] overflow-hidden border border-gray-200 bg-black cursor-pointer"
        >
            {/* Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-all duration-700 group-hover:from-black group-hover:via-black/70" />

            {/* Gold Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#c8a96a]/30 opacity-0 transition-all duration-700 group-hover:opacity-100" />

            {/* Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#d4af37] transition-all duration-500" />

            {/* Content */}
            <motion.div
                variants={{
                    rest: {
                        y: 45,
                    },
                    hover: {
                        y: 0,
                    },
                }}
                transition={{
                    duration: 0.45,
                }}
                className="absolute bottom-0 left-0 w-full p-10 z-20"
            >
                <span className="uppercase tracking-[4px] text-xs text-white/60">
                    Luxury Interior
                </span>

                <h3 className="text-white text-3xl font-serif mt-3 mb-5">
                    {title}
                </h3>

                <motion.p
                    variants={{
                        rest: {
                            opacity: 0,
                            y: 20,
                        },
                        hover: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{
                        duration: 0.35,
                        delay: 0.1,
                    }}
                    className="text-white/80 leading-7"
                >
                    {description}
                </motion.p>

                {/* Arrow (No Circle) */}
                <motion.div
                    variants={{
                        rest: {
                            opacity: 0,
                            x: -20,
                        },
                        hover: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    transition={{
                        duration: 0.35,
                        delay: 0.2,
                    }}
                    className="mt-8 flex items-center"
                >
                    <ArrowRight
                        size={24}
                        className="text-white transition-transform duration-300 group-hover:translate-x-2"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}