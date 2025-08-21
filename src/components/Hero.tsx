"use client";
import { motion } from "framer-motion";


export default function Hero() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4"
            >
                Hi, I’m <span className="text-teal-400">Sheikh Tanvir</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg max-w-xl"
            >
                Frontend Developer | Passionate about building interactive UIs
            </motion.p>
            <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-6 py-3 bg-teal-500 rounded-full text-white shadow-lg hover:bg-teal-600"
            >
                View My Work
            </motion.a>
        </div>
    );
}