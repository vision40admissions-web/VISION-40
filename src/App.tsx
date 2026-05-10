import { motion } from 'motion/react';
import { 
  ArrowRight, BookOpen, MapPin, Phone, Mail, Award, Users, 
  Activity, CheckCircle, GraduationCap, Home, HeartPulse, 
  ChevronRight, Stethoscope, BookCheck, MessageCircle, Star,
  FileText, CheckCircle2, Search
} from 'lucide-react';
import { useState, useEffect } from 'react';
import directorImage from './assets/images/regenerated_image_1778348455867.jpg';
import aboutImage from './assets/images/regenerated_image_1778347876691.jpg';

import shahinImage from './assets/images/regenerated_image_1778347810868.jpg';
import sikanderImage from './assets/images/regenerated_image_1778348577455.jpg';
import azherImage from './assets/images/regenerated_image_1778428382408.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Stethoscope className={`w-8 h-8 ${scrolled ? 'text-medical-dark' : 'text-white'}`} />
          <div>
            <h1 className={`font-display font-bold text-2xl tracking-tight leading-none ${scrolled ? 'text-medical-dark' : 'text-white'}`}>
              VISION<span className="text-vision-red">40</span>
            </h1>
            <p className={`text-[10px] tracking-widest uppercase font-semibold ${scrolled ? 'text-gray-500' : 'text-gray-200'}`}>
              Sankalp Se Selection Tak
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Courses', 'Campus', 'Results', 'Admissions'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-medical-primary transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
              {item}
            </a>
          ))}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXZ3LY7zMiw8V-dwaHTD4vRYj1c-WFxRZw4OvoIKcj4mmTSA/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="bg-vision-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-medical-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXZ3LY7zMiw8V-dwaHTD4vRYj1c-WFxRZw4OvoIKcj4mmTSA/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="block w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000" 
            alt="NEET Student studying" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark via-medical-dark/90 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="flex w-2 h-2 rounded-full bg-vision-red animate-pulse"></span>
            <span className="text-white text-xs font-semibold tracking-wider uppercase">Admissions Open 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
            Sankalp Se <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-primary to-emerald-300">Selection Tak</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-lg font-light leading-relaxed">
            Patna's premium residential NEET coaching institute empowering future doctors through traditional Gurukul discipline, expert mentorship, and focused preparation.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXZ3LY7zMiw8V-dwaHTD4vRYj1c-WFxRZw4OvoIKcj4mmTSA/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="bg-medical-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQKURfYtdvZeGx5CROQsi74OLszhsuLsKp4S86umq0zpvnBg/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm">
              Book Counseling
            </a>
          </div>
        </motion.div>

        {/* Floating Achievement Cards */}
        <div className="hidden md:block relative h-[500px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-20 left-10 glass border border-white/50 p-6 rounded-2xl w-72 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="bg-medical-primary p-3 rounded-full">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-ink text-xl font-display font-bold">100% Residential</p>
                <p className="text-gray-600 text-sm">Competitive Environment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { icon: <Users />, value: "Fully\nExperienced", label: "Expert Faculties" },
    { icon: <BookCheck />, value: "NEET\nOriented", label: "Regular Tests" },
    { icon: <Home />, value: "24/7", label: "Academic Campus" },
    { icon: <HeartPulse />, value: "24 Hrs", label: "Health Facilities" }
  ];

  return (
    <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-medical-light text-medical-primary mb-4 group-hover:scale-110 group-hover:bg-medical-primary group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className={`font-display font-bold text-ink mb-1 whitespace-pre-line ${stat.value.length > 10 ? 'text-2xl' : 'text-4xl'}`}>{stat.value}</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wide text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-medical-primary/10 rounded-[40px] transform -rotate-3 scale-105"></div>
            <img 
              src={aboutImage} 
              alt="Medical Preparation" 
              className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-vision-red text-white p-8 rounded-3xl shadow-xl z-20 max-w-xs">
              <p className="font-serif italic text-xl">"True preparation requires isolation from distraction and devotion to purpose."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-medical-primary font-bold tracking-widest uppercase text-sm mb-2">About VISION 40</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
                Modern Education with <br />
                <span className="text-medical-dark font-serif italic font-normal">Competitive Environment</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              VISION 40 was born from a singular mission: to provide students from Bihar and nearby regions a focused, distraction-free environment to prepare for NEET. We combine the rigorous academic standards of India's top coaching hubs with safety and discipline.
            </p>
            
            <ul className="space-y-4">
              {[
                "Highly experienced faculty",
                "Strictly monitored residential ecosystem",
                "Daily target-based study plans",
                "Personalized doubt clearance tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-vision-red shrink-0" />
                  <span className="text-ink font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="text-medical-dark font-bold hover:text-medical-primary flex items-center gap-2 pt-4 transition-colors">
              Read Our Full Story <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <GraduationCap />, title: "Expert Faculty", desc: "Learn from top educators with proven track records in producing top NEET ranks." },
    { icon: <Activity />, title: "Regular Tests", desc: "Regular tests to constantly measure progress and identify weak areas." },
    { icon: <Home />, title: "Residential Hostel", desc: "A safe, hygienic, and disciplined living space eliminating all daily distractions." },
    { icon: <BookOpen />, title: "Self Study Library", desc: "Monitored self-study halls designed for deep work and maximum concentration." },
    { icon: <Users />, title: "Small Batch Size", desc: "Limited students per batch ensuring personalized attention for every aspirant." },
    { icon: <HeartPulse />, title: "24 Hrs Health Facilities", desc: "Round-the-clock medical assistance and dedicated health facilities on campus." },
    { icon: <MessageCircle />, title: "Parent Updates", desc: "Regular performance tracking and transparent communication with parents." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">Why Choose VISION 40?</h2>
          <p className="text-gray-600 text-lg">We provide everything a NEET aspirant needs to succeed, enclosed within a securely guided ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper p-8 rounded-3xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] transition-all border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-medical-primary shadow-sm mb-6 group-hover:scale-110 group-hover:bg-medical-primary group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamSection = () => {
  const teachers = [
    {
      name: "Shahin Sir",
      role: "Wizard of Chemistry",
      quote: "Chemistry is not memory, it is understanding.",
      experience: "34+ Years Experience",
      image: shahinImage
    },
    {
      name: "Azher Sir",
      role: "Senior Physics Faculty",
      quote: "Physics is not difficult when concepts become visual.",
      experience: "17+ Years Experience",
      image: azherImage
    },
    {
      name: "Dr. Sikander Haider Sir",
      shortName: "Sikander",
      role: "Biology Faculty",
      quote: "Biology is easy when concepts connect to life.",
      experience: "10+ Years Experience",
      image: sikanderImage
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-medical-primary font-bold tracking-widest uppercase text-sm mb-2">Leadership & Faculty</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">Our Guiding Pillars</h2>
        </div>

        {/* First Row: Managing Director */}
        <div className="bg-paper p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm mb-16">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-display font-bold text-ink mb-2">Mr. Shams Qumar</h3>
              <p className="text-medical-primary font-semibold tracking-wide uppercase text-sm mb-6">Founder & Managing Director</p>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  The future of every student is built through dedication, discipline, and the right guidance from mentors and family. Vision 40 was founded with a mission to inspire students to dream bigger and achieve excellence in medical entrance examinations.
                </p>
                <p>
                  With years of academic experience and deep understanding of competitive preparation, the institute focuses on developing confidence, consistency, and conceptual clarity among students. The belief is simple — success comes from smart planning, sincere effort, and continuous mentorship.
                </p>
                <p>
                  At Vision 40, students are guided through a structured learning environment where experienced faculty members provide personal attention, strategic preparation methods, and motivation at every step. The institute's culture of hard work, discipline, and result-oriented teaching helps students transform their aspirations into achievements.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center text-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-medical-light border-4 border-white shadow-xl overflow-hidden relative">
                  {/* Placeholder for Director's Avatar */}
                   <img src={directorImage} alt="Mr. Shams Qumar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Team Members */}
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper p-8 rounded-3xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border border-gray-200 group-hover:border-medical-primary transition-colors overflow-hidden relative">
                {teacher.image ? (
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full bg-medical-light/30 flex items-center justify-center">
                    <Users className="w-10 h-10 text-medical-primary opacity-50" />
                  </div>
                )}
              </div>
              <h4 className="text-xl font-bold text-ink mb-1">{teacher.name}</h4>
              <p className="text-medical-dark font-medium mb-3">{teacher.role}</p>
              {teacher.quote && (
                <div className="mb-4">
                  <p className="text-gray-600 font-serif italic text-sm leading-relaxed">"{teacher.quote}"</p>
                  <p className="text-gray-500 font-medium text-xs mt-1">- {teacher.shortName || teacher.name.replace(' Sir', '')}</p>
                </div>
              )}
              <div className="mt-auto inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-100">
                {teacher.experience}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { icon: <BookOpen />, title: "STUDY MATERIAL", desc: "Expert-prepared study material covering all important concepts, formulas, and memory-based facts for competitive exams." },
    { icon: <Activity />, title: "PERIODIC TESTS", desc: "Regular assessments mirroring competitive exams to evaluate progress and enhance speed and accuracy." },
    { icon: <MessageCircle />, title: "DOUBT SESSIONS", desc: "Dedicated sessions to address weak areas and provide personalized support for problem-solving." }
  ];

  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-medical-primary font-bold tracking-widest uppercase text-sm mb-2">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Teaching Methodology
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our teaching methodology is competitive and result oriented which enables the students to understand the depth of concept to prepare a strong base. Teaching is strictly based on recent trend of competition and is taught step by step so that an ordinary student can also perform with extraordinary result.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-medical-primary/20 transition-all group"
              >
                <div className="w-12 h-12 bg-medical-light text-medical-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-medical-primary group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="font-bold text-ink mb-2 tracking-wide">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StudyResources = () => {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const categories = ["All Resources", "Study Notes", "NCERT Solutions"];
  
  const resources = [
    {
      title: "Study Notes",
      desc: "Comprehensive study materials that simplify complex ideas and for better understanding.",
      features: ["Concise summaries", "Practice questions", "Visual aids"],
    },
    {
      title: "NCERT Solutions",
      desc: "Step-by-step solutions to NCERT textbook questions for better understanding.",
      features: ["Detailed explanations", "Alternative methods", "Tips and tricks"],
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-medical-primary font-bold tracking-widest uppercase text-sm mb-2">Study Material</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">Comprehensive Study Resources</h2>
          <p className="text-gray-600 text-lg">
            Access a wide range of high-quality study materials to enhance your learning experience and excel in your exams.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="flex overflow-x-auto gap-2 pb-2 w-full md:w-auto hide-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-medical-primary text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-medical-primary text-sm"
              />
            </div>
            <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-medical-primary text-sm bg-white min-w-[140px]">
              <option>All Difficulties</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-medical-light text-medical-primary rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">{res.title}</h3>
              <p className="text-gray-600 mb-6">{res.desc}</p>
              
              <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-medical-dark mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {res.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full py-3 rounded-full border-2 border-medical-primary text-medical-primary font-semibold hover:bg-medical-primary hover:text-white transition-colors flex items-center justify-center group-hover:scale-[1.02]">
                Explore <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "NEET Dropper Batch",
      target: "12th Pass Students",
      duration: "1 Year",
      desc: "Intensive 1-year program focused on aggressive problem solving and rapid syllabus coverage.",
      highlight: true
    },
    {
      title: "Foundation Batch",
      target: "10th Pass Students",
      duration: "2 Years",
      desc: "Comprehensive foundation building along with board exam and NEET preparation.",
      highlight: false
    }
  ];

  return (
    <section id="courses" className="py-24 bg-medical-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-medical-primary font-bold tracking-widest uppercase text-sm mb-2">Our Programs</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Structured Pathways to <span className="font-serif italic font-normal text-emerald-300">Success</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {courses.map((course, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border ${course.highlight ? 'bg-medical-primary border-medical-primary text-white shadow-2xl scale-105 transform z-10' : 'bg-white/5 border-white/10 backdrop-blur-sm'}`}
            >
              {course.highlight && <div className="text-xs font-bold uppercase tracking-wider bg-white text-medical-primary px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>}
              <h3 className="text-2xl font-bold font-display mb-2">{course.title}</h3>
              <p className={`text-sm font-semibold mb-6 ${course.highlight ? 'text-emerald-100' : 'text-gray-400'}`}>For {course.target} | {course.duration}</p>
              <p className={`mb-8 leading-relaxed ${course.highlight ? 'text-white' : 'text-gray-300'}`}>
                {course.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {['Daily Practice Papers', 'Weekly Major Tests', 'Personal Mentor', 'Hostel Included'].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 ${course.highlight ? 'text-emerald-100' : 'text-medical-primary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXZ3LY7zMiw8V-dwaHTD4vRYj1c-WFxRZw4OvoIKcj4mmTSA/viewform" target="_blank" rel="noreferrer" className="block w-full">
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${course.highlight ? 'bg-white text-medical-primary hover:bg-gray-50' : 'bg-white/10 hover:bg-white/20'}`}>
                  Enroll Now
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Campus = () => {
  return (
    <section id="campus" className="py-24 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              A Distraction-Free <br />
              <span className="text-vision-red font-serif italic font-normal">Residential Campus</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our residential campus is meticulously designed to optimize a student's preparation journey. By eliminating daily commute and household distractions, students can dedicate 100% of their energy to their academic goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { title: "Hygienic Mess", desc: "Nutritious, home-like meals" },
                { title: "Quiet Library", desc: "Air-conditioned study halls" },
                { title: "24/7 Security", desc: "Safe, monitored environment" },
                { title: "Wardens", desc: "Caring discipline & support" }
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-medical-primary pl-4">
                  <h4 className="font-bold text-ink mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 relative mt-4">
              <div className="absolute inset-0 border-2 border-medical-primary rounded-[40px] m-4 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Scholarship = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-medical-light rounded-[40px] p-8 md:p-16 text-center border border-emerald-100 shadow-xl relative overflow-hidden"
        >
          {/* Decorative backdrop */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-medical-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-vision-red rounded-full mix-blend-multiply filter blur-3xl opacity-10 blur-xl"></div>
          
          <div className="relative z-10">
            <span className="bg-vision-red text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block mb-6">Limited Time</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-medical-dark mb-6">VISION 40 Scholarship Test</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Get up to <span className="font-bold text-vision-red text-2xl">100% Scholarship</span> on tuition fees and secure your spot in our upcoming dropper and foundation batches.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXZ3LY7zMiw8V-dwaHTD4vRYj1c-WFxRZw4OvoIKcj4mmTSA/viewform" target="_blank" rel="noreferrer" className="inline-block">
                <button className="bg-vision-red hover:bg-red-700 text-white w-full px-8 py-4 rounded-full font-bold transition-all shadow-lg text-lg">
                  Register for Free Now
                </button>
              </a>
              <button className="bg-white hover:bg-gray-50 text-medical-dark border px-8 py-4 rounded-full font-bold transition-all shadow-sm text-lg">
                View Syllabus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-medical-dark pt-20 pb-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-8 h-8 text-medical-primary" />
              <div>
                <h1 className="font-display font-bold text-2xl tracking-tight text-white leading-none">
                  VISION<span className="text-vision-red">40</span>
                </h1>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Patna's premium residential NEET coaching institute. Sankalp Se Selection Tak. We build doctors through discipline.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-medical-primary transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-medical-primary transition-colors cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-medical-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Our Faculties</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Results & Achievers</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Hostel Rules</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-medical-primary transition-colors">NEET Dropper Batch</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Class 11 Foundation</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Class 12 Target Batch</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Test Series</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical-primary shrink-0" />
                <span>Sultanganj, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-medical-primary shrink-0" />
                <span>+91 92979 29241</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-medical-primary shrink-0" />
                <span>vision40admissions@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} VISION 40 Institute. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Future Doctors.</p>
        </div>
      </div>
    </footer>
  );
};

const ResultsWall = () => {
  return (
    <section id="results" className="py-24 bg-medical-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-medical-primary font-bold tracking-widest uppercase text-sm mb-2">Wall of Fame</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Phenomenal <span className="font-serif italic font-normal text-emerald-300">Results</span></h2>
          <p className="text-gray-400 text-lg">Consistent selections in NEET highlighting the success of our Gurukul methodology.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-medical-primary/50 transition-colors"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400" 
                alt="Student" 
                className="w-full aspect-[3/4] object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 text-center bg-gradient-to-t from-medical-dark via-medical-dark/90 to-transparent absolute bottom-0 w-full">
                <p className="font-bold font-display text-lg">Aarav K.</p>
                <p className="text-emerald-400 font-bold text-sm">Score: 685/720</p>
                <p className="text-xs text-gray-400">AIIMS Patna</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
            View All Selections <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const AdmissionProcess = () => {
  const steps = [
    { num: "01", title: "Registration", desc: "Fill out the online inquiry form or visit our campus." },
    { num: "02", title: "Counseling", desc: "Attend a detailed academic counseling session with parents." },
    { num: "03", title: "Scholarship Test", desc: "Appear for the VISION 40 Entrance & Scholarship Test." },
    { num: "04", title: "Admission", desc: "Complete documentation and secure your residential seat." }
  ];

  return (
    <section id="admissions" className="py-24 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">Simple <br/><span className="text-medical-primary font-serif italic text-4xl">Admission Flow</span></h2>
            <p className="text-gray-600 mb-8">We maintain a strict and transparent admission process to ensure we intake students who match our discipline standards.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXZ3LY7zMiw8V-dwaHTD4vRYj1c-WFxRZw4OvoIKcj4mmTSA/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="inline-block bg-ink hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Start Application
            </a>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100"
              >
                <div className="text-6xl font-display font-bold text-medical-light mb-4">{step.num}</div>
                <h3 className="text-xl font-bold font-display text-ink mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', batch: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I am ${formData.name}. My phone number is ${formData.phone}. I am interested in ${formData.batch} batch.`;
    window.open(`https://wa.me/919297929241?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-medical-dark rounded-[40px] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-16 text-white space-y-8">
            <h2 className="text-4xl font-display font-bold">Have Questions?</h2>
            <p className="text-gray-300">Schedule a visit to our campus or request a callback from our academic counselors.</p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Student Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-medical-primary" />
              <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-medical-primary" />
              <select required value={formData.batch} onChange={e => setFormData({...formData, batch: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-primary appearance-none">
                <option value="" disabled className="text-gray-800">Select Target Batch</option>
                <option value="NEET Dropper" className="text-gray-800">NEET Dropper</option>
                <option value="Class 11 Foundation" className="text-gray-800">Class 11 Foundation</option>
                <option value="Class 12 Target" className="text-gray-800">Class 12 Target</option>
              </select>
              <button type="submit" className="w-full bg-medical-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-colors mt-4">
                Message on WhatsApp
              </button>
              <p className="text-center text-sm text-gray-400 mt-4">
                Or email us at <a href="mailto:vision40admissions@gmail.com" className="text-medical-primary hover:underline">vision40admissions@gmail.com</a>
              </p>
            </form>
          </div>
          
          <div className="md:w-1/2 bg-gray-200 min-h-[400px]">
             {/* Map placeholder */}
             <div className="w-full h-full flex items-center justify-center bg-medical-light relative">
               <MapPin className="w-16 h-16 text-medical-primary absolute" />
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600" 
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-80"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-medical-primary/20 mix-blend-multiply"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-paper selection:bg-medical-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <TeamSection />
        <Features />
        <Methodology />
        <StudyResources />
        <Courses />
        <Campus />
        <Scholarship />
        <AdmissionProcess />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919297929241" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

