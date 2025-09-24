import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Globe, Award } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-healing-gold" />,
      title: "Certified Reiki Master",
      description: "Advanced training in traditional Reiki healing techniques"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-healing-lavender" />,
      title: "Energy Healing Specialist",
      description: "Over 10 years of experience in various energy healing modalities"
    },
    {
      icon: <Heart className="h-8 w-8 text-healing-sage" />,
      title: "Holistic Wellness Coach",
      description: "Certified in holistic approaches to mind-body-spirit wellness"
    },
    {
      icon: <Globe className="h-8 w-8 text-healing-ocean" />,
      title: "International Practice",
      description: "Serving clients across Australia and globally through remote sessions"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Neda Javan
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A compassionate healer dedicated to guiding souls on their journey 
            to wellness, balance, and spiritual awakening.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                My Healing Journey
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My path to energy healing began with my own journey of transformation. 
                  After experiencing the profound effects of energy work in my personal healing, 
                  I felt called to share this gift with others who are seeking wellness and 
                  spiritual growth.
                </p>
                <p>
                  Based in Australia, I have dedicated over a decade to studying and practicing 
                  various forms of energy healing, including Reiki, chakra balancing, and 
                  intuitive energy work. My approach combines traditional healing wisdom with 
                  modern understanding of energy and consciousness.
                </p>
                <p>
                  I believe that each person has an innate ability to heal and transform. 
                  My role is to facilitate and support this natural healing process, creating 
                  a safe and nurturing space where true healing can occur.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-secondary rounded-lg shadow-soft"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-healing-gold/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-healing-lavender/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              My Healing Philosophy
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "Healing is not about fixing what's broken, but about remembering 
              what's whole within us. Every soul carries the seeds of their own 
              transformation, waiting for the right conditions to bloom."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-8 text-center">
                  <Sparkles className="h-12 w-12 text-healing-sage mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Gentle Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Healing happens in a space of safety, trust, and gentle guidance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-healing-lavender mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Holistic Wellness
                  </h3>
                  <p className="text-muted-foreground">
                    Addressing mind, body, and spirit for complete transformation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-8 text-center">
                  <Globe className="h-12 w-12 text-healing-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Universal Connection
                  </h3>
                  <p className="text-muted-foreground">
                    We are all connected through the universal life force energy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Qualifications & Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey in energy healing is supported by extensive training, 
              certifications, and years of dedicated practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            I would be honored to support you on your path to wellness and transformation. 
            Let's work together to unlock your natural healing potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-healing-gold/90 hover:bg-healing-gold text-foreground font-semibold shadow-glow"
            >
              <Link to="/contact">Book a Session</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;