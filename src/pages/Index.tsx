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
  const [translateReady, setTranslateReady] = React.useState(false);

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="translate.google"]');
      scripts.forEach(script => script.remove());
    };
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
    
    // Set ready state after ensuring the widget is fully loaded
    setTimeout(() => {
      const checkWidget = setInterval(() => {
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (selectElement) {
          setTranslateReady(true);
          clearInterval(checkWidget);
        }
      }, 100);
      
      // Timeout after 5 seconds if widget doesn't load
      setTimeout(() => clearInterval(checkWidget), 5000);
    }, 500);
  };

  const handleLanguageToggle = () => {
    if (!translateReady) {
      console.log("Google Translate not ready yet");
      return;
    }
    
    const newLanguage = currentLanguage === "en" ? "bn" : "en";
    
    // Find and trigger the Google Translate selector
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = newLanguage;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
      setCurrentLanguage(newLanguage);
      console.log("Language changed to:", newLanguage);
    } else {
      console.error("Google Translate selector not found");
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
