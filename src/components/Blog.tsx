import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  type: "article" | "video";
  title: string;
  description: string;
  date: string;
  category: string;
  link?: string;
  thumbnail?: string;
}

const blogPosts: BlogPost[] = [
  {
    type: "article",
    title: "Understanding Heart Disease: Prevention and Early Detection",
    description:
      "Learn about the key risk factors for heart disease and how early detection can save lives. Discover lifestyle modifications and screening tests that every adult should know about.",
    date: "March 15, 2024",
    category: "Prevention",
  },
  {
    type: "video",
    title: "What to Expect During a Cardiac Catheterization",
    description:
      "A comprehensive walkthrough of the cardiac catheterization procedure, from preparation to recovery. This video helps patients understand what happens during this common diagnostic test.",
    date: "March 10, 2024",
    category: "Procedures",
  },
  {
    type: "article",
    title: "Managing Hypertension: Beyond Medication",
    description:
      "Explore the holistic approach to managing high blood pressure, including dietary changes, exercise routines, stress management techniques, and the role of medication.",
    date: "March 5, 2024",
    category: "Treatment",
  },
  {
    type: "video",
    title: "Heart Attack Warning Signs You Shouldn't Ignore",
    description:
      "Critical information about recognizing heart attack symptoms in both men and women. Understanding these signs can help you act quickly and potentially save a life.",
    date: "February 28, 2024",
    category: "Emergency Care",
  },
  {
    type: "article",
    title: "Living Well with Heart Failure: A Patient's Guide",
    description:
      "Practical advice for patients living with heart failure, covering medication management, dietary guidelines, physical activity recommendations, and when to seek medical attention.",
    date: "February 20, 2024",
    category: "Patient Education",
  },
  {
    type: "video",
    title: "Advances in Interventional Cardiology",
    description:
      "Discover the latest minimally invasive procedures and technologies used in treating heart conditions, including newer stent designs and catheter-based interventions.",
    date: "February 15, 2024",
    category: "Innovation",
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Educational Content</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Stay informed with the latest insights on cardiovascular health,
          treatment options, and patient care
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 group cursor-pointer border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant={post.type === "video" ? "default" : "secondary"}
                    className="capitalize"
                  >
                    {post.type === "video" ? "📹 Video" : "📄 Article"}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to stay updated with the latest cardiovascular health information?
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
