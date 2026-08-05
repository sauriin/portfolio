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
        <section
            id="education"
            className="bg-black py-20 sm:py-24 lg:py-28"
        >

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 sm:mb-16 lg:mb-20 text-center"
                >

                    <p className="text-xs uppercase tracking-[4px] text-zinc-500">
                        Education
                    </p>

                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold">
                        Academic{" "}
                        <span className="text-violet-500">
                            Journey
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400">
                        My academic journey that built the foundation for
                        Full Stack Development, Data Analytics and
                        Artificial Intelligence.
                    </p>

                </motion.div>

                <div className="relative">

                    {/* Timeline */}

                    <div className="absolute left-4 top-0 h-full w-[2px] bg-zinc-800 sm:left-6 lg:left-1/2 lg:-translate-x-1/2" />

                    {education.map((item, index) => (

                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * .15,
                            }}
                            className={`relative mb-12 sm:mb-16 lg:mb-24 flex flex-col lg:flex-row items-start lg:items-center ${index % 2 === 0
                                ? ""
                                : "lg:flex-row-reverse"
                                }`}
                        >

                            {/* Card */}
                            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:px-10">

                                <div
                                    className="
            rounded-2xl
            lg:rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-5
            sm:p-6
            lg:p-8
            transition-all
            duration-300
            hover:border-violet-500
            hover:-translate-y-1
        "
                                >

                                    <span className="text-sm font-medium text-violet-400">
                                        {item.period}
                                    </span>

                                    <h3 className="mt-3 text-2xl sm:text-3xl font-bold">
                                        {item.degree}
                                    </h3>

                                    <p className="mt-2 text-sm sm:text-base text-zinc-400">
                                        {item.institute}
                                    </p>

                                    <p className="mt-4 text-base sm:text-lg font-semibold">
                                        {item.score}
                                    </p>

                                    <p className="mt-5 text-sm sm:text-base leading-7 text-zinc-400">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                            {/* Timeline Dot */}

                            <div className="absolute left-4 sm:left-6 lg:left-1/2 lg:-translate-x-1/2">

                                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-black bg-violet-500" />

                            </div>

                            {/* Empty Column */}

                            <div className="hidden lg:block w-1/2" />

                        </motion.div>

                    ))}
                </div>

            </div>

        </section>
    );
}