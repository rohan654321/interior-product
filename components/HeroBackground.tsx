"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
    return (
        <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
        >
            <Image
                src="https://images.openai.com/static-rsc-4/4WdOGgwqwoyAsvhj8K4jYZwi9PYtqnam9aeUh96_dTtaaLJRe_Nr72N3vXLsSY8uQmuXGZCDSvCtlBC5AmgGDEKK5xfc_UZWifkG6IIhlZd76JyiQvwva7MTuWg5eW-5xJ4wX_BB1uFRCu34YfglQXeEuO5cv09ioAV2rdcnDjI?purpose=inline"
                alt="Hero"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
        </motion.div>
    );
}