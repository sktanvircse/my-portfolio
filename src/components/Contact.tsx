"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-background text-text relative overflow-hidden">
            {/* Optional Animated Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-500 via-blue-500 to-purple-500 animate-gradient-diagonal opacity-10"></div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-green-500"
            >
                Contact Me
            </motion.h2>

            {/* Form */}
            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col w-full max-w-md space-y-4"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-lg bg-[#e2e8f0]/30 border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded-lg bg-[#e2e8f0]/30 border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                />
                <textarea
                    placeholder="Message"
                    rows={4}
                    className="p-3 rounded-lg bg-[#e2e8f0]/30 border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                ></textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-green-500 hover:bg-blue-500 rounded-lg text-white font-semibold shadow-lg transition-colors duration-300"
                >
                    Send
                </motion.button>
            </motion.form>
        </div>
    );
}