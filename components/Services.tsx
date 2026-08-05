"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BarChart3,
    Code2,
    LayoutDashboard,
} from "lucide-react";

const services = [
    {
        number: "01",
        title: "Full Stack Development",
        description:
            "Building modern, scalable and responsive web applications using React, Next.js, TypeScript, Node.js, Prisma and PostgreSQL.",
        icon: Code2,
    },
    {
        number: "02",
        title: "Data Analytics",
        description:
            "Cleaning, analyzing and visualizing data using SQL, Python, Excel and Power BI to generate meaningful business insights.",
        icon: BarChart3,
    },
    {
        number: "03",
        title: "Dashboard Development",
        description:
            "Creating interactive dashboards, KPI reports and visualizations that help businesses make informed decisions.",
        icon: LayoutDashboard,
    },
];

export default function Services() {
    return (
        <section className="bg-black py-20 sm:py-24 lg:py-28 text-white">

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >

                        <p className="mb-4 text-xs uppercase tracking-[5px] text-zinc-500">
                            Expertise
                        </p>

                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none">
                            What I{" "}
                            <span className="text-violet-500">
                                Build
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400">
                            Passionate about building modern web applications and transforming raw data into interactive dashboards that solve real-world problems.
                        </p>

                    </motion.div>

                    {/* RIGHT */}

                    <div className="lg:col-span-8 space-y-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.number}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: .5,
                                        delay: index * .1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-zinc-800
                                            bg-zinc-900/70
                                            p-6
                                            sm:p-7
                                            lg:p-8
                                            transition-all
                                            duration-300
                                            hover:border-violet-500
                                        "
                                >

                                    {/* Bottom Gradient */}

                                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

                                    {/* Mobile */}

                                    <div className="flex flex-col gap-5 lg:hidden">

                                        <div className="flex items-center justify-between">

                                            <h3 className="text-4xl font-bold text-zinc-300">
                                                {service.number}
                                            </h3>

                                            <ArrowUpRight className="h-6 w-6 text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400" />

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="rounded-full border border-zinc-700 p-3 transition group-hover:border-violet-500">

                                                <Icon className="h-5 w-5 text-white" />

                                            </div>

                                            <h3 className="text-xl sm:text-2xl font-semibold">
                                                {service.title}
                                            </h3>

                                        </div>

                                        <p className="text-sm sm:text-base leading-7 text-zinc-400">
                                            {service.description}
                                        </p>

                                    </div>

                                    {/* Desktop */}

                                    <div className="hidden lg:grid grid-cols-[70px_1.5fr_2.5fr_40px] items-center gap-8">

                                        <h3 className="text-5xl font-bold text-zinc-300">
                                            {service.number}
                                        </h3>

                                        <div className="flex items-center gap-5">

                                            <div className="rounded-full border border-zinc-700 p-3 transition group-hover:border-violet-500">

                                                <Icon className="h-6 w-6 text-white" />

                                            </div>

                                            <h3 className="text-2xl font-semibold">
                                                {service.title}
                                            </h3>

                                        </div>

                                        <p className="leading-8 text-zinc-400">
                                            {service.description}
                                        </p>

                                        <ArrowUpRight className="h-7 w-7 text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400" />

                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}
