import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <div className="w-full max-w-5xl mx-auto h-px gradient-line" />
        <About />
        <Skills />
        <div className="w-full max-w-5xl mx-auto h-px gradient-line" />
        <Experience />
        <Projects />
        <div className="w-full max-w-5xl mx-auto h-px gradient-line" />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
