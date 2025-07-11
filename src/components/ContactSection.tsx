import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ripansamui2024@gmail.com',
      link: 'mailto:ripansamui2024@gmail.com',
      color: 'gradient-primary'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ripan-samui-421b882b4',
      link: 'https://linkedin.com/in/ripan-samui-421b882b4',
      color: 'gradient-secondary'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/Ripansamui099',
      link: 'https://github.com/Ripansamui099',
      color: 'gradient-accent'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="shadow-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a full-stack developer, UI/UX designer, or cybersecurity expert, 
                  I'm here to help bring your vision to reality.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((contact, index) => (
                    <div key={contact.title} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-smooth">
                      <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-foreground">{contact.title}</h4>
                        <a 
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download Resume */}
                <div className="border-t border-border pt-6">
                  <Button className="w-full gradient-secondary text-white hover:shadow-hover transition-smooth">
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </Button>
                </div>

                {/* Availability Status */}
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-800">Available for Projects</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Currently accepting new projects and collaborations. 
                    Let's discuss how I can help with your next venture!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, requirements, timeline, and budget..."
                      rows={6}
                      className="w-full resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white py-3 text-lg font-medium shadow-soft hover:shadow-hover transition-smooth disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>

                {/* Response Time Notice */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Quick Response Guaranteed:</strong> I typically respond to all inquiries within 24 hours. 
                    For urgent projects, feel free to reach out directly via email or LinkedIn.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              From concept to deployment, I'll be with you every step of the way. 
              Let's transform your ideas into powerful digital solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gradient-primary text-white px-8 py-3 shadow-soft hover:shadow-hover transition-smooth">
                Schedule a Call
              </Button>
              <Button variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white transition-smooth">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;