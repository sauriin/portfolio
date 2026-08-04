"use client";

import { motion } from "framer-motion";

const education = [
    {
        degree: "Higher Secondary Education",
        institute: "Yagnik Vidyalaya",
        period: "2020 – 2021",
        score: "Commerce",
        description:
            "Built a strong foundation in commerce, business principles and analytical thinking, which later inspired my transition into computer applications and software development.",
    },
    {
        degree: "Bachelor of Computer Applications",
        institute: "Parul University",
        period: "2021 – 2024",
        score: "CGPA 7.84",
        description:
            "Built a strong foundation in programming, databases, web development and software engineering.",
    },
    {
        degree: "Master of Computer Applications",
        institute: "SVIT",
        period: "2024 – 2026",
        score: "CGPA 8.44",
        description:
            "Specialized in Full Stack Development, Data Analytics, Artificial Intelligence and modern software engineering.",
    },
];

export default function Education() {
    return (
        <section id="education" className="bg-black py-32">
            <div className="mx-auto max-w-7xl px-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <p className="text-xs uppercase tracking-[4px] text-zinc-500">
                        Education
                    </p>

                    <h2 className="mt-4 text-7xl font-bold">
                        Academic <span className="text-violet-500">Journey</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl leading-8 text-zinc-400">
                        My academic journey that built the foundation for Full Stack
                        Development, Data Analytics and Artificial Intelligence.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-zinc-800" />

                    {education.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`relative mb-24 flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"
                                }`}
                        >
                            <div className="w-1/2 px-10">
                                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-violet-500">
                                    <span className="text-sm font-medium text-violet-400">
                                        {item.period}
                                    </span>

                                    <h3 className="mt-3 text-3xl font-bold">
                                        {item.degree}
                                    </h3>

                                    <p className="mt-2 text-zinc-400">
                                        {item.institute}
                                    </p>

                                    <p className="mt-4 font-semibold">
                                        {item.score}
                                    </p>

                                    <p className="mt-6 leading-7 text-zinc-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2">
                                <div className="h-6 w-6 rounded-full border-4 border-black bg-violet-500" />
                            </div>

                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}