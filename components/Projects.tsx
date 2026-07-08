"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "The Obsidian Penthouse",
        category: "Residential • Downtown Dubai",
        image: "https://images.openai.com/static-rsc-4/IGdXsW7iyR1mUztci37Q58lldAprEavVTSwue-8ALZTOkrmYMNTNiOpIXBc_o96lUvctX0Q4iKsvjETbZ95Ly2e3VNjJvEyUNBSVpTooBuf0tWEi6fZmZjbApqbZrFxOMeIaU6_8wuBQTLwaj5ec86C1rK6OpE8Xw4wjPivYf8Y?purpose=inline",
        large: true,
    },
    {
        title: "Aura Fine Dining",
        category: "Hospitality • Jumeirah",
        image: "https://images.openai.com/static-rsc-4/lcvUglQQCp7zDJ11q9K-Y-dZNrwTAS0N1EJB5Bt7dA_TjSGAV6yyli8gnT2perDqep0cuqtvzLqTZ94YLREcUpNZClZEUHtv7ZnvrflK-zUHZVP0QN5jDPUOslkCY_7fXO69y9GrI75q9WC76Scw6GvrEiD0qZxVI9eWlI7DBzEqZ6u2lhpf3khs8sDaXsyM?purpose=fullsize",
    },
    {
        title: "L'Eclat Boutique",
        category: "Retail • Dubai Mall",
        image: "https://images.openai.com/static-rsc-4/pRTWZT_04Z4IOyoRgiNr6CvnYowy4QBSZkm8Fl170AdlODaeSLADr2VwfxIzzGedY8H-4PNUFp5c4NR8eCBvHFfmfIvjcONsmZEQtcQkTiIfXTJCLoDuvSm2y_LQazRXarF9M_GhgJnB93piCA7Qw9wMbAtmY5KzCsYlg18sTPBeR2J11Pe0C2_2ymCRkKwP?purpose=fullsize",
    },
];

export default function Projects() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="flex justify-between items-end mb-20"
                >
                    <div>
                        <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-4">
                            Portfolio
                        </p>

                        <h2 className="text-5xl md:text-6xl text-black font-serif">
                            Featured Projects
                        </h2>
                    </div>

                    <button className="hidden text-black md:block uppercase tracking-[4px] text-sm border-b border-black">
                        View All
                    </button>
                </motion.div>

                {/* Layout */}

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Large */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 group relative h-[650px] overflow-hidden"
                    >
                        <Image
                            src={projects[0].image}
                            alt=""
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                        <div className="absolute bottom-8 left-8 right-8">

                            <span className="text-white/70 uppercase tracking-[4px] text-xs">
                                {projects[0].category}
                            </span>

                            <div className="flex justify-between items-center mt-3">

                                <h3 className="text-white text-4xl font-serif">
                                    {projects[0].title}
                                </h3>

                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                                    <ArrowUpRight className="text-black" />
                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <div className="space-y-8">

                        {projects.slice(1).map((project, index) => (

                            <motion.div
                                key={project.title}
                                initial={{
                                    opacity: 0,
                                    x: 70,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    delay: index * .2,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="group relative h-[310px] overflow-hidden"
                            >

                                <Image
                                    src={project.image}
                                    alt=""
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <span className="uppercase tracking-[4px] text-white/70 text-xs">
                                        {project.category}
                                    </span>

                                    <div className="flex justify-between items-center mt-2">

                                        <h3 className="text-white text-2xl font-serif">
                                            {project.title}
                                        </h3>

                                        <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                                            <ArrowUpRight size={18} className="text-black" />
                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}