/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Settings, 
  Plane, 
  Anchor, 
  Cpu, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
  Hammer,
  HardHat,
  Factory
} from "lucide-react";

// --- Components ---

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="min-h-[calc(100vh-80px)]"
  >
    {children}
  </motion.main>
);

const BrutalButton = ({ 
  children, 
  className = "", 
  variant = "primary",
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
}) => {
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "bg-white text-slate-900 hover:bg-slate-50",
    accent: "bg-orange-600 text-white hover:bg-orange-700"
  };

  return (
    <button 
      onClick={onClick}
      className={`brutal-border px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Navigation = () => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Sectors", path: "/sectors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-slate-900 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-white transition-transform group-hover:rotate-90">
            <Settings className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">SRS MANUFACTURING LTD</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-widest">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`relative transition-colors hover:text-orange-600 ${location.pathname === link.path ? 'text-orange-600' : 'text-slate-600'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 h-1 w-full bg-orange-600" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:01202884583" className="hidden sm:flex items-center gap-2 font-mono text-xs font-bold text-slate-900">
            <Phone className="h-4 w-4" />
            01202 884583
          </a>
          <BrutalButton variant="accent" className="hidden sm:block !px-4 !py-2 !text-[10px]">
            Get Quote
          </BrutalButton>
        </div>
      </div>
    </nav>
  );
};

// --- Pages ---

const Home = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 dark-blueprint blueprint-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-600 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              <Zap className="h-3 w-3" />
              Precision_Engineering_v2.0
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl uppercase leading-[0.9]">
              Zero <br />
              <span className="text-orange-500">Defect</span> <br />
              Culture.
            </h1>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-slate-400">
              High-fidelity welding and precision engineering for the world’s most demanding industries. Based in Wimborne, Dorset.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BrutalButton variant="accent">Request Technical Quote</BrutalButton>
              <BrutalButton variant="secondary">View Capabilities</BrutalButton>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="brutal-border border-orange-600 bg-slate-800 p-2">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" 
                alt="Welding" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange-600 p-6 brutal-border border-slate-900 text-white">
              <p className="font-mono text-2xl font-bold">AS9100</p>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest">Certified Facility</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Marquee */}
    <div className="border-y-2 border-slate-900 bg-white py-4 overflow-hidden">
      <div className="marquee-track">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-8 font-mono text-sm font-bold uppercase tracking-widest text-slate-900 whitespace-nowrap">
            <span>Aerospace Certified</span>
            <Zap className="h-4 w-4 text-orange-600" />
            <span>Marine Engineering</span>
            <Zap className="h-4 w-4 text-orange-600" />
            <span>Precision Welding</span>
            <Zap className="h-4 w-4 text-orange-600" />
          </div>
        ))}
      </div>
    </div>

    {/* Sectors Preview */}
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">01_Sectors</h2>
            <p className="text-4xl font-bold tracking-tight text-slate-900 uppercase">Built for the <span className="text-orange-600">Extremes</span>.</p>
          </div>
          <Link to="/sectors">
            <BrutalButton variant="primary" className="!px-6 !py-3 !text-xs">View All Sectors</BrutalButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Aerospace", icon: Plane, color: "bg-slate-50" },
            { title: "Marine", icon: Anchor, color: "bg-slate-50" },
            { title: "B2B MFG", icon: Factory, color: "bg-slate-50" },
          ].map((sector, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`brutal-border border-slate-900 p-8 ${sector.color}`}
            >
              <sector.icon className="h-12 w-12 mb-6 text-orange-600" />
              <h3 className="text-2xl font-bold uppercase mb-4">{sector.title}</h3>
              <p className="font-body text-sm text-slate-600 mb-6">High-precision components for mission-critical systems.</p>
              <ArrowRight className="h-6 w-6 text-slate-900" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

const Capabilities = () => (
  <PageWrapper>
    <section className="py-24 bg-slate-50 blueprint-bg">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-6xl font-bold tracking-tight text-slate-900 uppercase mb-16">
          Technical <span className="text-orange-600">Firepower</span>.
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { title: "Skilled Welding", desc: "TIG, MIG, and MMA welding for Titanium, Stainless, and Aluminum.", icon: Hammer },
              { title: "CNC Machining", desc: "Multi-axis precision machining with micron-level tolerances.", icon: Settings },
              { title: "Inspection", desc: "Full NDT and digital inspection workflows for aerospace compliance.", icon: ShieldCheck },
            ].map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="brutal-border border-slate-900 bg-white p-8 flex gap-6 items-start"
              >
                <div className="bg-orange-600 p-4 brutal-border border-slate-900 text-white">
                  <cap.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase mb-2">{cap.title}</h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="brutal-border border-slate-900 bg-slate-900 p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold uppercase mb-6">The Spec Sheet</h2>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Max Weld Thickness</span>
                <span className="text-orange-500">50mm</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">CNC Tolerance</span>
                <span className="text-orange-500">±0.005mm</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Materials</span>
                <span className="text-orange-500">Titanium, Inconel, Al</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Certifications</span>
                <span className="text-orange-500">AS9100, ISO9001</span>
              </li>
            </ul>
            <BrutalButton variant="accent" className="mt-12">Download Full Specs</BrutalButton>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const Sectors = () => (
  <PageWrapper>
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900 uppercase mb-6">
            Where We <span className="text-orange-600">Operate</span>.
          </h1>
          <p className="font-body text-base text-slate-600">From the stratosphere to the deep ocean, our components are built to survive the harshest conditions known to man.</p>
        </div>

        <div className="space-y-12">
          {[
            { 
              name: "Aerospace", 
              icon: Plane, 
              img: "https://images.unsplash.com/photo-1559297434-2d8a134e042e?auto=format&fit=crop&q=80&w=1200",
              desc: "Critical engine parts, structural frames, and landing gear components."
            },
            { 
              name: "Marine", 
              icon: Anchor, 
              img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200",
              desc: "Propulsion systems, hull reinforcements, and deep-sea exploration tools."
            },
            { 
              name: "Industrial", 
              icon: Factory, 
              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
              desc: "Heavy-duty robotics, high-pressure valves, and custom manufacturing rigs."
            },
          ].map((sector, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden brutal-border border-slate-900"
            >
              <img src={sector.img} alt={sector.name} className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-all" />
              <div className="absolute bottom-0 left-0 p-12 text-white">
                <sector.icon className="h-12 w-12 mb-6 text-orange-500" />
                <h2 className="text-4xl font-bold uppercase mb-4">{sector.name}</h2>
                <p className="font-body text-base max-w-md text-slate-300">{sector.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <section className="py-24 bg-slate-900 text-white dark-blueprint blueprint-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h1 className="text-6xl font-bold tracking-tight uppercase mb-8">
              The <span className="text-orange-500">Engine</span> Room.
            </h1>
            <p className="font-body text-base text-slate-400 leading-relaxed mb-8">
              Founded in Wimborne, SRS Manufacturing Ltd was built on a simple premise: precision is non-negotiable. We aren't just a machine shop; we are a technical partner for engineers who need zero-defect results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 brutal-border border-orange-500 bg-slate-800">
                <p className="text-3xl font-bold text-orange-500 mb-2">25+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Years Experience</p>
              </div>
              <div className="p-6 brutal-border border-orange-500 bg-slate-800">
                <p className="text-3xl font-bold text-orange-500 mb-2">100%</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Compliance Rate</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="brutal-border border-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Workshop" 
                className="w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-12 -right-12 bg-white p-8 brutal-border border-slate-900 text-slate-900 hidden md:block max-w-xs">
              <HardHat className="h-8 w-8 mb-4" />
              <p className="font-body text-sm font-bold">"We don't just weld metal; we forge reliability."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper>
    <section className="py-24 bg-orange-600 blueprint-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-6xl font-bold tracking-tight text-white uppercase mb-8">
              Let's <span className="text-slate-900">Build</span>.
            </h1>
            <p className="font-body text-base text-orange-50 mb-12">Ready to discuss your next mission-critical project? Our technical team is standing by.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-slate-900 p-4 brutal-border border-white text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-white">Facility</h3>
                  <p className="font-body text-sm text-orange-100">Unit 2C, Stone Lane Industrial Estate, Wimborne, BH21 1HB</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-slate-900 p-4 brutal-border border-white text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-white">Direct Line</h3>
                  <p className="font-body text-sm text-orange-100">01202 884583</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-slate-900 p-4 brutal-border border-white text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-white">Email</h3>
                  <p className="font-body text-sm text-orange-100">info@srsmanufacturing.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 brutal-border border-slate-900">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</label>
                  <input type="text" className="w-full border-2 border-slate-900 p-3 font-body text-sm focus:bg-orange-50 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</label>
                  <input type="email" className="w-full border-2 border-slate-900 p-3 font-body text-sm focus:bg-orange-50 outline-none" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Sector</label>
                <select className="w-full border-2 border-slate-900 p-3 font-body text-sm focus:bg-orange-50 outline-none">
                  <option>Aerospace</option>
                  <option>Marine</option>
                  <option>Industrial</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={4} className="w-full border-2 border-slate-900 p-3 font-body text-sm focus:bg-orange-50 outline-none" placeholder="Project details..."></textarea>
              </div>
              <BrutalButton variant="primary" className="w-full">Send Technical Inquiry</BrutalButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-600 selection:text-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        {/* Global Footer */}
        <footer className="border-t-2 border-slate-900 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-slate-900 text-white">
                <Settings className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">SRS MANUFACTURING LTD</span>
            </div>
            <p className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} SRS Manufacturing Ltd // Wimborne // Dorset // UK
            </p>
            <div className="flex gap-6 font-mono text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-orange-600">Privacy</a>
              <a href="#" className="hover:text-orange-600">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
