"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">

                {/* Logo */}

                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Saurin
                </h1>

                {/* Buttons */}

                <div className="flex items-center gap-2 sm:gap-3">

                    <a
                        href="#contact"
                        className="
                            hidden
                            rounded-full
                            border
                            border-zinc-700
                            bg-transparent
                            px-5
                            py-2
                            text-sm
                            font-medium
                            text-white
                            transition-all
                            duration-300
                            hover:border-violet-500
                            hover:bg-zinc-700
                            sm:flex
                            sm:items-center
                        "
                    >
                        LET'S TALK
                    </a>

                    <a
                        href="/Saurin_Parmar_Resume.pdf"
                        download
                        className="
                            rounded-full
                            bg-violet-600
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-violet-500
                            sm:px-6
                            sm:py-2.5
                            sm:text-sm
                        "
                    >
                        Download CV
                    </a>

                </div>

            </div>
        </motion.nav>
    );
}