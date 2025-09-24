import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Zap, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-healing-sage" />,
      title: "Energy Healing",
      description: "Restore balance and harmony through gentle energy work that addresses mind, body, and spirit."
    },
    {
      icon: <Heart className="h-8 w-8 text-healing-lavender" />,
      title: "Chakra Balancing",
      description: "Align your energy centers to promote emotional wellness and spiritual clarity."
    },
    {
      icon: <Zap className="h-8 w-8 text-healing-gold" />,
      title: "Reiki Healing",
      description: "Experience the powerful healing energy of Reiki to reduce stress and promote natural healing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Healing Energy,
              <span className="block text-healing-gold">Pure Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
              Welcome to a journey of healing and spiritual awakening with Neda Javan, 
              your guide to wellness through energy healing in Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                asChild 
                size="lg" 
                className="bg-healing-gold/90 hover:bg-healing-gold text-foreground font-semibold shadow-glow"
              >
                <Link to="/contact">Book Your Session</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/about">Learn About Neda</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Healing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover transformative healing modalities designed to restore balance, 
              promote wellness, and awaken your inner light.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Neda Javan
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With years of experience in energy healing and spiritual guidance, 
                Neda brings a compassionate and intuitive approach to wellness. 
                Her mission is to help you discover your inner healing power and 
                create lasting transformation in your life.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in Australia, Neda offers both in-person and remote healing 
                sessions, making her transformative work accessible to all who seek healing.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
              >
                <Link to="/about">Read Neda's Story</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-primary rounded-lg shadow-soft"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-healing-gold/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-healing-lavender/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from those who have experienced transformation through energy healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-soft bg-card">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-healing-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Neda's healing sessions have transformed my life. I feel more balanced, 
                  peaceful, and connected to my true self than ever before."
                </p>
                <div className="font-semibold text-foreground">— Sarah M.</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-healing-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "The energy work with Neda helped me release years of emotional blocks. 
                  I'm grateful for her gentle yet powerful healing approach."
                </p>
                <div className="font-semibold text-foreground">— Michael T.</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;