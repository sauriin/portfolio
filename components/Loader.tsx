"use client";

import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <motion.h1
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    text-2xl
                    font-light
                    tracking-[0.5em]
                    uppercase
                    text-white
                    select-none
                "
            >
                Loading...
            </motion.h1>
        </div>
    );
}