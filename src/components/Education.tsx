import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { TbCertificate } from "react-icons/tb";

interface EducationItem {
  icon: IconType;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    icon: PiCertificateFill,
    degree: "Doctor of Medicine",
    institution: "Harvard Medical School",
    year: "2005",
    description:
      "Graduated with honors. Specialized focus on cardiovascular medicine.",
  },
  {
    icon: FaUserDoctor,
    degree: "Residency in Internal Medicine",
    institution: "Massachusetts General Hospital",
    year: "2005-2008",
    description:
      "Completed three-year residency program with focus on diagnostics and patient care.",
  },
  {
    icon: GiAchievement,
    degree: "Fellowship in Cardiology",
    institution: "Cleveland Clinic",
    year: "2008-2011",
    description:
      "Specialized training in interventional cardiology and advanced cardiac care techniques.",
  },
  {
    icon: TbCertificate,
    degree: "Bachelor of Science in Biochemistry",
    institution: "Yale University",
    year: "2001",
    description: "Summa Cum Laude. Minor in Biomedical Engineering.",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Residency</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="feature-card flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-medical-light flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-medical" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.degree}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center text-gray-600 mt-1 md:gap-2">
                  <span>{item.institution}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{item.year}</span>
                </div>
                {item.description && (
                  <p className="mt-2 text-gray-700">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
