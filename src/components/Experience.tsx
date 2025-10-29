import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  institution: string;
  year: string;
  description?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Chief of Cardiology",
    institution: "St. Mary's Medical Center",
    year: "2020 - Present",
    description:
      "Leading a team of 12 cardiologists and cardiovascular specialist.",
  },
  {
    title: "Attending Cardiologist",
    institution: "University Hospital",
    year: "2015 - 2020",
    description:
      "Provided comprehensive cardiac care to 200+ patients monthly.",
  },
  {
    title: "Assistant Professor of Medicine",
    institution: "Medical University",
    year: "2015 - Present",
    description: "Conducting clinical research in cardiovascular medicine.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="feature-card flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="flex-1  text-gray-600 mt-1 md:gap-2">
                  <p className="text-primary font-semibold mb-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.year}
                  </p>
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

export default Experience;
