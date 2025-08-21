export default function Projects() {
    const projects = [
        { name: "E-commerce Website", desc: "React + Tailwind + Stripe" },
        { name: "Portfolio Website", desc: "Next.js + Framer Motion" },
        { name: "Restaurant App", desc: "React Native + Expo" },
    ];
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <div key={p.name} className="p-6 bg-gray-500 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                        <p className="text-gray-400">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}