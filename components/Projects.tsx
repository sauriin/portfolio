"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Flowy",
        badge: "AI Workflow",
        badgeColor: "bg-violet-600",
        description:
            "AI powered workflow automation platform with intelligent workflow execution and monitoring.",
        image: "flowy.png",
        tech: ["Next.js", "TypeScript", "Prisma"],
        github: "https://github.com/sauriin/flowy",
    },
    {
        title: "TeamSpace",
        badge: "Collaboration Platform",
        badgeColor: "bg-amber-500 text-black",
        description:
            "Collaborative workspace featuring authentication, project management and task tracking. Explored real-time chat and video conferencing integration.",
        image: "/teamspace.png",
        tech: ["Next.js", "TypeScript", "Clerk"],
        github: "https://github.com/sauriin/teamspace",
    },
    {
        title: "BlinkIT",
        badge: "Data Analytics",
        badgeColor: "bg-green-600",
        description:
            "Retail sales analytics dashboard using SQL, Python and Power BI with interactive KPIs and business insights.",
        image: "blinkit.png",
        tech: ["Python", "SQL", "Power BI"],
        github: "https://github.com/sauriin/blinkIT_analysis",
    },
];

export default function Projects() {
    return (
        <section className="bg-black py-20">
            <div className="mx-auto max-w-[1700px] px-10">

                {/* Main Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="rounded-[28px] bg-zinc-900 px-16 py-16"
                >
                    {/* Heading */}
                    <div className="mx-auto max-w-2xl text-center">

                        <p className="mb-4 uppercase tracking-[4px] text-xs text-zinc-500">
                            Portfolio
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-bold leading-none">
                            Featured{" "}
                            <span className="text-violet-500">
                                Projects
                            </span>
                        </h2>

                        <p className="mt-8 text-base leading-7 max-w-xl text-zinc-400">
                            A collection of projects showcasing my expertise in
                            Full Stack Development and Data Analytics using modern
                            technologies.
                        </p>
                    </div>

                    {/* Navigation */}
                    {/* <div className="mt-8 flex justify-center gap-5">

                        <button
                            className="
                                flex h-12 w-12 items-center justify-center
                                rounded-full
                                bg-zinc-800
                                transition-all
                                duration-300
                                hover:bg-violet-600
                            "
                        >
                            <ArrowLeft size={20} />
                        </button>

                        <button
                            className="
                                flex h-14 w-14 items-center justify-center
                                rounded-full
                                bg-zinc-800
                                transition-all
                                duration-300
                                hover:bg-violet-600
                            "
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div> */}

                    <div className="mt-14 grid grid-cols-3 gap-8">

                        {projects.map((project, index) => (

                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                }}
                                className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-zinc-800
                                        bg-zinc-950
                                        transition-all
                                        duration-500
                                        hover:border-violet-500
                                        hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
                                        "
                            >

                                <div className="relative h-[300px] overflow-hidden">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <span className={`rounded-full px-4 py-1 text-xs ${project.badgeColor}`}>
                                            {project.badge}
                                        </span>

                                        <h3 className="mt-5 text-2xl font-bold">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                                            {project.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.tech.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full bg-zinc-800 px-3 py-1 text-[11px]"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <div
                                            className="
                                                    mt-6
                                                    flex
                                                    gap-3
                                                    opacity-0
                                                    transition-all
                                                    duration-500
                                                    group-hover:opacity-100
                                                    "
                                        >
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                className="flex items-center gap-2 rounded-full bg-violet-600 px-3.5 py-2 text-xs hover:bg-violet-500"
                                            >
                                                <FaGithub />
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}