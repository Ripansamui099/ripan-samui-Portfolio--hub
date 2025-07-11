import { ArrowRight, Download, Code, Database, Smartphone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const techStack = [
    { icon: Code, name: 'React', color: 'text-blue-500' },
    { icon: Database, name: 'Node.js', color: 'text-green-500' },
    { icon: Database, name: 'MongoDB', color: 'text-green-600' },
    { icon: Smartphone, name: 'React Native', color: 'text-blue-600' },
    { icon: Shield, name: 'Cybersecurity', color: 'text-red-500' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-hero relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 gradient-secondary rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 gradient-accent rounded-full opacity-10 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <p className="text-primary font-medium mb-2 animate-fade-in">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
                <span className="text-gradient-primary">Ripan</span>{' '}
                <span className="text-foreground">Samui</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground mb-6">
                Designing Innovation | Building Secure & Smart Solutions
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A passionate tech enthusiast who excels where creativity meets logic. From ethical hacking to designing smooth full-stack applications, I create solutions that are both secure and smart.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={() => scrollToSection('contact')}
                className="gradient-primary text-white px-8 py-3 text-lg font-medium shadow-soft hover:shadow-hover transition-smooth group"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="px-8 py-3 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                View Projects
              </Button>
            </div>

            {/* Floating Tech Stack */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tech.icon className={`h-5 w-5 ${tech.color}`} />
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 gradient-primary rounded-full opacity-20 animate-float"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-hover flex items-center justify-center">
                  <img
                    src="/lovable-uploads/eb6d0a19-86e3-4ab1-a27f-038064d09786.png"
                    alt="Ripan Samui - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-secondary text-white p-3 rounded-full shadow-card animate-bounce-slow">
                <Code className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-3 rounded-full shadow-card animate-float">
                <Database className="h-6 w-6" />
              </div>
              <div className="absolute top-1/2 -left-8 bg-primary text-white p-2 rounded-full shadow-card animate-bounce-slow">
                <Shield className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;