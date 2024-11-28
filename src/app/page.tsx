import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import ProjectsSection from "@/components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero  text-white text-center py-24">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hello, I m [Your Name]</h1>
      <p className="text-xl md:text-2xl mb-8">
        A passionate software developer who loves creating clean and impactful
        applications.
      </p>
      <Link
        href="#about"
        className="bg-white text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-blue-100 transition"
      >
        Learn More About Me
      </Link>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </section>
    
  );
}
