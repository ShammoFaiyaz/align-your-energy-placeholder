import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      preferredTime: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to begin your healing journey? I'm here to answer your questions 
            and help you take the first step toward transformation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-soft bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
                  <Send className="h-6 w-6 text-healing-sage" />
                  <span>Book a Session</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours to schedule your healing session.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energy-healing">Energy Healing Session</SelectItem>
                        <SelectItem value="chakra-balancing">Chakra Balancing</SelectItem>
                        <SelectItem value="reiki">Reiki Healing</SelectItem>
                        <SelectItem value="intuitive-reading">Intuitive Energy Reading</SelectItem>
                        <SelectItem value="distance-healing">Distance/Remote Healing</SelectItem>
                        <SelectItem value="healing-package">Healing Package</SelectItem>
                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                        <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                        <SelectItem value="weekend">Weekend</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about what you're hoping to achieve through healing, any specific concerns, or questions you have..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-healing-sage mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Email</div>
                        <div className="text-muted-foreground">hello@nedajavan.com</div>
                        <div className="text-sm text-muted-foreground">I respond within 24 hours</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-healing-lavender mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Phone</div>
                        <div className="text-muted-foreground">+61 XXX XXX XXX</div>
                        <div className="text-sm text-muted-foreground">Text or call for urgent inquiries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-healing-gold mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Location</div>
                        <div className="text-muted-foreground">Australia</div>
                        <div className="text-sm text-muted-foreground">In-person and distance sessions available</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-healing-ocean" />
                    <span>Session Hours</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-healing-sage/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Evening and weekend appointments available by special request. 
                      Distance healing sessions can be scheduled outside regular hours to accommodate different time zones.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft bg-gradient-secondary">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    First Time Client?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    New clients receive a complimentary 15-minute consultation to discuss 
                    your needs and determine the best healing approach for you.
                  </p>
                  <Button 
                    asChild 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a href="mailto:hello@nedajavan.com">Schedule Consultation</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;