"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sktanvirdev/", label: "LinkedIn" },
        { icon: <FaGithub />, href: "https://github.com/sktanvircse", label: "GitHub" },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-8 px-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white shadow-inner"
        >
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-4">
                {socialLinks.map((link) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: "#22c55e" }} // Green pop on hover
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-white text-2xl"
                        aria-label={link.label}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>

            {/* Copyright */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center text-white/80 text-sm"
            >
                © {new Date().getFullYear()} Sheikh Tanvir. All rights reserved.
            </motion.p>
        </motion.footer>
    );
}