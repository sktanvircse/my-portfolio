"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowDown } from "react-icons/hi";

const roles = [
    "Frontend Developer",
    "React Developer",
    "Next.js Enthusiast",
    "Tailwind CSS Lover",
];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-text">

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x opacity-20"></div>

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-10"
            >
                Hi, I’m <span className="text-blue-500">Sheikh Tanvir</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl max-w-xl"
            >
                <span className="text-green-500">{roles[currentRole]}</span>{" "}
                <span className="text-blue-500">|</span> Passionate about building interactive UIs
            </motion.p>

            <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-6 py-3 bg-green-500 hover:bg-blue-500 rounded-full text-white shadow-lg"
            >
                View My Work
            </motion.a>

            <div className="flex space-x-6 mt-6">
                <a
                    href="https://github.com/sktanvircse"
                    target="_blank"
                    className="text-green-500 hover:text-blue-500 text-xl font-semibold"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/sktanvirdev/"
                    target="_blank"
                    className="text-green-500 hover:text-blue-500 text-xl font-semibold"
                >
                    LinkedIn
                </a>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute bottom-10 text-2xl text-green-500"
            >
                <HiArrowDown />
            </motion.div>
        </div>
    );
}
