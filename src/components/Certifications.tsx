import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { PiCertificateFill } from "react-icons/pi";
import { MdCardMembership } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";

interface Certification {
  title: string;
  organization: string;
  year: string;
}

interface Membership {
  organization: string;
  role?: string;
  year: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
}

const certifications: Certification[] = [
  {
    title: "Board Certification in Cardiovascular Disease",
    organization: "American Board of Internal Medicine",
    year: "2011",
  },
  {
    title: "Board Certification in Interventional Cardiology",
    organization: "American Board of Internal Medicine",
    year: "2012",
  },
  {
    title: "Advanced Cardiac Life Support (ACLS)",
    organization: "American Heart Association",
    year: "2022",
  },
  {
    title: "Certified in Echocardiography",
    organization: "National Board of Echocardiography",
    year: "2013",
  },
];

const memberships: Membership[] = [
  {
    organization: "American College of Cardiology (ACC)",
    role: "Fellow",
    year: "Since 2012",
  },
  {
    organization: "American Heart Association (AHA)",
    role: "Member",
    year: "Since 2010",
  },
  {
    organization: "Society for Cardiovascular Angiography and Interventions",
    role: "Member",
    year: "Since 2013",
  },
];

const awards: Award[] = [
  {
    title: "Excellence in Patient Care Award",
    organization: "Memorial Hospital",
    year: "2020",
  },
  {
    title: "Top Cardiologist",
    organization: "National Medical Association",
    year: "2019",
  },
  {
    title: "Research Achievement Award",
    organization: "American Heart Association",
    year: "2016",
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications & Achievements</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center">
                <PiCertificateFill className="h-6 w-6 text-medical mr-2" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3">
                    <p className="font-medium text-gray-900">{cert.title}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <span>{cert.organization}</span> •{" "}
                      <span>{cert.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Professional Memberships */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center">
                <MdCardMembership className="h-6 w-6 text-medical mr-2" />
                <h3 className="text-xl font-semibold">
                  Professional Memberships
                </h3>
              </div>
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3">
                    <p className="font-medium text-gray-900">
                      {membership.organization}
                    </p>
                    <div className="text-sm text-gray-600 mt-1">
                      {membership.role && <span>{membership.role} • </span>}
                      <span>{membership.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Awards & Accomplishments */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center">
                <GrAchievement className="h-6 w-6 text-medical mr-2" />
                <h3 className="text-xl font-semibold">
                  Awards & Accomplishments
                </h3>
              </div>
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3">
                    <p className="font-medium text-gray-900">{award.title}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <span>{award.organization}</span> •{" "}
                      <span>{award.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
