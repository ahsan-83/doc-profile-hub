import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone } from "lucide-react";

interface Location {
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapLink: string;
}

const locations: Location[] = [
  {
    name: "Main Office - Memorial Hospital",
    address: "123 Medical Center Dr, Boston, MA 02114",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    phone: "(555) 123-4567",
    mapLink: "https://maps.google.com",
  },
  {
    name: "Downtown Clinic",
    address: "456 Health Avenue, Boston, MA 02108",
    hours: "Tue, Thu: 9:00 AM - 4:00 PM",
    phone: "(555) 987-6543",
    mapLink: "https://maps.google.com",
  },
  {
    name: "Downtown Clinic",
    address: "456 Health Avenue, Boston, MA 02108",
    hours: "Tue, Thu: 9:00 AM - 4:00 PM",
    phone: "(555) 987-6543",
    mapLink: "https://maps.google.com",
  },
];

const Consultation: React.FC = () => {
  return (
    <section id="consultation" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Consultation Locations</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Locations */}
          {locations.map((location, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h4
                  className="text-lg font-medium text-medical-dark mb-2"
                  style={{ textAlign: "center", paddingBottom: "10px" }}
                >
                  {location.name}
                </h4>

                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-medical flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-700">{location.address}</p>
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-medical hover:underline text-sm inline-block mt-1"
                    >
                      View on Map
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-5 w-5 text-medical flex-shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                    className="text-gray-700"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="bg-gray-50 p-3 rounded-md mt-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Office Hours:
                  </p>
                  <p className="text-sm text-gray-700">{location.hours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
