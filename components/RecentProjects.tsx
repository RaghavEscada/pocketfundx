"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, CheckCircle, Target, TrendingUp, Users, Zap, BarChart3, DollarSign, Globe, Eye, Trophy } from "lucide-react";

const TrackRecord = () => {



  const customerAvatars = [
    {
      title: "First-Time Buyers",
      subtitle: "Indie Acquirers",
      icon: "🎯",
      age: "22-35",
      profile: "Solo operators, indie hackers, product managers seeking freedom from corporate life",
      painPoints: [
        "Unsure how to evaluate deals",
        "Fear of buying a 'lemon'",
        "No operational talent post-acquisition",
        "Overwhelmed by low-quality listings"
      ],
      solutions: [
        "Curated off-market deal flow",
        "Red-flag screening & negotiation",
        "Operator placement & handholding",
        "First-time buyer playbooks"
      ],
      containerColor: "bg-emerald-900",
      colors: [[34, 197, 94], [22, 163, 74]]
    },
    {
      title: "Solo Capitalists",
      subtitle: "Creator-Led Holdcos",
      icon: "🚀",
      age: "27-45",
      profile: "Builders with capital from consulting, content, or agencies seeking portfolio growth",
      painPoints: [
        "Time-starved from other ventures",
        "Scaling challenges post-acquisition",
        "Hard to find quality small deals",
        "Need systematic approach"
      ],
      solutions: [
        "High-volume off-market sourcing",
        "Deep diligence & deal structuring",
        "Operator pipelines with rev-share",
        "Post-close scaling support"
      ],
      containerColor: "bg-pink-900",
      colors: [[236, 72, 153], [219, 39, 119]]
    },
    {
      title: "Emerging PE Funds",
      subtitle: "Family Offices",
      icon: "🏛️",
      age: "Professional",
      profile: "$1M-$20M AUM investors comfortable with $250K-$2M deals seeking efficiency",
      painPoints: [
        "Internal teams too expensive for <$1M",
        "Struggle finding vetted deals",
        "Slow integration & operator placement",
        "Need repeatable playbooks"
      ],
      solutions: [
        "End-to-end sourcing & diligence",
        "Cost-effective India-based teams",
        "Systematized operator handover",
        "Success-based pricing alignment"
      ],
      containerColor: "bg-sky-600",
      colors: [[14, 165, 233], [59, 130, 246]]
    },
    {
      title: "Indian Builders",
      subtitle: "Young Talent",
      icon: "⚡",
      age: "18-28",
      profile: "Engineers and grads from Tier-1/2 cities eager for entrepreneurship opportunities",
      painPoints: [
        "Traditional jobs lack growth/ownership",
        "Don't know how to enter startups",
        "Low pay for high-value work",
        "Limited access to capital"
      ],
      solutions: [
        "Rev-share & salary operator roles",
        "Hands-on training & playbooks",
        "Fast-track to digital entrepreneurship",
        "Micro-finance PE model access"
      ],
      containerColor: "bg-purple-900",
      colors: [[168, 85, 247], [147, 51, 234]]
    }
  ];

  return (
    <>



      Company Overview
      <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-8xl mx-auto">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-12">
              <Target className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-sm font-semibold text-blue-400 tracking-wide">WHAT WE DO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white leading-tight">
              Democratizing Online Business{' '}
              <span className="text-blue-400">Acquisitions</span>
            </h2>
            <div className="space-y-8 text-gray-300 text-xl leading-relaxed mb-16">
              <p>
                Pocket Fund is a <span className="text-white font-medium">micro private equity firm</span> that acquires, builds, and sells small online businesses. With a focus on transparency, speed, and operational excellence, we work with indie founders to identify untapped potential in digital assets.
              </p>
              <p>
                We don&apos;t just acquire companies—we turn them into <span className="text-blue-400 font-medium">case studies for entrepreneurship through acquisition</span>, applying systems, automation, and operational cleanups to unlock hidden value through content marketing and AI workflows.
              </p>
            </div>
            {/* Value Props */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              {[
                { icon: Zap, label: "Transparency", color: "blue" },
                { icon: TrendingUp, label: "Speed", color: "green" },
                { icon: Award, label: "Excellence", color: "purple" }
              ].map((prop, index) => (
                <div key={prop.label} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                  <prop.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 relative z-10" />
                  <div className="text-white font-semibold text-base relative z-10">{prop.label}</div>
                </div>
              ))}
            </div>
            {/* Advisory Services */}
            <div className="relative bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/30 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                <Users className="w-7 h-7 text-orange-400 mr-4" />
                Advisory Services
              </h4>
              <p className="text-gray-300 mb-6 text-lg relative z-10">
                We also advise SaaS companies with <span className="text-white font-semibold">$30k - $300k MRR</span> that are highly profitable with small teams.
              </p>
              <div className="flex items-center text-orange-400 font-medium relative z-10">
                <CheckCircle className="w-6 h-6 mr-3" />
                <span className="text-lg">Strategic guidance for profitable growth</span>
              </div>
            </div>
          </div>
          {/* Right Side - Process */}
          <div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/15 rounded-full blur-xl"></div>
              <h3 className="text-4xl font-bold text-white mb-16 relative z-10">Our Proven Process</h3>
              <div className="space-y-12 relative z-10">
                {[
                  { num: "1", title: "Search & Buy", desc: "Identify and acquire undervalued online businesses", gradient: "from-blue-500 to-blue-600" },
                  { num: "2", title: "Optimize & Scale", desc: "Run for 12-18 months, targeting 5x valuation growth", gradient: "from-orange-500 to-red-500" },
                  { num: "3", title: "Strategic Exit", desc: "Sell the optimized business for maximum returns", gradient: "from-green-500 to-green-600" }
                ].map((step) => (
                  <div key={step.num} className="flex items-start space-x-8 group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {step.num}
                    </div>
                    <div className="flex-1 pt-4">
                      <h4 className="text-white font-bold text-xl mb-3">{step.title}</h4>
                      <p className="text-gray-400 text-lg">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-12 border-t border-gray-800 relative z-10">
                <div className="text-center">
                  <div className="text-6xl font-black text-green-400 mb-3">5x</div>
                  <div className="text-gray-400 text-base font-medium tracking-wide uppercase">Target Valuation Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* By The Numbers Section */}
      <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-sm font-semibold text-blue-400 tracking-wide">BY THE NUMBERS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Driving Exceptional Results
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              In the micro private equity space
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, value: "30-50", label: "Deals evaluated per week" },
              { icon: TrendingUp, value: "2-4x", label: "Average multiples (vs 5-6x market)" },
              { icon: Users, value: "75,000+", label: "Active community members" },
              { icon: Eye, value: "1M+", label: "Monthly impressions" },
              { icon: Trophy, value: "7", label: "Successful acquisitions completed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl font-black text-blue-400 mb-4 relative z-10">
                  {stat.value}
                </div>
                <div className="text-white text-lg font-medium relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Ready to Transform Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Digital Commerce?
            </h3>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-12">
              Join us in democratizing business acquisitions and building the future of micro private equity. Whether you are a founder looking to exit or an investor seeking opportunities, we are here to help.
            </p>
          </motion.div>

          {/* Three Columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Sellers",
                subtitle: "Exit with confidence and transparency",
                icon: "💼"
              },
              {
                title: "For Investors",
                subtitle: "Access curated deal flow and expertise",
                icon: "📈"
              },
              {
                title: "For Partners",
                subtitle: "Collaborate on the future of digital M&A",
                icon: "🤝"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-2xl font-bold text-blue-400 mb-4">
                  {item.title}
                </h4>
                <p className="text-white text-lg leading-relaxed">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <div className="min-h-screen w-full bg-slate-900 text-white relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Main gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

          {/* Additional ambient lights */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pink-500/10 rounded-full blur-2xl animate-pulse-slower"></div>
        </div>

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 100% 60% at 50% 0%, #000 40%, transparent 100%)'
          }}
        ></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="py-20 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >


            </motion.div>
          </div>



          {/* Customer Avatars Section */}
          <Section title="Who We Serve" subtitle="Four distinct customer segments, each with unique needs and solutions">
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {customerAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <AvatarCard avatar={avatar} />
                </motion.div>
              ))}
            </div>
          </Section>



          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20 px-4 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Acquisitions?</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join the entrepreneurs and funds who&apos;ve already discovered the Pocket Fund advantage.
                Let&apos;s discuss how we can accelerate your acquisition strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 text-center">
                  Start Your First Deal
                </a>
                <a href="#contact" className="inline-block border border-purple-500/50 hover:border-purple-500 text-purple-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm text-center">
                  View Case Studies
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          
          @keyframes pulse-slower {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.08); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
          .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
          .animate-float { animation: float 8s ease-in-out infinite; }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </div>
    </>
  );
};

