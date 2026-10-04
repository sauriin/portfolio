"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experience = {
    role: "Data Operation Analyst",
    roleAccent: "Analyst",
    company: "NIQ (NielsenIQ)",
    period: "2026 – Present",
    logo: "/niq-logo.png",
    image: "/niq-office.png",
    description:
        "Working on data operations for global consumer and retail measurement — ensuring data accuracy, quality and timely delivery while supporting analytics and reporting workflows across teams.",
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28"
        >

            {/* Ambient Glow */}

            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 sm:mb-16 lg:mb-20 text-center"
                >

                    <p className="text-xs uppercase tracking-[4px] text-zinc-500">
                        Experience
                    </p>

                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold">
                        Professional{" "}
                        <span className="text-violet-500">
                            Journey
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400">
                        Where I apply my skills in data and development to
                        real-world business problems.
                    </p>

                </motion.div>

                {/* Feature Layout */}

                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

                    {/* Photo Panel */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="lg:col-span-5"
                    >

                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-zinc-800
                                shadow-[0_0_60px_rgba(139,92,246,.15)]
                                transition-all
                                duration-300
                                hover:border-violet-500
                            "
                        >

                            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">

                                <Image
                                    src={experience.image}
                                    alt={`${experience.company} office`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        hover:scale-105
                                    "
                                />

                                {/* Bottom Gradient */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                {/* Period + Current Pills */}

                                <div className="absolute left-4 top-4 flex flex-wrap gap-2">

                                    <span
                                        className="
                                            rounded-full
                                            border
                                            border-white/15
                                            bg-black/50
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium
                                            text-white
                                            backdrop-blur
                                        "
                                    >
                                        {experience.period}
                                    </span>

                                    <span
                                        className="
                                            rounded-full
                                            border
                                            border-violet-400/40
                                            bg-violet-500/30
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium
                                            text-violet-200
                                            backdrop-blur
                                        "
                                    >
                                        Current
                                    </span>

                                </div>
                            </div>

                        </div>

                    </motion.div>

                    {/* Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .7,
                            delay: .2,
                        }}
                        className="lg:col-span-7"
                    >

                        <p className="text-sm font-medium uppercase tracking-[3px] text-zinc-500">
                            {experience.company}
                        </p>

                        <h3 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Data Operation{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                                {experience.roleAccent}
                            </span>
                        </h3>

                        <div className="mt-8 h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />

                        <p className="mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400">
                            {experience.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <span
                                className="
                                    rounded-full
                                    border
                                    border-zinc-800
                                    bg-zinc-900
                                    px-5
                                    py-2
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Data Quality
                            </span>

                            <span
                                className="
                                    rounded-full
                                    border
                                    border-zinc-800
                                    bg-zinc-900
                                    px-5
                                    py-2
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Retail Measurement
                            </span>

                            <span
                                className="
                                    rounded-full
                                    border
                                    border-zinc-800
                                    bg-zinc-900
                                    px-5
                                    py-2
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Analytics Support
                            </span>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}
