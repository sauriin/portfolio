"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
    FaChevronLeft,
    FaChevronRight,
    FaArrowRight,
    FaAmazon,
} from "react-icons/fa";
import { SiGoogle, SiSap, SiAnthropic } from "react-icons/si";
import { Briefcase } from "lucide-react";

const certifications = [
    {
        company: "Google",
        title: "Data Analytics Professional Certificate",
        year: "2026",
        icon: SiGoogle,
        color: "text-blue-500",
        credential:
            "https://www.coursera.org/account/accomplishments/professional-cert/KN4OFHR5CVT5",
    },
    {
        company: "SAP",
        title: "SAP Business Analyst",
        year: "2026",
        icon: SiSap,
        color: "text-cyan-500",
        credential:
            "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1ZW054N0A2T6",
    },
    {
        company: "Amazon Web Services",
        title: "AWS Generative AI & AI Agents with Amazon Bedrock",
        year: "2026",
        icon: FaAmazon,
        color: "text-orange-500",
        credential:
            "https://www.coursera.org/account/accomplishments/professional-cert/certificate/HV40KP9HSC0P",
    },
    {
        company: "AWS Community Builders",
        title: "Frontend Web Development",
        year: "2023",
        icon: FaAmazon,
        color: "text-orange-500",
        credential:
            "https://drive.google.com/file/d/1NaKjLjXVfFNbUDeVPFfgBPlKc1mlav7h/view",
    },
    {
        company: "Deloitte Australia",
        title: "Data Analytics Job Simulation",
        year: "2026",
        icon: Briefcase,
        color: "text-green-500",
        credential:
            "https://drive.google.com/file/d/1cVS0R6ot48AhlEl3eSdaO7OBbzSClyfi/view",
    },
    {
        company: "Anthropic",
        title: "AI Fluency for Students",
        year: "2026",
        icon: SiAnthropic,
        color: "text-purple-500",
        credential:
            "https://drive.google.com/file/d/19ZBuSh7z1Bpj7u9fbR1lqLWt4hQPnyUx/view",
    },
    {
        company: "Google",
        title: "Foundations of Project Management",
        year: "2026",
        icon: SiGoogle,
        color: "text-red-500",
        credential:
            "https://www.coursera.org/account/accomplishments/verify/HK9P2G2PSFRL",
    },
];

export default function Certifications() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -340,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 340,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="certifications"
            className="bg-black py-20"
        >
            <div className="mx-auto max-w-[1700px] px-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[32px] bg-zinc-900 px-14 py-14"
                >

                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-xs uppercase tracking-[4px] text-zinc-500">
                            Certifications
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-bold">
                            Professional{" "}
                            <span className="text-violet-500">
                                Certifications
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
                            Industry-recognized certifications showcasing
                            my expertise in Full Stack Development,
                            Data Analytics, Artificial Intelligence,
                            Cloud Computing and Project Management.
                        </p>

                    </div>

                    <div className="mt-8 flex justify-center gap-5">

                        <button
                            onClick={scrollLeft}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-violet-600"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-violet-600"
                        >
                            <FaChevronRight />
                        </button>

                    </div>

                    <div
                        ref={sliderRef}
                        className="
                                mt-14
                                flex
                                gap-8
                                overflow-x-auto
                                scroll-smooth
                                scrollbar-hide
                                "
                    >

                        {certifications.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.a
                                    key={item.title}
                                    href={item.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: .5,
                                        delay: index * .08,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="
                                            group
                                            min-w-[320px]
                                            max-w-[320px]
                                            shrink-0
                                        "
                                >

                                    <div
                                        className="
                                                flex
                                                aspect-[16/10]
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-zinc-950
                                                transition-all
                                                duration-500
                                                group-hover:bg-zinc-800
                                                "
                                    >

                                        <Icon
                                            className={`
                        h-20
                        w-20
                        ${item.color}
                        transition-all
                        duration-500
                        group-hover:scale-110
                      `}
                                        />

                                    </div>

                                    <p className="mt-8 text-xs uppercase tracking-[4px] text-zinc-500">
                                        {item.company}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold leading-tight transition group-hover:text-violet-400">
                                        {item.title}
                                    </h3>
                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-zinc-500">
                                            Issued • {item.year}
                                        </span>

                                        <span className="flex items-center gap-2 font-medium text-violet-400 transition group-hover:translate-x-2">
                                            View Credential
                                            <FaArrowRight />
                                        </span>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}