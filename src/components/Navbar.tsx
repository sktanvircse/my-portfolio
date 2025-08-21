"use client";
import Link from "next/link";

export default function Navbar() {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo / Name */}
                <h1 className="text-2xl font-bold text-green-500">Tanvir</h1>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} scroll={true}>
                            <span className="cursor-pointer text-[#0a0f1f] hover:text-blue-500 transition-colors duration-300">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
