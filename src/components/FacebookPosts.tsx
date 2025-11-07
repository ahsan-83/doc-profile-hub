import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaFacebook, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

interface FacebookPost {
  id: number;
  date: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

const FacebookPosts = () => {
  const posts: FacebookPost[] = [
    {
      id: 1,
      date: "March 15, 2024",
      content: "Early detection saves lives! Regular cardiac checkups can prevent serious heart conditions. Book your consultation today.",
      likes: 245,
      comments: 32,
      shares: 18,
    },
    {
      id: 2,
      date: "March 10, 2024",
      content: "Proud to share that we successfully performed a complex coronary angioplasty procedure today. The patient is recovering well. #CardiacCare",
      likes: 389,
      comments: 56,
      shares: 42,
    },
    {
      id: 3,
      date: "March 5, 2024",
      content: "Heart health tips: 1) Exercise regularly 2) Maintain healthy diet 3) Manage stress 4) Get adequate sleep 5) Regular checkups",
      likes: 512,
      comments: 78,
      shares: 156,
    },
    {
      id: 4,
      date: "February 28, 2024",
      content: "Attended the International Cardiology Conference. Excited to bring the latest advancements in cardiac care to our patients.",
      likes: 298,
      comments: 45,
      shares: 23,
    },
    {
      id: 5,
      date: "February 20, 2024",
      content: "World Heart Day reminder: Your heart is the engine of your body. Take care of it with regular exercise and a balanced diet.",
      likes: 421,
      comments: 67,
      shares: 89,
    },
  ];

  return (
    <section id="facebook" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaFacebook className="text-4xl text-[#1877F2]" />
            <h2 className="text-4xl font-bold text-foreground">Facebook Updates</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the latest updates, health tips, and insights
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {posts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardDescription className="text-xs">{post.date}</CardDescription>
                      <CardTitle className="text-lg line-clamp-2">Facebook Post</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 line-clamp-4">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground border-t pt-4">
                        <div className="flex items-center gap-2">
                          <FaThumbsUp className="text-[#1877F2]" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaComment className="text-muted-foreground" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaShare className="text-muted-foreground" />
                          <span>{post.shares}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FacebookPosts;
