"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-5 mt-12"
        >
            <button
                className="
        bg-white
        text-black
        px-8
        py-4
        uppercase
        tracking-widest
        text-sm
        hover:bg-black
        hover:text-white
        transition-all
        duration-300"
            >
                Start Project
            </button>

            <button
                className="
        border
        border-white
        text-white
        px-8
        py-4
        uppercase
        tracking-widest
        text-sm
        hover:bg-white
        hover:text-black
        transition-all"
            >
                Download Portfolio
            </button>
        </motion.div>
    );
}