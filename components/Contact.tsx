"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success("Message sent successfully!", {
                description:
                    "Thank you for reaching out. I'll get back to you soon.",
            });

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(error);

            toast.error("Failed to send message", {
                description: "Please try again after a few moments.",
            });
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="bg-black py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-zinc-900 p-6 sm:p-8 lg:p-12"
                >
                    {/* Heading */}
                    <div className="mb-10">
                        <p className="text-xs uppercase tracking-[4px] text-zinc-500">
                            Contact
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            Let's <span className="text-violet-500">Talk</span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                            Have a project, opportunity, or just want to connect? Feel free to send
                            me a message.
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* Form - Mobile First */}
                        <div className="order-1 lg:order-2">

                            <div className="mb-8">
                                <p className="mb-2 text-xs uppercase tracking-[3px] text-zinc-500">
                                    Email
                                </p>

                                <a
                                    href="mailto:saurinparmar2324@gmail.com"
                                    className="break-all text-base font-semibold transition hover:text-violet-400 sm:text-lg lg:text-xl"
                                >
                                    saurinparmar2324@gmail.com
                                </a>
                            </div>

                            <form onSubmit={sendEmail} className="space-y-5">

                                <div className="grid gap-4 sm:grid-cols-2">

                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        required
                                        className="
                h-12
                rounded-xl
                border
                border-zinc-800
                bg-zinc-950
                px-5
                text-white
                outline-none
                placeholder:text-zinc-500
                focus:border-violet-500
            "
                                    />

                                    <div className="relative">

                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="E-Mail"
                                            required
                                            className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    px-5
                    pr-12
                    text-white
                    outline-none
                    placeholder:text-zinc-500
                    focus:border-violet-500
                "
                                        />

                                        <Mail
                                            size={16}
                                            className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-violet-500
                "
                                        />

                                    </div>

                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="
            h-12
            w-full
            rounded-xl
            border
            border-zinc-800
            bg-zinc-950
            px-5
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-violet-500
        "
                                />

                                <textarea
                                    rows={6}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                    className="
            w-full
            resize-none
            rounded-xl
            border
            border-zinc-800
            bg-zinc-950
            p-5
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-violet-500
        "
                                />

                                <div className="flex justify-center sm:justify-end">

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-violet-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-500
                sm:w-auto
                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:translate-y-0
            "
                                    >
                                        {loading ? "SENDING..." : "SEND MESSAGE"}

                                        <Send size={16} />
                                    </button>

                                </div>

                            </form>

                        </div>

                        {/* Map */}
                        <div className="order-2 lg:order-1">

                            <div className="overflow-hidden rounded-2xl border border-zinc-800">
                                <iframe
                                    title="Location"
                                    src="https://www.google.com/maps?q=Vadodara,Gujarat&output=embed"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="h-64 w-full sm:h-72 lg:h-80"
                                />
                            </div>

                        </div>

                    </div>

                    {/* Footer */}

                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-center sm:flex-row sm:text-left">
                        <p className="text-xs text-zinc-500">
                            © {new Date().getFullYear()} Saurin Parmar. All
                            Rights Reserved.
                        </p>

                        <a
                            href="mailto:saurinparmar2324@gmail.com"
                            className="rounded-full border border-zinc-800 p-3 transition-all duration-300 hover:border-violet-500 hover:bg-violet-600"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}