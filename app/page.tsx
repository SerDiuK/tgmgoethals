import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Languages } from "@/components/Languages";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Languages />
        <Education />
      </main>
      <Footer />
    </>
  );
}
