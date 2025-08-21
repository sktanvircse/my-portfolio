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
        <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">Tanvir</h1>
                <div className="flex space-x-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} scroll={true}>
                            <span className="cursor-pointer hover:text-teal-400 transition-colors">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}