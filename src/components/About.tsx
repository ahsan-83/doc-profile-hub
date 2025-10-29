import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { FaSchool, FaRegIdBadge } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to my practice. I'm Dr. John Smith, a board-certified
              cardiologist with a passion for providing personalized cardiac
              care. I believe in a patient-centered approach that combines the
              latest medical advances with compassionate care.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My goal is to not only treat cardiac conditions but to help my
              patients understand their heart health and make informed decisions
              about their care. I take the time to listen to your concerns and
              work with you to develop a treatment plan that fits your lifestyle
              and needs.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're seeking preventive care or treatment for a specific
              condition, I'm dedicated to helping you achieve optimal heart
              health.
            </p>
          </div>
          <div>
            <Card className="shadow-lg" style={{ background: "#0284C7" }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <FaRegIdBadge
                    className="h-6 w-6 l mr-2"
                    style={{ color: "white" }}
                  />
                  <h3 className="text-xl font-bold" style={{ color: "white" }}>
                    Specialty
                  </h3>
                </div>
                <p className="text-gray-700 mb-4" style={{ color: "white" }}>
                  Interventional Cardiology
                </p>

                <div className="flex items-center mb-6">
                  <FaSchool
                    className="h-6 w-6  mr-2"
                    style={{ color: "white" }}
                  />
                  <h3 className="text-xl font-bold" style={{ color: "white" }}>
                    Department
                  </h3>
                </div>
                <p className="text-gray-700 mb-4" style={{ color: "white" }}>
                  Cardiology Department, Memorial Hospital
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
