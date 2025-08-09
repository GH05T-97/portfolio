'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Cloud, Shield, Layers, Brain, Zap, Search, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'interests', 'current-focus', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Expert in AWS services such as SNS, SQS, EventBridge, and scalable cloud-native solutions. Strong knowledge of multi-cloud strategies with other vendors like DigitalOcean, Akamai Cloud and Linode to prevent vendor lock-in and optimize cost control.",
      technologies: ["AWS", "DigitalOcean", "Akamai", "Linode", "EventBridge"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Event Driven Architecture",
      description: "Designed real-time systems with MySQL change streams, event-driven microservices, and distributed processing patterns for high-throughput applications.",
      technologies: ["EventBridge", "MySQL Streams", "Event Sourcing", "SNS", "SQS"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end development from React frontends to Node.js backends, with expertise in TypeScript, testing, and modern development practices.",
      technologies: ["React", "Node.js", "TypeScript", "Next.js", "Jest"]
    },
  ];

  const interests = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Infrastructure",
      description: "Designing and architecting AI/ML solutions using AWS Native services (SageMaker) and 3rd party vendors (HyperStack) - identifying trade offs between vendor lock in, variety of services and cost control.",
      focus: ["Document Intelligence", "Vector Databases", "ML Pipelines"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Low Latency Engineering",
      description: "Optimizing system performance, reducing response times through caching strategies, and building efficient API's inspired by high frequency trading techniques.",
      focus: ["Performance Optimization", "Caching", "Real-time Systems"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Open Source Intelligence",
      description: "Using Generative AI platforms for data scraping and report analysis, experimenting with Shodan for infrastructure reconnaissance, and applying AI-driven techniques for security research and threat intelligence.",
      focus: ["AI-Powered Analysis", "Infrastructure Research", "Threat Intelligence"]
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Zubair Maqsood
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Skills', 'Interests', 'Current Focus', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase().replace(' ', '-')
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {['Skills', 'Interests', 'Current Focus', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Senior Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building scalable cloud architectures and event-driven systems that power modern applications at scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <span className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                zubairmaqsood866@gmail.com
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-600">London, UK</span>
            </div>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="http://linkedin.com/in/zubairmaqsood/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="http://github.com/GH05T-97" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://medium.com/@zubairmaqsood866" className="text-gray-600 hover:text-blue-600 transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('skills')}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore My Work
            <ChevronDown className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise in modern cloud technologies and architectural patterns that drive business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl text-blue-600 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{skill.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Interests
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exploring cutting-edge technologies and pushing the boundaries of what's possible
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl text-indigo-600 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors mb-4">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{interest.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">{interest.description}</p>
                <div className="space-y-2">
                  {interest.focus.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Looking At Section */}
      <section id="current-focus" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Currently Looking At
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Exploring cutting-edge technologies to push the boundaries of cloud performance and intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold ml-4">AI Infrastructure</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-purple-200 mb-2">RAG (Retrieval Augmented Generation)</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Building sophisticated retrieval systems with vector databases, embedding optimization, and context-aware document processing for enterprise AI applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold ml-4">High Frequency Trading Techniques</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-lg font-semibold text-yellow-200 mb-2">Exploring Golang and Rust</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Learning systems programming languages for maximum performance, memory safety, and concurrent programming patterns in distributed systems.
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="text-lg font-semibold text-red-200 mb-2">Memory Ordering & NUMA Design</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Studying CPU cache optimization, memory ordering guarantees, and NUMA-aware architectures for ultra-low latency distributed systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Integration Section */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                What is Possible?
              </h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Integrating these advanced techniques to create next-generation cloud solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-purple-400/30">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6 text-purple-300" />
                </div>
                <h4 className="font-semibold text-purple-200 mb-2">High-Performance RAG</h4>
                <p className="text-sm text-blue-100">
                  Building sub-millisecond vector search systems using memory-mapped databases and NUMA-optimized compute clusters
                </p>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-xl border border-orange-400/30">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-orange-300" />
                </div>
                <h4 className="font-semibold text-orange-200 mb-2">Ultra-Low Latency APIs</h4>
                <p className="text-sm text-blue-100">
                  Applying trading system techniques to cloud APIs: custom protocols, kernel bypass, and predictable garbage collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading technical initiatives across healthcare, fintech, and enterprise solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Senior Software Engineer</h3>
                <span className="text-blue-600 font-medium">MadeTech • Apr 2025 - Present</span>
              </div>
              <p className="text-gray-600 mb-4">
                Leading architectural vision for healthcare platform serving 100k+ users, focusing on regulatory compliance and scalable real-time systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Technical Leadership", "Healthcare Compliance", "Real-time Systems", "Team Mentoring"].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Enterprise Document Intelligence Platform</h3>
                <span className="text-indigo-600 font-medium">Current Project</span>
              </div>
              <p className="text-gray-600 mb-4">
                Architected end-to-end document processing pipeline using AWS Textract, Comprehend, and SageMaker with sophisticated embedding systems for intelligent document retrieval.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS AI Services", "Vector Databases", "Document Processing", "Machine Learning"].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Interested in discussing cloud architecture, event-driven systems, or the latest in AI infrastructure? Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:zubairmaqsood866@gmail.com"
              className="flex items-center px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-colors font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <a
              href="http://linkedin.com/in/zubairmaqsood/"
              className="flex items-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>

          <p className="text-blue-200">
            Available for consulting • London, UK • Remote friendly
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 Zubair Maqsood. Built with Next.js and passion for great architecture.</p>
      </footer>
    </div>
  );
};

export default Portfolio;