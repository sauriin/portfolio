'use client';

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20">

        {/* HERO TITLE */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >

          <h1
            className="
                            text-center
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                            lg:text-8xl
                            xl:text-[110px]
                            2xl:text-[130px]
                            font-black
                            uppercase
                            tracking-tight
                            leading-none
                            text-transparent
                            [-webkit-text-stroke:2px_white]
                        "
          >
            Saurin Parmar
          </h1>

        </motion.div>

        {/* HERO CONTENT */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .7,
              delay: .2,
            }}
            className="space-y-8 lg:space-y-10"
          >

            {/* BIO */}

            <div>

              <p className="mb-4 text-xs uppercase tracking-[5px] text-zinc-500">
                Biography
              </p>

              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-300">
                I'm an MCA graduate specializing in
                <span className="font-semibold text-white">
                  {" "}Full Stack Development
                </span>

                <span className="text-violet-400">
                  {" "}and Data Analytics
                </span>.

                I enjoy building scalable web applications,
                creating interactive dashboards and solving
                real-world business problems through modern
                technologies.
              </p>

            </div>

            {/* SKILLS */}

            <div>

              <p className="mb-4 text-xs uppercase tracking-[5px] text-zinc-500">
                Skills
              </p>

              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-300">
                React • Next.js • TypeScript
                <br />
                Node.js • Prisma • PostgreSQL
                <br />
                SQL • Python • Power BI
                <br />
                Tailwind CSS • Git • REST APIs
              </p>

            </div>

            {/* CONNECT */}

            <div>

              <p className="mb-5 text-xs uppercase tracking-[5px] text-zinc-500">
                Connect
              </p>

              <div className="flex gap-3 sm:gap-4">

                <a
                  href="https://github.com/sauriin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/saurin-parmar-3a389223a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="https://instagram.com/__.saurin.__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
                >
                  <FaInstagram size={18} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* CENTER */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8,
              delay: .4,
            }}
            className="order-first flex justify-center lg:order-none"
          >

            <div
              className="
                                relative
                                h-64
                                w-64
                                sm:h-72
                                sm:w-72
                                md:h-80
                                md:w-80
                                lg:h-96
                                lg:w-96
                                overflow-hidden
                                rounded-full
                                border
                                border-violet-500/30
                                shadow-[0_0_35px_rgba(139,92,246,.18)]
                            "
            >

              <Image
                src="/Saurinn.jpg"
                alt="Saurin Parmar"
                fill
                priority
                className="
                                    object-cover
                                    object-[40%_35%]
                                    scale-[1.28]
                                    transition-all
                                    duration-700
                                    hover:scale-[1.34]
                                "
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .8,
              delay: .4,
            }}
            className="
                            space-y-7
                            text-center
                            lg:space-y-9
                            lg:text-right
                        "
          >

            <div>

              <p className="text-xs uppercase tracking-[5px] text-zinc-500">
                Featured Projects
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
                03+
              </h2>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[5px] text-zinc-500">
                Certifications
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
                06
              </h2>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[5px] text-zinc-500">
                CGPA
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
                8.44
              </h2>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[5px] text-zinc-500">
                Location
              </p>

              <h2 className="mt-3 text-lg sm:text-xl font-semibold">
                Vadodara, India
              </h2>

            </div>

          </motion.div>

        </div>

      </section>

      <Services />
      <Projects />
      <Education />
      <Certifications />
      <Contact />

    </main>
  );
}