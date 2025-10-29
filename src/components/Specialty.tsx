import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TreatmentType {
  name: string;
  description: string;
}

const treatments: TreatmentType[] = [
  {
    name: "Coronary Angioplasty and Stenting",
    description:
      "Minimally invasive procedure to open blocked coronary arteries and restore blood flow to the heart.",
  },
  {
    name: "Cardiac Catheterization",
    description:
      "Diagnostic procedure to examine the heart, identify problems, and perform necessary interventions.",
  },
  {
    name: "Echocardiography",
    description:
      "Non-invasive ultrasound procedure to assess the structure and function of the heart.",
  },
  {
    name: "Pacemaker Implantation",
    description:
      "Surgical procedure to implant a device that regulates the heart rhythm.",
  },
  {
    name: "Heart Disease Management",
    description:
      "Comprehensive approach to manage heart conditions including medication, lifestyle modifications, and regular monitoring.",
  },
  {
    name: "Heart Failure Treatment",
    description:
      "Specialized care for patients with heart failure to improve quality of life and prevent complications.",
  },
];

const Specialty: React.FC = () => {
  return (
    <section id="specialty" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Specialty & Treatments</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-medical-dark mb-3">
                  {treatment.name}
                </h3>
                <p className="text-gray-700">{treatment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;
