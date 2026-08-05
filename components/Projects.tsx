"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

    const [current, setCurrent] = useState(0);

    const nextProject = () =>
        setCurrent((prev) => (prev + 1) % projects.length);

    const prevProject = () =>
        setCurrent((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );

    return (
        <section className="bg-black py-16 sm:py-20">

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .1 }}
                    transition={{ duration: .6 }}
                    className="rounded-3xl bg-zinc-900 px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16"
                >

                    <div className="mx-auto max-w-2xl text-center">

                        <p className="mb-4 text-xs uppercase tracking-[4px] text-zinc-500">
                            Portfolio
                        </p>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                            Featured{" "}
                            <span className="text-violet-500">
                                Projects
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400">
                            A collection of projects showcasing my expertise in
                            Full Stack Development and Data Analytics using
                            modern technologies.
                        </p>

                    </div>

                    <div className="mt-8 flex justify-center gap-4 lg:hidden">

                        <button
                            onClick={prevProject}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-violet-600"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <button
                            onClick={nextProject}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-violet-600"
                        >
                            <ArrowRight size={18} />
                        </button>

                    </div>
                    {/* Desktop */}

                    <div className="mt-14 hidden lg:grid grid-cols-3 gap-8">

                        {projects.map((project, index) => (

                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: .1 }}
                                transition={{
                                    duration: .6,
                                    delay: index * .15,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                transition-all
                duration-500
                hover:border-violet-500
                hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
            "
                            >

                                <div className="relative h-[320px] overflow-hidden">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                    "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6">

                                        <span
                                            className={`rounded-full px-4 py-1 text-xs ${project.badgeColor}`}
                                        >
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

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                    mt-6
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    rounded-full
                                                    bg-violet-600
                                                    px-4
                                                    py-2
                                                    text-xs
                                                    transition
                                                    hover:bg-violet-500
                                                "
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>
                    {/* Mobile & Tablet */}

                    <div className="mt-12 lg:hidden">

                        <motion.div
                            key={projects[current].title}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4 }}
                            whileHover={{ y: -8 }}
                            className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950
        "
                        >

                            <div className="relative h-[340px] overflow-hidden">

                                <img
                                    src={projects[current].image}
                                    alt={projects[current].title}
                                    className="
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                <div className="absolute bottom-5 left-5 right-5">

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs ${projects[current].badgeColor}`}
                                    >
                                        {projects[current].badge}
                                    </span>

                                    <h3 className="mt-4 text-2xl font-bold">
                                        {projects[current].title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                        {projects[current].description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {projects[current].tech.map((item) => (

                                            <span
                                                key={item}
                                                className="rounded-full bg-zinc-800 px-3 py-1 text-[11px]"
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>

                                    <a
                                        href={projects[current].github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-violet-600
                        px-4
                        py-2
                        text-xs
                        transition
                        hover:bg-violet-500
                    "
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                        {/* Indicator */}

                        <div className="mt-6 flex justify-center gap-2">

                            {projects.map((_, i) => (

                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 rounded-full transition-all ${current === i
                                        ? "w-8 bg-violet-500"
                                        : "w-2 bg-zinc-600"
                                        }`}
                                />

                            ))}

                        </div>

                    </div>
                </motion.div>

            </div>

        </section>
    );
}