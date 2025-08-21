"use client";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 w-6 h-6" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-blue-500 w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500 w-6 h-6" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-green-500 w-6 h-6" /> },
    ];

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
                My Skills
            </motion.h2>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-6 bg-[#e2e8f0]/20 hover:bg-[#e2e8f0]/40 rounded-lg shadow-lg cursor-pointer transition-transform duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 0.5 }}
                    >
                        {skill.icon}
                        <span className="mt-2 text-[#0a0f1f] font-semibold">{skill.name}</span>
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
                These are the main tools and frameworks I use to build interactive, modern, and
                responsive web applications. I enjoy learning new technologies and improving my skills
                continuously.
            </motion.p>
        </div>
    );
}
