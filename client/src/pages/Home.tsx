/**
 * DESIGN: Warm Editorial, Camryn Williams Personal Site
 * Palette: cream bg (#FAF7F2), forest text (#1C2B1A), terracotta accent (#C4622D), sage (#7A9E7E)
 * Fonts: Playfair Display (headings), Source Sans 3 (body), Space Mono (labels)
 * Layout: Left-margin annotations, generous whitespace, editorial pull-quotes
 */

import { useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Intersection observer for fade-up animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
