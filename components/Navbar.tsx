"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 lg:px-10 py-5">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Saurin
                </h1>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="
                                rounded-full
                                border
                                border-zinc-700
                                bg-transparent
                                px-6
                                py-2.5
                                text-sm
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:border-violet-500
                                hover:bg-zinc-700
                            "
                    >
                        LET'S TALK
                    </a>

                    <a
                        href="/Saurin_Parmar_Resume.pdf"
                        download="Saurin_Parmar_Resume.pdf"
                        className="
                                rounded-full
                                bg-violet-600
                                px-6
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-violet-500
                            "
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}