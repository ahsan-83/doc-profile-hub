import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TreatmentType {
  name: string;
  disease: string;
  description: string;
  procedures: string[];
  outcomes: string;
}

const treatments: TreatmentType[] = [
  {
    name: "Coronary Artery Disease",
    disease: "CAD / Atherosclerosis",
    description:
      "Comprehensive treatment for blocked or narrowed coronary arteries that supply blood to the heart muscle.",
    procedures: [
      "Coronary Angiography - Diagnostic imaging to visualize blocked arteries",
      "Angioplasty with Stent Placement - Minimally invasive procedure to open blocked arteries",
      "Medical Management - Antiplatelet therapy, statins, and lifestyle modifications",
      "Cardiac Rehabilitation - Supervised exercise and education programs",
    ],
    outcomes: "Improved blood flow, reduced chest pain, and lower risk of heart attack",
  },
  {
    name: "Acute Myocardial Infarction",
    disease: "Heart Attack",
    description:
      "Emergency intervention for heart attacks to restore blood flow and minimize heart muscle damage.",
    procedures: [
      "Emergency Angioplasty - Immediate opening of blocked artery",
      "Thrombolytic Therapy - Clot-dissolving medications",
      "ICU Monitoring - Continuous cardiac monitoring and stabilization",
      "Secondary Prevention - Long-term medication and lifestyle counseling",
    ],
    outcomes: "Minimized heart damage, improved survival rate, and faster recovery",
  },
  {
    name: "Heart Failure",
    disease: "Congestive Heart Failure",
    description:
      "Specialized management for patients with weakened heart muscle unable to pump blood efficiently.",
    procedures: [
      "Echocardiography - Assessment of heart function and structure",
      "Medical Optimization - ACE inhibitors, beta-blockers, diuretics",
      "Cardiac Resynchronization Therapy - CRT device implantation if indicated",
      "Regular Monitoring - Serial evaluations and medication adjustments",
    ],
    outcomes: "Reduced symptoms, improved quality of life, and decreased hospitalizations",
  },
  {
    name: "Cardiac Arrhythmias",
    disease: "Irregular Heart Rhythm",
    description:
      "Treatment for abnormal heart rhythms including atrial fibrillation, bradycardia, and tachycardia.",
    procedures: [
      "Electrophysiology Study - Diagnostic testing of heart's electrical system",
      "Pacemaker Implantation - Device to regulate slow heart rhythms",
      "Cardioversion - Electrical or chemical rhythm restoration",
      "Antiarrhythmic Medications - Drug therapy to maintain normal rhythm",
    ],
    outcomes: "Restored normal heart rhythm, prevention of stroke, and improved cardiac output",
  },
  {
    name: "Hypertension",
    disease: "High Blood Pressure",
    description:
      "Comprehensive management of elevated blood pressure to prevent cardiovascular complications.",
    procedures: [
      "24-Hour BP Monitoring - Ambulatory blood pressure assessment",
      "Multi-drug Therapy - Combination medications for optimal control",
      "Lifestyle Modification Counseling - Diet, exercise, and stress management",
      "End-organ Assessment - Evaluation of heart, kidney, and eye function",
    ],
    outcomes: "Controlled blood pressure, reduced risk of stroke and heart disease",
  },
  {
    name: "Valvular Heart Disease",
    disease: "Heart Valve Disorders",
    description:
      "Evaluation and management of heart valve problems including stenosis and regurgitation.",
    procedures: [
      "Echocardiography with Doppler - Detailed valve function assessment",
      "Valve Intervention Consultation - Coordination with cardiac surgeons",
      "Medical Management - Symptom control and anticoagulation if needed",
      "Serial Follow-up - Regular monitoring of valve progression",
    ],
    outcomes: "Timely intervention, symptom relief, and prevention of heart failure",
  },
];

const Specialty: React.FC = () => {
  return (
    <section id="specialty" className="section bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Disease Treatments & Procedures</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Comprehensive cardiac care with evidence-based treatment protocols and
          advanced interventional procedures
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-primary rounded-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {treatment.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {treatment.disease}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {treatment.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded" />
                    Treatment Procedures
                  </h4>
                  <ul className="space-y-2">
                    {treatment.procedures.map((procedure, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span className="text-muted-foreground">{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Expected Outcomes:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {treatment.outcomes}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;
