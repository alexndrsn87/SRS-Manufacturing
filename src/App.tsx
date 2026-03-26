/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  CheckCircle2
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Settings className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">SRS MANUFACTURING</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Capabilities</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Sectors</a>
            <a href="#" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:01202884583" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Phone className="h-4 w-4" />
              01202 884583
            </a>
            <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95">
              Request Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Background" 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-inset ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Certified Excellence
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Precision Engineering. <br />
              <span className="text-slate-400 text-3xl sm:text-5xl">Certified Welding.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              SRS Manufacturing Ltd delivers high-fidelity welding and precision engineering services for the world’s most demanding industries. Based in Wimborne, Dorset.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-100 transition-all active:scale-95">
                Request Technical Quote
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 group">
                View Capabilities <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trust Banner */}
      <section className="border-y border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Award className="mb-2 h-8 w-8 text-slate-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ISO Certified</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Clock className="mb-2 h-8 w-8 text-slate-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Rapid Turnaround</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <ShieldCheck className="mb-2 h-8 w-8 text-slate-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Zero-Defect Policy</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <MapPin className="mb-2 h-8 w-8 text-slate-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Dorset Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-slate-600 uppercase tracking-widest">Industries</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Sectors We Serve</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our precision components are found in mission-critical environments across the globe.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Aerospace & Aviation",
                description: "High-precision TIG welding and CNC machining for aircraft structures and engine components.",
                icon: Plane,
                image: "https://images.unsplash.com/photo-1559297434-2d8a134e042e?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Marine Engineering",
                description: "Corrosion-resistant welding and heavy-duty engineering for maritime propulsion and defense systems.",
                icon: Anchor,
                image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Advanced B2B Manufacturing",
                description: "Skilled fabrication and precision engineering for high-tech industrial machinery and robotics.",
                icon: Cpu,
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              }
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                      <sector.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{sector.title}</h3>
                  </div>
                  <p className="mt-4 flex-auto text-sm leading-6 text-slate-600">
                    {sector.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <a href="#" className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities CTA */}
      <section className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Technical Capabilities & <br /> Skilled Welding
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Our facility is optimized for high-complexity, low-volume manufacturing where precision is the only metric that matters.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "TIG & MIG Skilled Welding (Titanium, Stainless, Aluminum)",
                  "Multi-Axis CNC Precision Machining",
                  "Technical Inspection & Quality Assurance",
                  "AS9100 & ISO 9001 Compliant Workflows",
                  "Bespoke Jigs & Fixtures Fabrication"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Welding Precision" 
                  className="h-full w-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl hidden sm:block">
                <p className="text-sm font-bold text-slate-900">01202 884583</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-slate-900" />
                <span className="text-xl font-bold tracking-tight text-slate-900">SRS MANUFACTURING</span>
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-600 max-w-xs">
                Precision engineering and skilled welding for mission-critical aerospace, marine, and aviation components.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Contact Us</h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-slate-400" />
                    <span>
                      Unit 2C, Stone Lane Industrial Estate,<br />
                      Wimborne Minster, Dorset,<br />
                      BH21 1HB, United Kingdom
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-slate-400" />
                    <a href="tel:01202884583" className="hover:text-slate-900">01202 884583</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-slate-400" />
                    <a href="mailto:info@srsmanufacturing.co.uk" className="hover:text-slate-900">info@srsmanufacturing.co.uk</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Quick Links</h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-slate-900">Aerospace Welding</a></li>
                  <li><a href="#" className="hover:text-slate-900">Precision Engineering</a></li>
                  <li><a href="#" className="hover:text-slate-900">Marine Fabrication</a></li>
                  <li><a href="#" className="hover:text-slate-900">Quality Assurance</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-100 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SRS Manufacturing Ltd. All rights reserved. Registered in England & Wales.
          </div>
        </div>
      </footer>
    </div>
  );
}
