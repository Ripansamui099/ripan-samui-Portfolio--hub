import { Code, Palette, Smartphone, Shield, TestTube, Brain, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Full Stack Web Development',
      icon: Code,
      color: 'gradient-primary',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and MongoDB. I create scalable, performant, and user-friendly web solutions.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development'],
      price: 'Starting at $2000'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'gradient-secondary',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience. From wireframes to high-fidelity prototypes and design systems.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $800'
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      color: 'gradient-accent',
      description: 'Cross-platform mobile application development using React Native and Flutter. Building native-quality apps for both iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Cross-platform', 'App Store Deployment'],
      price: 'Starting at $3000'
    },
    {
      title: 'Ethical Hacking & Cybersecurity',
      icon: Shield,
      color: 'gradient-primary',
      description: 'Comprehensive security audits, penetration testing, and implementation of security best practices to protect your digital assets and applications.',
      features: ['Penetration Testing', 'Security Audits', 'Vulnerability Assessment', 'Security Training'],
      price: 'Starting at $1500'
    },
    {
      title: 'Software Testing & QA',
      icon: TestTube,
      color: 'gradient-secondary',
      description: 'Thorough testing strategies including unit testing, integration testing, and automated testing to ensure your software is reliable and bug-free.',
      features: ['Automated Testing', 'Performance Testing', 'Quality Assurance', 'Test Documentation'],
      price: 'Starting at $1000'
    },
    {
      title: 'Machine Learning Integration',
      icon: Brain,
      color: 'gradient-accent',
      description: 'Integrating AI and machine learning capabilities into your applications using PyTorch and TensorFlow for intelligent, data-driven solutions.',
      features: ['AI Integration', 'Data Analysis', 'Predictive Models', 'Custom ML Solutions'],
      price: 'Starting at $2500'
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs. From concept to deployment, I deliver excellence in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="shadow-card hover:shadow-hover transition-smooth animate-scale-in group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Service Icon & Title */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3 text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-heading font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full gradient-primary text-white hover:shadow-hover transition-smooth group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together. 
              I'm here to turn your vision into reality with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="gradient-primary text-white px-8 py-3 text-lg font-medium shadow-soft hover:shadow-hover transition-smooth"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="px-8 py-3 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;