const Section = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <div className="py-20 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
    {children}
  </div>
);

const MetricCard = ({ data }: { data: any }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative h-[28rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-8 w-8 -top-3 -left-3 text-white/20" />
      <Icon className="absolute h-8 w-8 -bottom-3 -left-3 text-white/20" />
      <Icon className="absolute h-8 w-8 -top-3 -right-3 text-white/20" />
      <Icon className="absolute h-8 w-8 -bottom-3 -right-3 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`${data.containerColor} rounded-3xl overflow-hidden`}
              colors={data.colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition-all duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-40 mx-auto flex flex-col items-center justify-center">
          <div className="text-7xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{data.icon}</div>
          <MetricButton metric={data.metric} />
        </div>

        <div className="opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-300 px-6">
          <h2 className="text-white text-3xl font-bold mb-4">{data.metric}</h2>
          <div className="text-5xl font-bold text-purple-400 mb-4">{data.value}</div>
          <p className="text-lg text-gray-300 leading-relaxed">{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const AvatarCard = ({ avatar }: { avatar: any }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative min-h-[45rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white/20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white/20" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white/20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`${avatar.containerColor} rounded-3xl overflow-hidden`}
              colors={avatar.colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition-all duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-40 mx-auto flex flex-col items-center justify-center">
          <div className="text-8xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{avatar.icon}</div>
          <AvatarButton title={avatar.title} subtitle={avatar.subtitle} />
          <div className="mt-6 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30">
            <span className="text-purple-300 text-lg font-medium">Age: {avatar.age}</span>
          </div>
        </div>

        <div className="opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-300 px-4">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-2">{avatar.title}</h2>
            <h3 className="text-purple-300 text-xl font-semibold mb-4">{avatar.subtitle}</h3>
            <p className="text-base leading-relaxed text-gray-300">
              {avatar.profile}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h4 className="text-red-400 font-bold text-lg mb-4">Pain Points</h4>
              {avatar.painPoints.map((point: string, idx: number) => (
                <div key={idx} className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 text-lg">×</span>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-green-400 font-bold text-lg mb-4">Our Solutions</h4>
              {avatar.solutions.map((solution: string, idx: number) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✓</span>
                  <span className="text-gray-300">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RiskCard = ({ risk }: { risk: any }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-8 relative rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-red-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-6 w-6 -top-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -top-2 -right-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -right-2 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <div className={`h-full w-full ${risk.containerColor} rounded-3xl overflow-hidden opacity-60`} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-3xl mr-4">⚠️</span>
              <h4 className="text-red-400 font-bold text-xl">Risk</h4>
            </div>
            <p className="text-white font-semibold text-lg leading-relaxed">{risk.risk}</p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-3xl mr-4">🛡️</span>
              <h4 className="text-green-400 font-bold text-xl">Mitigation</h4>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{risk.mitigation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalCard = ({ goal, index }: { goal: any; index: number }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative h-[18rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-6 w-6 -top-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -top-2 -right-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -right-2 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <div className={`h-full w-full ${goal.color} rounded-3xl overflow-hidden opacity-60`} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-6xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{goal.icon}</div>
        <div className="bg-slate-950/80 rounded-full px-4 py-2 mb-6">
          <span className="text-purple-400 font-bold text-xl">{index + 1}</span>
        </div>
        <p className="text-white text-base font-medium leading-relaxed px-2">{goal.text}</p>
      </div>
    </div>
  );
};

const MetricButton = ({ metric }: { metric: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105">
      <span
        className="absolute inset-[-1000%] animate-spin"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
          animation: 'spin 2s linear infinite'
        }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-purple-400 backdrop-blur-3xl font-bold text-lg hover:text-purple-300 transition-colors duration-300">
        {metric}
      </span>
    </button>
  );
};

const AvatarButton = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105">
      <span
        className="absolute inset-[-1000%]"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
          animation: 'spin 2s linear infinite'
        }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-purple-400 backdrop-blur-3xl font-bold text-center transition-colors duration-300 hover:text-purple-300">
        <div>
          <div className="text-lg">{title}</div>
          <div className="text-sm opacity-80">{subtitle}</div>
        </div>
      </span>
    </button>
  );
};

const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  containerClassName,
  colors = [[255, 255, 255]],
  dotSize = 3
}: {
  animationSpeed?: number;
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
}) => {
  return (
    <div className={`h-full relative bg-black ${containerClassName}`}>
      <div className="h-full w-full">
        {colors.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8) 0%, transparent 50%)`,
              animation: `pulse ${animationSpeed}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.5}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
      </div>
    </div>
  );
};



export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default TrackRecord;