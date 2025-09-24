import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Sydney, Australia",
      service: "Energy Healing Session",
      rating: 5,
      text: "Neda's healing sessions have been transformational for me. I came to her feeling lost and emotionally drained, and after just a few sessions, I feel like I've rediscovered my inner strength and purpose. Her gentle yet powerful approach created a safe space for deep healing to occur.",
      date: "March 2024"
    },
    {
      name: "Michael Thompson",
      location: "Melbourne, Australia",
      service: "Chakra Balancing",
      rating: 5,
      text: "I was skeptical about energy work at first, but Neda's expertise and compassionate nature quickly put me at ease. The chakra balancing session helped me release years of accumulated stress and tension. I left feeling lighter, more balanced, and with a renewed sense of clarity.",
      date: "February 2024"
    },
    {
      name: "Emma Rodriguez",
      location: "Brisbane, Australia",
      service: "Reiki Healing",
      rating: 5,
      text: "Working with Neda has been one of the best decisions I've made for my wellbeing. Her Reiki sessions have helped me manage chronic pain and anxiety in ways that traditional medicine couldn't. I always leave feeling peaceful, centered, and renewed.",
      date: "January 2024"
    },
    {
      name: "David Chen",
      location: "Perth, Australia",
      service: "Distance Healing",
      rating: 5,
      text: "I was amazed by how effective the distance healing sessions were. Despite being hundreds of kilometers away, I could feel the energy work happening in real-time. Neda's ability to connect and heal remotely is truly remarkable. My sleep improved dramatically after our sessions.",
      date: "March 2024"
    },
    {
      name: "Lisa Anderson",
      location: "Adelaide, Australia",
      service: "Intuitive Energy Reading",
      rating: 5,
      text: "Neda's intuitive reading provided exactly the guidance I needed at a crossroads in my life. Her insights were incredibly accurate and helped me understand patterns I couldn't see myself. The session gave me the clarity and confidence to make important life changes.",
      date: "February 2024"
    },
    {
      name: "James Wilson",
      location: "Gold Coast, Australia",
      service: "Healing Package",
      rating: 5,
      text: "The healing package with Neda was life-changing. Over the course of six weeks, I experienced profound shifts in my emotional wellbeing and spiritual awareness. Her ongoing support and guidance throughout the process made all the difference. I feel like a completely new person.",
      date: "January 2024"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Hear from those who have experienced profound transformation through 
            energy healing with Neda Javan.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-healing-sage mb-2">500+</div>
              <div className="text-muted-foreground">Healing Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-healing-lavender mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-healing-gold mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-healing-gold fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-healing-sage/30" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                        <div className="text-sm text-healing-sage">
                          {testimonial.service}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Experience Your Own Transformation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the hundreds of clients who have found healing, balance, and 
            renewed vitality through energy healing with Neda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/contact">Book Your Session</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;