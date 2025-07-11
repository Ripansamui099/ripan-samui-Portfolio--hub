import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Rental Car Booking System',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      description: 'A comprehensive car rental platform with real-time booking, payment integration, and fleet management system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Express'],
      features: ['Real-time booking', 'Payment gateway', 'Admin dashboard', 'Mobile responsive'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Smart Secure Home System',
      category: 'Embedded',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'IoT-based home automation system with security features, remote monitoring, and mobile app control.',
      technologies: ['Arduino', 'React Native', 'Firebase', 'IoT', 'Python'],
      features: ['Remote monitoring', 'Security alerts', 'Mobile app', 'Voice control'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Traffic Light & Road Safety App',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      description: 'AI-powered mobile application for learning road safety rules with interactive simulations and quizzes.',
      technologies: ['Flutter', 'TensorFlow', 'Python', 'Computer Vision', 'Firebase'],
      features: ['AI recognition', 'Interactive learning', 'Progress tracking', 'Offline mode'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Autonomous Traffic Control',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      description: 'Machine learning system for intelligent traffic light control based on real-time traffic density analysis.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'Computer Vision'],
      features: ['Real-time analysis', 'Adaptive timing', 'Traffic optimization', 'Data analytics'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Secure Cryptographic System',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      description: 'Advanced encryption and decryption system with multiple algorithms and secure key management.',
      technologies: ['Python', 'React', 'Cryptography', 'Node.js', 'JWT'],
      features: ['Multiple algorithms', 'Secure key storage', 'User authentication', 'Audit logs'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'RIDE ALIGN - Dynamic Ride Sharing',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      description: 'Dynamic ride-sharing platform with real-time matching, route optimization, and integrated payment system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io'],
      features: ['Real-time matching', 'Route optimization', 'In-app payments', 'Rating system'],
      liveLink: '#',
      githubLink: '#'
    },
  ];

  const categories = ['All', 'Web', 'Embedded', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my portfolio of innovative solutions across web development, embedded systems, and AI applications
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-6 py-2 transition-smooth ${
                  activeFilter === category
                    ? 'gradient-primary text-white shadow-soft'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="shadow-card hover:shadow-hover transition-smooth animate-scale-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-primary text-white hover:shadow-hover transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            className="gradient-secondary text-white px-8 py-3 text-lg font-medium shadow-soft hover:shadow-hover transition-smooth"
          >
            <Github className="h-5 w-5 mr-2" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;