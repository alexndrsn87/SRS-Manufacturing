/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Settings,
  Plane,
  Anchor,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Zap,
  Hammer,
  HardHat,
  Factory,
  Loader2,
  AlertTriangle,
  Inbox,
  Layers,
  Gauge,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "accent";

type SubmitState = "idle" | "loading" | "success" | "error";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.24, ease: "easeOut" }}
    className="min-h-[calc(100vh-80px)]"
  >
    {children}
  </motion.main>
);

const UIButton = ({
  children,
  className = "",
  variant = "primary",
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  trailingIcon,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  trailingIcon?: React.ReactNode;
}) => {
  const variantClass: Record<ButtonVariant, string> = {
    primary: "ui-btn-primary",
    secondary: "ui-btn-secondary",
    accent: "ui-btn-accent",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`ui-btn ${variantClass[variant]} ${className}`}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span>{children}</span>
      {!loading && trailingIcon}
    </button>
  );
};

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { name: "Home", path: "/", icon: Factory },
    { name: "Capabilities", path: "/capabilities", icon: Layers },
    { name: "Sectors", path: "/sectors", icon: Plane },
    { name: "About", path: "/about", icon: ShieldCheck },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/88">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 lg:gap-8">
          <Link to="/" className="group flex min-w-0 flex-1 items-center gap-3 focus-visible:outline-none">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Settings className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-bold uppercase tracking-tight text-slate-900 sm:text-lg">SRS Manufacturing Ltd</p>
              <p className="truncate text-[11px] text-slate-500 sm:text-xs">Precision Engineering, Wimborne</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-150 ${
                    isActive
                      ? "border-2 border-orange-200 bg-orange-50 text-orange-700"
                      : "border-2 border-slate-900/70 text-slate-600 hover:border-slate-900 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:01202884583"
              className="hidden items-center gap-2 whitespace-nowrap rounded-sm border-2 border-slate-900/70 px-4 py-2 font-mono text-xs font-semibold text-slate-700 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-50 hover:text-slate-900 sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              01202 884583
            </a>
            <UIButton variant="accent" className="hidden sm:inline-flex">Get Quote</UIButton>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-slate-900/70 bg-white text-slate-900 transition-colors duration-150 hover:bg-slate-50 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="mb-4 space-y-2 border-2 border-slate-900/80 bg-white p-3 shadow-[4px_4px_0_rgba(15,23,42,0.18)] lg:hidden"
            >
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between px-3 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-150 ${
                      isActive
                        ? "border-2 border-orange-200 bg-orange-50 text-orange-700"
                        : "border-2 border-slate-900/75 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}

              <a
                href="tel:01202884583"
                className="flex items-center justify-between border-2 border-slate-900/75 px-3 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-slate-700"
              >
                <span>Call 01202 884583</span>
                <Phone className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Home = () => (
  <PageWrapper>
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 dark-blueprint blueprint-bg">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.32 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-400/30">
              <Zap className="h-4 w-4" />
              Precision engineering partner
            </div>
            <h1 className="hero-headline text-5xl font-bold uppercase leading-[0.96] tracking-tight text-white sm:text-7xl">
              <span className="hero-line hero-line-primary">
                Zero <span className="hero-emphasis">Defect</span>
              </span>
              <span className="hero-line hero-line-secondary">
                <span className="hero-outline-frame">
                  <span className="hero-outline">Results.</span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              High-fidelity welding and precision engineering for the world&apos;s most demanding industries. Trusted by aerospace,
              marine, and heavy industrial teams across the UK.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <UIButton variant="accent" trailingIcon={<ArrowRight className="h-4 w-4" />}>
                Request Technical Quote
              </UIButton>
              <Link to="/capabilities">
                <UIButton variant="secondary">View Capabilities</UIButton>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.32, delay: 0.08 }}
            className="hero-visual-stage relative hidden lg:block"
          >
            <div className="hero-visual-frame overflow-hidden rounded-sm border-2 border-slate-600 bg-slate-800/70 p-2 shadow-[6px_6px_0_rgba(15,23,42,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
                alt="Welding"
                className="hero-visual-image w-full rounded-sm grayscale transition-all duration-300 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-sm border-2 border-orange-300 bg-orange-600 px-6 py-4 text-white shadow-[4px_4px_0_rgba(124,45,18,0.35)]">
              <p className="font-mono text-xl font-bold">AS9100</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-orange-100">Certified Facility</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-white py-4">
      <div className="ticker-shell">
        <div className="marquee-track">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 whitespace-nowrap px-8 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-700"
            >
              <span>Aerospace Certified</span>
              <Zap className="h-4 w-4 text-orange-500" />
              <span>Marine Engineering</span>
              <Zap className="h-4 w-4 text-orange-500" />
              <span>Precision Welding</span>
              <Zap className="h-4 w-4 text-orange-500" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-tint py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">01_Sectors</p>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-slate-900 sm:text-5xl">
              Built for the <span className="text-orange-600">extremes</span>
            </h2>
            <p className="max-w-xl text-base text-slate-600">Each sector has unique compliance and quality pressures. We tailor process, QA, and delivery to match.</p>
          </div>
          <Link to="/sectors">
            <UIButton trailingIcon={<ArrowRight className="h-4 w-4" />}>View All Sectors</UIButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Aerospace", icon: Plane, tint: "bg-blue-50 text-blue-700", copy: "Mission-critical components with tight tolerances and full traceability." },
            { title: "Marine", icon: Anchor, tint: "bg-emerald-50 text-emerald-700", copy: "High-strength assemblies for corrosive and high-pressure environments." },
            { title: "Industrial", icon: Factory, tint: "bg-violet-50 text-violet-700", copy: "Reliable fabrication support for bespoke manufacturing systems." },
          ].map((sector) => (
            <article key={sector.title} className="surface-card p-8">
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${sector.tint}`}>
                <sector.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">{sector.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{sector.copy}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-orange-600">
                Explore
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">02_Why SRS</p>
          <h2 className="text-4xl font-bold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Manufacturing certainty for <span className="text-orange-600">high-risk</span> environments
          </h2>
          <p className="text-base leading-7 text-slate-600">
            When tolerance, timeline, and traceability all matter, your supplier has to be as disciplined as your internal engineering
            standards.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Documented Workflows",
              icon: ShieldCheck,
              tint: "bg-emerald-50 text-emerald-700",
              copy: "Controlled welding and machining pathways with revision-aware documentation.",
            },
            {
              title: "Tight Tolerance Control",
              icon: Gauge,
              tint: "bg-blue-50 text-blue-700",
              copy: "Process checks built around demanding specification windows and repeatability.",
            },
            {
              title: "Engineer-Led Support",
              icon: HardHat,
              tint: "bg-violet-50 text-violet-700",
              copy: "Direct communication with technical teams, not a generic account queue.",
            },
            {
              title: "Responsive Delivery",
              icon: Zap,
              tint: "bg-orange-50 text-orange-700",
              copy: "Rapid quotation and practical production scheduling for urgent requirements.",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card p-7">
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm ${item.tint}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-tint py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-card p-8 sm:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">03_Workflow</p>
            <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-slate-900 sm:text-5xl">How we run every project</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Our process keeps quality visible from first brief through final delivery, so procurement, operations, and engineering all stay aligned.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Technical scope review with material and tolerance confirmation",
                "Method planning with compliance checkpoints and QA sign-off",
                "Build execution with in-process inspection and traceability",
                "Dispatch with documented packs and responsive follow-up support",
              ].map((step) => (
                <div key={step} className="flex items-start gap-3 border-2 border-slate-300 bg-slate-50/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card bg-slate-900 p-8 text-white sm:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-300">At A Glance</p>
            <h3 className="mt-4 text-3xl font-bold uppercase tracking-tight">Performance snapshot</h3>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Years", value: "25+" },
                { label: "Quote Speed", value: "48h" },
                { label: "Compliance", value: "100%" },
                { label: "Sectors", value: "Aero / Marine / Industrial" },
              ].map((stat) => (
                <div key={stat.label} className="border-2 border-slate-500/80 bg-slate-800/70 p-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-slate-300">{stat.label}</p>
                  <p className="mt-2 text-sm font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <Link to="/contact" className="block">
                <UIButton variant="accent" className="w-full">Start a Project Discussion</UIButton>
              </Link>
              <Link to="/about" className="block">
                <UIButton variant="secondary" className="w-full">Explore Our Facility</UIButton>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const capabilityData = [
  {
    id: "welding",
    title: "Skilled Welding",
    desc: "TIG, MIG, and MMA welding for titanium, stainless, and aluminium with repeatable quality checks.",
    icon: Hammer,
    tone: "bg-orange-50 text-orange-700",
    metrics: ["Up to 50mm section welding", "Documented WPS/WPQR packs", "Certified operators"],
  },
  {
    id: "machining",
    title: "CNC Machining",
    desc: "Multi-axis precision machining with micron-level tolerances and inspection-ready reporting.",
    icon: Settings,
    tone: "bg-blue-50 text-blue-700",
    metrics: ["±0.005mm tolerance bands", "Prototype to production support", "Fast fixture turnaround"],
  },
  {
    id: "inspection",
    title: "Inspection",
    desc: "Full NDT and digital inspection workflows aligned with aerospace and quality certification standards.",
    icon: ShieldCheck,
    tone: "bg-emerald-50 text-emerald-700",
    metrics: ["NDT pathways available", "AS9100 and ISO aligned", "Full digital traceability"],
  },
];

const Capabilities = () => {
  const [selectedId, setSelectedId] = useState<string | null>(capabilityData[0].id);

  const selectedCapability = useMemo(
    () => capabilityData.find((capability) => capability.id === selectedId),
    [selectedId],
  );

  return (
    <PageWrapper>
      <section className="section-tint py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 space-y-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">02_Capabilities</p>
            <h1 className="text-5xl font-bold uppercase tracking-tight text-slate-900 sm:text-6xl">
              Technical <span className="text-orange-600">Firepower</span>
            </h1>
            <p className="max-w-2xl text-base text-slate-600">Select a capability to explore process details and operating benchmarks.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="space-y-4">
              {capabilityData.map((capability) => {
                const isActive = selectedId === capability.id;
                const Icon = capability.icon;

                return (
                  <button
                    key={capability.id}
                    type="button"
                    onClick={() => setSelectedId(capability.id)}
                    className={`w-full border-2 p-6 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 ${
                      isActive
                        ? "border-orange-300 bg-orange-50/70 shadow-[4px_4px_0_rgba(124,45,18,0.18)]"
                        : "border-slate-900/80 bg-white shadow-[4px_4px_0_rgba(15,23,42,0.12)] hover:border-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${capability.tone}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xl font-bold uppercase tracking-tight text-slate-900">{capability.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{capability.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}

              <UIButton variant="secondary" className="w-full" onClick={() => setSelectedId(null)}>
                Clear Selection
              </UIButton>
            </div>

            <div className="surface-card p-8">
              {selectedCapability ? (
                <>
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Selected Capability</p>
                      <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-slate-900">{selectedCapability.title}</h2>
                    </div>
                    <Gauge className="h-8 w-8 text-orange-600" />
                  </div>

                  <div className="space-y-4">
                    {selectedCapability.metrics.map((metric) => (
                      <div key={metric} className="flex items-start gap-3 rounded-sm border-2 border-slate-300 bg-slate-50/70 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        <p className="text-sm text-slate-700">{metric}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <UIButton variant="accent">Request Process Review</UIButton>
                    <UIButton variant="secondary">Download Full Specs</UIButton>
                  </div>
                </>
              ) : (
                <div className="status-panel">
                  <div className="flex items-start gap-4">
                    <Inbox className="mt-0.5 h-6 w-6 text-slate-500" />
                    <div>
                      <p className="text-lg font-semibold text-slate-900">No capability selected</p>
                      <p className="mt-2 text-sm text-slate-600">Choose a capability from the list to view process metrics and next actions.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const Sectors = () => (
  <PageWrapper>
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-3xl space-y-6">
          <h1 className="text-5xl font-bold uppercase tracking-tight text-slate-900 sm:text-6xl">
            Where We <span className="text-orange-600">Operate</span>
          </h1>
          <p className="text-base leading-7 text-slate-600">
            From the stratosphere to the deep ocean, our components are built to survive the harshest operating conditions.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              name: "Aerospace",
              icon: Plane,
              img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
              desc: "Critical engine parts, structural frames, and landing gear components.",
            },
            {
              name: "Marine",
              icon: Anchor,
              img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200",
              desc: "Propulsion systems, hull reinforcements, and deep-sea exploration tools.",
            },
            {
              name: "Industrial",
              icon: Factory,
              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
              desc: "Heavy-duty robotics, high-pressure valves, and custom manufacturing rigs.",
            },
          ].map((sector) => (
            <motion.article
              key={sector.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm border-2 border-slate-900/80 shadow-[5px_5px_0_rgba(15,23,42,0.18)]"
            >
              <img
                src={sector.img}
                alt={sector.name}
                className="h-[340px] w-full object-cover grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300 ring-1 ring-orange-300/30">
                  <sector.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white">{sector.name}</h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200">{sector.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <section className="bg-slate-900 py-20 text-white dark-blueprint blueprint-bg sm:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-6xl">
            The <span className="text-orange-500">Engine</span> Room
          </h1>
          <p className="mt-8 text-base leading-7 text-slate-300">
            Founded in Wimborne, SRS Manufacturing Ltd was built on a simple premise: precision is non-negotiable. We are a
            technical partner for engineers who need zero-defect results.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-sm border-2 border-orange-400/60 bg-slate-800/80 p-6 shadow-[4px_4px_0_rgba(15,23,42,0.32)]">
              <p className="text-4xl font-bold text-orange-400">25+</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-slate-300">Years Experience</p>
            </div>
            <div className="rounded-sm border-2 border-orange-400/60 bg-slate-800/80 p-6 shadow-[4px_4px_0_rgba(15,23,42,0.32)]">
              <p className="text-4xl font-bold text-orange-400">100%</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-slate-300">Compliance Rate</p>
            </div>
            <div className="rounded-sm border-2 border-orange-400/60 bg-slate-800/80 p-6 shadow-[4px_4px_0_rgba(15,23,42,0.32)] sm:col-span-2">
              <p className="text-4xl font-bold text-orange-400">48h</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-slate-300">Typical Quote Turnaround</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-sm border-2 border-slate-700 p-2 shadow-[6px_6px_0_rgba(2,6,23,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="Workshop"
              className="w-full rounded-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden max-w-xs rounded-sm border-2 border-slate-900/80 bg-white p-6 text-slate-900 shadow-[4px_4px_0_rgba(15,23,42,0.2)] md:block">
            <HardHat className="mb-4 h-7 w-7 text-orange-600" />
            <p className="text-sm font-semibold leading-6">"We don&apos;t just weld metal; we forge reliability into every assembly."</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">03_Our Approach</p>
          <h2 className="text-4xl font-bold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Built around <span className="text-orange-600">clarity</span> and control
          </h2>
          <p className="text-base leading-7 text-slate-600">
            We run a disciplined, transparent process from first brief to final dispatch. That means fewer surprises, cleaner handovers,
            and consistent quality even on complex builds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Scope & Review",
              copy: "We start by clarifying material, tolerance, compliance, and lead-time requirements with your engineering team.",
              icon: Settings,
              tint: "bg-blue-50 text-blue-700",
            },
            {
              title: "2. Build & Verify",
              copy: "Welding and machining pathways are documented and monitored with in-process QA and traceable inspection points.",
              icon: Gauge,
              tint: "bg-emerald-50 text-emerald-700",
            },
            {
              title: "3. Deliver & Support",
              copy: "You receive production-ready parts with full packs, certificates, and responsive technical follow-up.",
              icon: CheckCircle2,
              tint: "bg-violet-50 text-violet-700",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card p-8">
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.tint}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="surface-card p-8">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Quality & Certifications</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Documentation and controls are embedded in each project lifecycle to satisfy sector-specific audit and compliance demands.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "AS9100 and ISO-aligned workflows",
                "Material and weld traceability packs",
                "NDT-ready verification pathways",
                "Inspection reporting with revision control",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-sm border-2 border-slate-300 bg-slate-50/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card p-8">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Facility Snapshot</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The Wimborne site supports prototyping through repeat production with dedicated welding, machining, and inspection zones.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Lead Time", value: "Fast-track slots" },
                { label: "Material Range", value: "Titanium to stainless" },
                { label: "Batch Size", value: "Prototype to volume" },
                { label: "Support", value: "Direct engineer access" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-sm border-2 border-slate-900/70 bg-white p-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: "Aerospace",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Please include project details.";
    return nextErrors;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");
    window.setTimeout(() => {
      setSubmitState("success");
      setFormData({ name: "", email: "", sector: "Aerospace", message: "" });
      setErrors({});
    }, 1200);
  };

  return (
    <PageWrapper>
      <section className="bg-orange-600 py-24 blueprint-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h1 className="text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
                Let&apos;s <span className="text-slate-900">Build</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-orange-50">
                Ready to discuss your next mission-critical project? Our technical team is standing by.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  {
                    title: "Facility",
                    value: "Unit 2C, Stone Lane Industrial Estate, Wimborne, BH21 1HB",
                    icon: MapPin,
                  },
                  { title: "Direct Line", value: "01202 884583", icon: Phone },
                  { title: "Email", value: "info@srsmanufacturing.co.uk", icon: Mail },
                ].map((item) => (
                  <div key={item.title} className="rounded-sm border-2 border-orange-300/75 bg-orange-500/20 p-5 shadow-[4px_4px_0_rgba(124,45,18,0.24)]">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-orange-100">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-white">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card p-8 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Project Inquiry</h2>
              </div>

              {submitState === "loading" && (
                <div className="status-panel status-panel-loading mb-6 flex items-start gap-3">
                  <Loader2 className="mt-0.5 h-5 w-5 animate-spin text-blue-600" />
                  <p className="text-sm text-slate-700">Sending your inquiry to our engineering team...</p>
                </div>
              )}

              {submitState === "success" && (
                <div className="status-panel status-panel-success mb-6 flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <p className="text-sm text-slate-700">Thanks. Your inquiry has been received and the team will contact you shortly.</p>
                </div>
              )}

              {submitState === "error" && Object.keys(errors).length > 0 && (
                <div className="status-panel status-panel-error mb-6 flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />
                  <p className="text-sm text-slate-700">Please resolve the highlighted fields and try again.</p>
                </div>
              )}

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "border-red-400" : ""}`}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                    />
                    {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "border-red-400" : ""}`}
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                    {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Sector</label>
                  <select
                    className="form-control"
                    value={formData.sector}
                    onChange={(event) => updateField("sector", event.target.value)}
                  >
                    <option>Aerospace</option>
                    <option>Marine</option>
                    <option>Industrial</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Message</label>
                  <textarea
                    rows={5}
                    className={`form-control ${errors.message ? "border-red-400" : ""}`}
                    placeholder="Project details, materials, tolerances, and desired timeline..."
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                  />
                  {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                </div>

                <UIButton
                  variant="primary"
                  type="submit"
                  loading={submitState === "loading"}
                  className="w-full"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Send Technical Inquiry
                </UIButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

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

        <footer className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-slate-900 text-white">
                <Settings className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold uppercase tracking-tight text-slate-900">SRS Manufacturing Ltd</span>
            </div>

            <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
              &copy; {new Date().getFullYear()} SRS Manufacturing Ltd // Wimborne // Dorset // UK
            </p>

            <div className="flex items-center gap-2">
              {["Privacy", "Terms"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="rounded-sm border-2 border-slate-900/70 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-50 hover:text-slate-900"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
