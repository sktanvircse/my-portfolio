export default function Skills() {
    const skills = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"];
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="p-4 bg-gray-500/80 rounded-lg shadow hover:scale-105 transition"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}