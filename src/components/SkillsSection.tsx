import { Code, Palette, Smartphone, Shield, TestTube, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'JavaScript (ES6+)', level: 90, icon: Code },
    { name: 'TypeScript', level: 85, icon: Code },
    { name: 'React & Next.js', level: 92, icon: Code },
    { name: 'Node.js & Express', level: 88, icon: Code },
    { name: 'MongoDB & MySQL', level: 82, icon: Code },
    { name: 'HTML5 & CSS3', level: 95, icon: Code },
    { name: 'C/C++/C#', level: 80, icon: Code },
    { name: 'Python', level: 75, icon: Code },
  ];

  const toolsFrameworks = [
    'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 
    'GitHub', 'Figma', 'PyTorch', 'VS Code', 'Postman', 'Docker'
  ];

  const softSkills = [
    { name: 'Time Management', level: 95 },
    { name: 'Public Speaking', level: 88 },
    { name: 'Team Collaboration', level: 92 },
    { name: 'Quick Learner', level: 96 },
    { name: 'Problem Solving', level: 94 },
    { name: 'Communication', level: 90 },
  ];

  const skillCategories = [
    {
      title: 'Full Stack Development',
      icon: Code,
      color: 'gradient-primary',
      description: 'Building end-to-end web applications with modern technologies',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript']
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'gradient-secondary',
      description: 'Creating intuitive and beautiful user experiences',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'gradient-accent',
      description: 'Developing cross-platform mobile applications',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'gradient-primary',
      description: 'Ethical hacking and security implementation',
      technologies: ['Penetration Testing', 'Security Audits', 'Encryption']
    },
    {
      title: 'Software Testing',
      icon: TestTube,
      color: 'gradient-secondary',
      description: 'Ensuring quality through comprehensive testing',
      technologies: ['Unit Testing', 'Integration Testing', 'Automation']
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'gradient-accent',
      description: 'Integrating AI and ML solutions into applications',
      technologies: ['PyTorch', 'TensorFlow', 'Python', 'Data Analysis']
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies across various domains
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="shadow-card hover:shadow-hover transition-smooth animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {category.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  Technical Skills
                </h3>
                
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Tools & Frameworks */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Tools & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-smooth cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-up">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
                  <div className="p-2 gradient-secondary rounded-lg">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  Soft Skills
                </h3>
                
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Key Highlights</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hackathon enthusiast with multiple participations</li>
                    <li>• Strong foundation in cybersecurity principles</li>
                    <li>• Experienced in agile development methodologies</li>
                    <li>• Passionate about continuous learning and innovation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;