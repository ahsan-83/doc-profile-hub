import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Specialty from "@/components/Specialty";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Consultation from "@/components/Consultation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const Index = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,bn,hi",
        layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <div id="google_translate_element"></div>

      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Specialty />
        <Gallery />
        <Blog />
        <Consultation />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
