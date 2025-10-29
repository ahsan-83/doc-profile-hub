import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaClock } from "react-icons/fa";

interface Location {
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapLink: string;
}

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="shadow-md" style={{ background: "#0284C7" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <MapPin
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  style={{ color: "white" }}
                />
                <div>
                  <p className="text-gray-700" style={{ color: "white" }}>
                    123 Medical Center Dr, Boston, MA 02114
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Phone
                  className="h-5 w-5 text-medical flex-shrink-0"
                  style={{ color: "white" }}
                />
                <a
                  href={`phone`}
                  className="text-gray-700"
                  style={{ color: "white" }}
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Mail
                  className="h-5 w-5 text-medical flex-shrink-0"
                  style={{ color: "white" }}
                />
                <a
                  href={`email`}
                  className="text-gray-700"
                  style={{ color: "white" }}
                >
                  dr.smith@example.com
                </a>
              </div>
              <div className="items-center gap-3 mb-3">
                <div className="flex gap-3">
                  <FaClock
                    className="h-5 w-5 text-medical flex-shrink-0"
                    style={{ color: "white" }}
                  />
                  <p style={{ color: "white" }}>Office Hours</p>
                </div>
                <p className="text-white mb-1" style={{ paddingLeft: "30px" }}>
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
                <p className="text-white mb-1" style={{ paddingLeft: "30px" }}>
                  Saturday: 9:00 AM - 1:00 PM
                </p>
                <p className="text-white" style={{ paddingLeft: "30px" }}>
                  Sunday: Closed
                </p>
              </div>
              <div className="mt-6 flex">
                <h3
                  className="font-semibold mb-3"
                  style={{
                    color: "white",
                    paddingRight: "40px",
                    textAlign: "center",
                  }}
                >
                  Follow Dr. Smith
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="h-64 md:h-auto rounded-lg overflow-hidden border border-gray-200">
            <iframe
              title={`Map to 123 Medical Center Dr`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215279883767!2d-73.98657222462116!3d40.74844597138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x4170c8d25c4c37fa!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1687584337238!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
