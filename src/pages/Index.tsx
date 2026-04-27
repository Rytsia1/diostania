import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
