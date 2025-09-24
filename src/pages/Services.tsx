import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Zap, Eye, Waves, Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-12 w-12 text-healing-sage" />,
      title: "Energy Healing Sessions",
      duration: "60-90 minutes",
      price: "From $120",
      description: "Comprehensive energy healing sessions that work with your body's natural energy systems to restore balance, release blockages, and promote deep healing at all levels.",
      benefits: [
        "Stress reduction and relaxation",
        "Emotional balance and clarity",
        "Physical tension relief",
        "Spiritual alignment and growth"
      ]
    },
    {
      icon: <Heart className="h-12 w-12 text-healing-lavender" />,
      title: "Chakra Balancing",
      duration: "75 minutes",
      price: "From $100",
      description: "A focused session to align and balance your seven main chakras, clearing energy blocks and restoring the natural flow of life force energy throughout your body.",
      benefits: [
        "Improved energy flow",
        "Enhanced emotional stability",
        "Greater self-awareness",
        "Increased vitality and well-being"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-healing-gold" />,
      title: "Reiki Healing",
      duration: "60 minutes",
      price: "From $90",
      description: "Traditional Reiki healing using gentle touch and energy channeling to activate your body's natural healing abilities and promote deep relaxation and restoration.",
      benefits: [
        "Deep relaxation and peace",
        "Pain and tension relief",
        "Improved sleep quality",
        "Enhanced immune function"
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-healing-ocean" />,
      title: "Intuitive Energy Reading",
      duration: "45 minutes",
      price: "From $80",
      description: "An insightful session where I tune into your energy field to provide guidance, clarity, and understanding about your current life situation and spiritual path.",
      benefits: [
        "Clarity on life direction",
        "Understanding of energy patterns",
        "Spiritual guidance and insight",
        "Validation and confirmation"
      ]
    },
    {
      icon: <Waves className="h-12 w-12 text-healing-sage" />,
      title: "Remote/Distance Healing",
      duration: "60 minutes",
      price: "From $85",
      description: "Experience the power of energy healing from anywhere in the world. Distance healing sessions are just as effective as in-person treatments.",
      benefits: [
        "Convenient from your own space",
        "Same effectiveness as in-person",
        "Perfect for busy schedules",
        "Available globally"
      ]
    },
    {
      icon: <Sun className="h-12 w-12 text-healing-gold" />,
      title: "Healing Packages",
      duration: "Multiple sessions",
      price: "From $300",
      description: "Comprehensive healing packages designed for deeper transformation. Includes multiple sessions over 4-6 weeks for sustained healing and growth.",
      benefits: [
        "Deep, lasting transformation",
        "Ongoing support and guidance",
        "Better value for multiple sessions",
        "Customized healing journey"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Healing Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Transform your life through powerful energy healing modalities designed 
            to restore balance, promote wellness, and awaken your inner light.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-2xl text-foreground">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{service.duration}</span>
                        <span>•</span>
                        <span className="text-healing-gold font-semibold">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-healing-sage rounded-full flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
                  >
                    <Link to="/contact">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How Energy Healing Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the gentle yet powerful process of energy healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-healing-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-healing-sage">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Initial Consultation
                </h3>
                <p className="text-muted-foreground">
                  We begin with a conversation about your needs, concerns, and healing goals 
                  to create a personalized session plan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-healing-lavender/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-healing-lavender">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Energy Assessment
                </h3>
                <p className="text-muted-foreground">
                  I tune into your energy field to identify areas of imbalance, 
                  blockages, or areas that need attention and healing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-healing-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-healing-gold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Healing & Integration
                </h3>
                <p className="text-muted-foreground">
                  Through gentle energy work, we restore balance and flow, 
                  followed by integration and guidance for your continued healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the service that resonates with you, or let's discuss which 
            approach would be most beneficial for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/contact">Book a Session</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/faq">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;