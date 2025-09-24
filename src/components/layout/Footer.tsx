import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NJ</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Neda Javan</span>
            </div>
            <p className="text-muted-foreground">
              Guiding you on your journey to wellness and spiritual healing through
              energy work and holistic practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@nedajavan.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+61 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© 2024 Neda Javan. Made with</span>
            <Heart className="h-4 w-4 text-healing-gold" />
            <span>for healing and wellness</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;