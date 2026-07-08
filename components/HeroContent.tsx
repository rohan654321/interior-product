"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
    return (
        <div className="relative z-20 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .3 }}
                    className="uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm text-white/80 mb-4 sm:mb-6"
                >
                    PREMIUM CRAFT • BESPOKE
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5 }}
                    className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-3xl"
                >
                    Mastering the Art of
                    <br />
                    Interior Fit-Out
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .8 }}
                    className="mt-5 sm:mt-8 max-w-xl text-sm sm:text-base text-white/80 leading-7 sm:leading-8"
                >
                    Premium interior craftsmanship that blends timeless elegance,
                    innovation, and precision into every space.
                </motion.p>

                <HeroButtons />
            </div>
        </div>
    );
}