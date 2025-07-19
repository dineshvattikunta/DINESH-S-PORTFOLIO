import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import MobileMenu from '@/components/MobileMenu';
import heroBackground from '@/assets/hero-bg.jpg';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'DOM Manipulation', level: 87 }
    ],
    backend: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Docker', level: 78 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Database Design', level: 75 }
    ]
  };

  const projects = [
    {
      title: 'Carbon Footprint Calculator',
      description: 'Interactive web application that helps users calculate and track their environmental impact with actionable sustainability insights.',
      tech: ['React', 'JavaScript', 'CSS3', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Criminal Record Management System',
      description: 'Comprehensive database system for law enforcement agencies to manage and track criminal records efficiently.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'DataDriven Portfolio',
      description: 'Dynamic portfolio website with real-time analytics, showcasing projects and skills with interactive data visualizations.',
      tech: ['React', 'Tailwind', 'TypeScript', 'API Integration'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      date: '2024-12-15',
      excerpt: 'Learn best practices for creating maintainable and scalable React applications with modern development patterns.',
      readTime: '8 min read'
    },
    {
      title: 'Docker for Full-Stack Developers',
      date: '2024-11-28',
      excerpt: 'Complete guide to containerizing your web applications and streamlining your development workflow.',
      readTime: '12 min read'
    },
    {
      title: 'The Future of Web Development',
      date: '2024-11-10',
      excerpt: 'Exploring emerging technologies and trends that will shape the next generation of web applications.',
      readTime: '6 min read'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient-primary">DC</h1>
            <div className="hidden md:flex space-x-8">
              {['Hero', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 float">
            <img 
              src={profileAvatar} 
              alt="Vattikunta Dinesh Chowdary" 
              className="w-32 h-32 rounded-full mx-auto mb-6 glass p-1 glow-blue-hover transition-all duration-300"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-primary fade-in">
            Vattikutta Dinesh Chowdary
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-6 text-secondary slide-in-left">
            Full-Stack Web Developer
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground slide-in-right max-w-3xl mx-auto">
            "Crafting futuristic and scalable web solutions from front to back."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="glass glass-hover glow-blue-hover px-8 py-4 text-lg hover-scale"
            >
              <Code2 className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass glass-hover glow-blue-hover px-8 py-4 text-lg hover-scale border-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gradient ${isVisible.about ? 'fade-in' : ''}`}>
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.about ? 'slide-in-left' : ''}`}>
              <Card className="glass glass-hover p-8">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a passionate full-stack web developer with expertise in modern technologies like 
                    HTML, CSS, JavaScript, React, and Node.js. I love creating innovative web solutions 
                    that combine beautiful design with robust functionality.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My journey in tech is driven by curiosity and a commitment to continuous learning. 
                    I'm particularly interested in open-source contributions and building scalable 
                    applications that make a real difference.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className={`${isVisible.about ? 'slide-in-right' : ''}`}>
              <div className="space-y-6">
                <div className="glass glass-hover p-6 rounded-xl">
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground">Creating responsive, interactive user interfaces with modern frameworks and best practices.</p>
                </div>
                
                <div className="glass glass-hover p-6 rounded-xl">
                  <Database className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-muted-foreground">Building robust server-side applications, APIs, and database architectures.</p>
                </div>
                
                <div className="glass glass-hover p-6 rounded-xl">
                  <Cpu className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">DevOps & Tools</h3>
                  <p className="text-muted-foreground">Streamlining development workflows with containerization and version control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gradient ${isVisible.skills ? 'fade-in' : ''}`}>
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${isVisible.skills ? 'slide-in-left' : ''}`}>
              <Card className="glass glass-hover p-8 h-full">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl flex items-center">
                    <Globe className="mr-3 h-6 w-6 text-primary" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div className={`${isVisible.skills ? 'slide-in-right' : ''}`}>
              <Card className="glass glass-hover p-8 h-full">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl flex items-center">
                    <Database className="mr-3 h-6 w-6 text-secondary" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  {skills.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gradient ${isVisible.projects ? 'fade-in' : ''}`}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`glass glass-hover hover-scale transition-all duration-300 ${isVisible.projects ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-primary">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="flex-1 glow-blue-hover">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 glass border-primary">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gradient ${isVisible.blog ? 'fade-in' : ''}`}>
            Latest Blog Posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.title} className={`glass glass-hover hover-scale transition-all duration-300 ${isVisible.blog ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-gradient-primary line-clamp-2">{post.title}</CardTitle>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <Button size="sm" variant="outline" className="glass border-primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gradient ${isVisible.contact ? 'fade-in' : ''}`}>
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${isVisible.contact ? 'slide-in-left' : ''}`}>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and web development.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:dineshchowdary@example.com" className="flex items-center space-x-4 p-4 glass glass-hover rounded-xl hover-scale transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>dineshchowdary@example.com</span>
                </a>
                
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 glass glass-hover rounded-xl hover-scale transition-all">
                  <Github className="h-6 w-6 text-primary" />
                  <span>GitHub Profile</span>
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 glass glass-hover rounded-xl hover-scale transition-all">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            <div className={`${isVisible.contact ? 'slide-in-right' : ''}`}>
              <Card className="glass glass-hover p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="glass border-glass-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="glass border-glass-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Your Message" 
                        rows={5}
                        className="glass border-glass-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button className="w-full glow-blue-hover">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 glass border-t border-glass-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground">
                © 2025 Vattikutta Dinesh Chowdary. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="mailto:dineshchowdary@example.com" className="text-muted-foreground hover:text-primary transition-colors glow-blue-hover p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors glow-blue-hover p-2 rounded-full">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors glow-blue-hover p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <button 
              onClick={() => scrollToSection('hero')}
              className="glass glass-hover p-3 rounded-full hover-scale transition-all"
            >
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;