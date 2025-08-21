"use client";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        { name: "E-commerce Website", desc: "React + Tailwind + Stripe" },
        { name: "Portfolio Website", desc: "Next.js + Framer Motion" },
        { name: "Restaurant App", desc: "React Native + Expo" },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-background text-text relative overflow-hidden">
            {/* Optional Animated Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-l from-green-500 via-blue-500 to-purple-500 animate-gradient-x opacity-10"></div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-10 text-green-500"
            >
                Projects
            </motion.h2>

            {/* Projects Grid */}
            <motion.div
                className="grid md:grid-cols-3 gap-8 w-full max-w-6xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className="p-6 bg-[#e2e8f0]/20 hover:bg-[#e2e8f0]/40 rounded-xl shadow-lg cursor-pointer transition-transform duration-300"
                        initial={{ opacity: 0, y: 20 }}        // Entrance: fade in + slide up
                        whileInView={{ opacity: 1, y: 0 }}    // When in viewport
                        viewport={{ once: true }}             // Only animate once
                        whileHover={{ scale: 1.05 }}          // Slight pop on hover
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-500">{project.name}</h3>
                        <p className="text-[#0a0f1f]/80">{project.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Optional description below grid */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="max-w-2xl text-center mt-10 text-[#0a0f1f]"
            >
                These are some of the projects I’ve built to showcase my skills in modern web and mobile development. Each project demonstrates responsive design, interactivity, and clean code.
            </motion.p>
        </div>
    );
}