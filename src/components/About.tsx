"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFlutter } from "react-icons/si";

export default function About() {
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 w-6 h-6" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-blue-500 w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500 w-6 h-6" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-500 w-6 h-6" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
    ];

    const softSkills = ["Communication", "Teamwork", "Problem Solving", "Creativity"];

    return (
        <div className="min-h-screen relative flex flex-col justify-center items-center px-6 bg-background text-[#0a0f1f]">

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x opacity-20"></div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-green-500"
            >
                About Me
            </motion.h2>

            {/* Paragraphs */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl text-center mb-4 text-[#0a0f1f]"
            >
                I’m a <span className="text-green-500 font-semibold">Frontend Developer</span> skilled in{" "}
                <span className="text-blue-500 font-semibold">React</span>,{" "}
                <span className="text-blue-500 font-semibold">Next.js</span>,{" "}
                <span className="text-blue-500 font-semibold">Tailwind CSS</span>,{" "}
                <span className="text-blue-500 font-semibold">TypeScript</span>, and{" "}
                <span className="text-blue-500 font-semibold">Flutter</span>. Passionate about creating clean, modern, and responsive interfaces.
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl text-center mb-8 text-[#0a0f1f]"
            >
                I love building <span className="text-green-500 font-semibold">interactive web apps</span> that provide great user experiences. I continuously learn new technologies and best practices to improve my craft.
            </motion.p>


            {/* Skills */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}        // Entrance: fade in + slide up
                        whileInView={{ opacity: 1, y: 0 }}    // When in viewport
                        viewport={{ once: true }}             // Only animate once
                        whileHover={{ scale: 1.05 }}          // Slight pop on hover
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                        className="flex flex-col items-center p-4 bg-white hover:bg-[#e2e8f0]/40 rounded-lg shadow-md transition-colors duration-300"
                    >
                        {skill.icon}
                        <span className="mt-2 text-[#0a0f1f] font-semibold">{skill.name}</span>
                    </motion.div>

                ))}
            </motion.div>

            {/* Soft Skills */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
            >
                {softSkills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-green-500 hover:bg-blue-500 text-white rounded-full font-medium transition-colors duration-300"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}