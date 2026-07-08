"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">

            <span className="text-white tracking-[6px] text-xs uppercase">
                Scroll
            </span>

            <div className="w-px h-16 bg-white/30 mt-4 overflow-hidden">

                <motion.div
                    animate={{
                        y: [0, 40, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.6,
                    }}
                    className="w-full h-6 bg-white"
                />

            </div>

        </div>
    );
}