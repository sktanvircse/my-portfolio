import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
return (
<>
<Navbar />
<main className="scroll-smooth">
<section id="home"><Hero /></section>
<section id="about"><About /></section>
<section id="skills"><Skills /></section>
<section id="projects"><Projects /></section>
<section id="contact"><Contact /></section>
</main>
<Footer />
</>
);
}