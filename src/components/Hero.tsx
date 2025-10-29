import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-medical-light to-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">
            Dr. John Smith (Template 5)
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-700">
            Cardiologist
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-lg">
            With over 15 years of experience, I'm dedicated to providing
            exceptional cardiac care and personalized treatment plans for my
            patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-medical hover:bg-medical-dark text-white text-lg"
              style={{ padding: "30px 35px" }}
            >
              <a href="#contact">Book Appointment</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-white shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Dr. John Smith"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
