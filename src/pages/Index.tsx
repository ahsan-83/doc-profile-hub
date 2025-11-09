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
import FacebookPosts from "@/components/FacebookPosts";
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
  const [currentLanguage, setCurrentLanguage] = React.useState("en");

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
        includedLanguages: "en,bn",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === "en" ? "bn" : "en";
    setCurrentLanguage(newLanguage);
    
    // Trigger Google Translate
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = newLanguage;
      selectElement.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <div className="min-h-screen bg-background">
        <Navbar onLanguageToggle={handleLanguageToggle} currentLanguage={currentLanguage} />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Specialty />
        <Gallery />
        <Blog />
        <FacebookPosts />
        <Consultation />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
