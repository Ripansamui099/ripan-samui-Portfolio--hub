import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gradient-primary">
              Ripan Samui
            </h3>
            <p className="text-background/80 leading-relaxed">
              Passionate tech enthusiast specializing in Full Stack Development, 
              UI/UX Design, and Cybersecurity. Building secure and smart solutions 
              for the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const section = document.getElementById(link.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>ripansamui2024@gmail.com</p>
              <p>Available for freelance projects</p>
              <p>Quick response guaranteed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © {currentYear} Ripan Samui. Made with <Heart className="h-4 w-4 inline text-red-500" /> and passion for technology.
            </p>
            
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-background/10 hover:bg-background/20 text-background border-background/20"
              variant="outline"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;