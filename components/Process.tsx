"use client";

import { motion } from "framer-motion";

const process = [
    {
        number: "01",
        title: "Consultation",
        description:
            "Initial briefing and space analysis to understand your vision and project requirements.",
    },
    {
        number: "02",
        title: "Design Development",
        description:
            "Detailed layouts, 3D renders, material selection and technical drawings.",
    },
    {
        number: "03",
        title: "Fabrication",
        description:
            "Custom joinery and bespoke furniture manufactured with premium craftsmanship.",
    },
    {
        number: "04",
        title: "Execution",
        description:
            "On-site construction, supervision and quality control throughout the project.",
    },
    {
        number: "05",
        title: "Handover",
        description:
            "Final inspection, finishing touches and seamless delivery of your completed space.",
    },
];

export default function Process() {
    return (
        <section className="bg-[#111111] text-white py-32 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="text-center mb-24"
                >
                    <p className="uppercase tracking-[6px] text-white/50 text-sm mb-5">
                        THE JOURNEY
                    </p>

                    <h2 className="text-5xl md:text-6xl font-serif">
                        Our Process
                    </h2>
                </motion.div>

                {/* Timeline */}

                <div className="relative">

                    {/* Line */}

                    <div className="hidden lg:block absolute left-0 right-0 top-5 h-[1px] bg-white/20"></div>

                    <div className="grid lg:grid-cols-5 gap-16 relative">

                        {process.map((step, index) => (

                            <motion.div
                                key={step.number}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: index * .15,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="text-center relative"
                            >

                                {/* Circle */}

                                <div className="hidden lg:flex w-4 h-4 bg-white rounded-full mx-auto mb-10 relative z-10"></div>

                                <span className="block text-white/40 tracking-[4px] text-sm mb-5">
                                    {step.number}
                                </span>

                                <h3 className="text-2xl font-serif mb-5">
                                    {step.title}
                                </h3>

                                <p className="text-white/60 leading-7">
                                    {step.description}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}