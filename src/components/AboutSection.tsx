import { GraduationCap, Briefcase, Heart, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "B.Tech (Computer Science)",
      period: "2023 - 2027 (Ongoing)",
      status: "Current"
    },
    {
      institution: "NWAC, USA",
      degree: "Class 12",
      period: "2021 - 2023",
      grade: "74.9%"
    }
  ];

  const experience = [
    {
      title: "Java Programming Intern",
      company: "The Website Makers",
      period: "Feb 2024 - July 2024",
      type: "Internship"
    },
    {
      title: "Participant",
      company: "AI Workshops, IETE Amrita Student Forum",
      period: "2023 - Present",
      type: "Workshop"
    }
  ];

  const hobbies = [
    "Coding", "Hackathons", "Designing UI/UX", "Story Writing", 
    "Gaming", "Dancing", "Reading"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Bio */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 gradient-primary rounded-lg">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold">My Story</h3>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate tech person who excels where creativity meets logic. From immersing myself in ethical hacking to designing smooth full-stack applications, I enjoy creating solutions that are secure as well as smart.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey spans across multiple domains - from crafting intuitive user interfaces to building robust backend systems, developing mobile applications, and ensuring cybersecurity best practices. Each project is an opportunity to blend innovation with functionality.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Hackathons are my playground of creativity where I bring concepts to life by working on problems together with teams, driven by constant curiosity and the desire to make technology more accessible and secure for everyone.
              </p>
            </div>
          </div>

          {/* Education, Experience & Hobbies */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 gradient-secondary rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">Education</h3>
                </div>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                        {edu.status && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">{edu.period}</span>
                        {edu.grade && (
                          <span className="text-xs font-medium text-primary">{edu.grade}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 gradient-accent rounded-lg">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">Experience</h3>
                </div>
                
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-secondary/20 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 gradient-primary rounded-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">Hobbies & Interests</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-white transition-smooth cursor-default"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;