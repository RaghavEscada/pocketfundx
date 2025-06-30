import React from 'react';
import { ArrowRight, Target, TrendingUp, Users, CheckCircle, Zap, DollarSign, Calendar, Award, Star, Globe, Briefcase, Building2 } from 'lucide-react';
import BusinessAcquisitionTimeline from './ui/timeline';

const About = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);

  const acquisitions = [
    {
      name: "Sourcely",
      logoImage: "/sourcely.webp",
      description: "AI-powered academic search assistant with access to over 200 million papers and advanced search filters",
      url: "sourcely.net",
      price: 4000,
      type: "SaaS",
      status: "Acquired",
      technology: "AI Research"
    },
    {
      name: "The Empire Exchange",
      logoImage: "/jeditimes.webp",
      description: "Your bi-weekly dose of all the best loot from a galaxy far, far away sent straight to your inbox",
      url: "jeditimes.com",
      price: 3000,
      type: "Newsletter",
      subscribers: "6,000+",
      status: "Scaling"
    },
    {
      name: "UCAS Statement Generator",
      logoImage: "/slash.webp",
      description: "SaaS tool for generating UCAS statements for university applications",
      url: "ucasstatementgenerator.com",
      price: 3500,
      type: "SaaS",
      status: "Acquired",
      technology: "EdTech"
    },
    {
      name: "Ana - AI Language Tutor",
      logoImage: "/ana.webp",
      description: "Your personalized AI tutor to practice languages conversationally and improve speaking fluency",
      url: "anatutor.com",
      price: 5000,
      type: "WhatsApp Bot",
      status: "Acquired",
      technology: "AI Tutor"
    },
    {
      name: "Daily Wisdom",
      logoImage: "/dailywisdom.webp",
      description: "Spiritual newsletter delivering daily wisdom and inspiration to subscribers",
      url: "dailywisdom.so",
      price: 2000,
      type: "Newsletter",
      status: "Acquired"
    },
    {
      name: "Jobless",
      logoImage: "/slash.webp",
      description: "Your go-to source for tech jobs, tips, and real stories from builders, hackers, and doers",
      url: "joblessnews.beehiiv.com",
      price: 12500,
      type: "Newsletter",
      status: "Acquired"
    }
  ];
  const stats = [
    {
      label: "Strong community around buying businesses",
      value: "75,000",
      icon: Users
    },
    {
      label: "Years of experience",
      value: "2+",
      icon: Calendar
    },
    {
      label: "Portfolio companies",
      value: "7",
      icon: Building2
    },
    {
      label: "Deals sourced every week",
      value: "50+",
      icon: Target
    }
  ];


  const services = [
    {
      title: "Micro Acquisitions",
      description: "SaaS, newsletters, mobile apps, and niche content sites under $100K",
      icon: Target,
      color: "blue"
    },
    {
      title: "Buy-Side Advisory",
      description: "For solo buyers, creators, funds, and family offices",
      icon: Users,
      color: "green"
    },
    {
      title: "Deal Flow Engine",
      description: "Surfaces 30–50 off-market opportunities weekly",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "Operator Placement",
      description: "Revenue-linked incentives post-acquisition",
      icon: CheckCircle,
      color: "orange"
    },
    {
      title: "Exit Planning",
      description: "For portfolio companies with 6–18 month windows",
      icon: Calendar,
      color: "pink"
    },
    {
      title: "Growth Acceleration",
      description: "AI workflows, automation, and operational excellence",
      icon: Zap,
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-orange-500/8 rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative py-24 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side - Content */}
              <div className={`space-y-8 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* About Us Label with Simple Design */}
                <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-8 hover:bg-gray-800/80 transition-all duration-300">
                  <Target className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-sm font-semibold text-gray-300 tracking-wide">ABOUT US</span>
                </div>

                {/* Main Heading with Clean Design */}
                <div className="relative">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-8">
                    Pocket
                    <br />
                    Fund
                  </h1>
                </div>

                {/* Clean Description */}
                <div className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 space-y-6">
                  <p>
                    At <span className="text-white font-semibold">Pocket Fund</span>, we are dedicated to transforming the
                    acquisition landscape for micro digital businesses.
                  </p>
                  <p>
                    Headquartered in <span className="text-white font-semibold">Mumbai, India</span>, and operating on a global
                    scale, our firm specializes in acquiring small online businesses,
                    targeting investments between <span className="text-white font-semibold">$50,000 and $5,000,000</span>.
                  </p>
                  <p>
                    With over <span className="text-white font-semibold">2 years of experience</span>, we have honed
                    our expertise in the SaaS, newsletter, and digital content sectors,
                    enabling us to deliver unparalleled results for our portfolio companies.
                  </p>
                </div>

                {/* Simple CTA Button */}
                <div className="pt-4">
                  <button className="group flex items-center text-white text-lg font-medium bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg px-8 py-4 hover:bg-gray-800/80 hover:border-gray-600 transition-all duration-300">
                    <span className="border-b-2 border-white group-hover:border-gray-300 transition-colors duration-300 pb-1">
                      Start Your Journey Today
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Right Side - Clean Stats Grid */}
              <div className={`grid grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <div className={`relative bg-gray-900/60 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${hoveredStat === index
                        ? 'border-gray-600 bg-gray-900/80'
                        : 'border-gray-800 hover:border-gray-700'
                        }`}>

                        {/* Icon */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 rounded-lg bg-gray-800/60 border border-gray-700">
                            <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Value */}
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                          {stat.value}
                        </div>

                        {/* Label */}
                        <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Team Section */}
        <div className="py-32 px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-[moveGrid_20s_linear_infinite]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full px-8 py-4 mb-8 shadow-lg">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-sm font-semibold text-blue-300 tracking-wide">THE TEAM</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Visionaries</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                The brilliant minds transforming micro acquisitions into extraordinary success stories
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Dev Shah */}
              <div className="group relative">
                {/* Floating background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>

                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-blue-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500/30 overflow-hidden">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Avatar */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-2xl border-4 border-blue-400/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <span className="relative z-10">DS</span>
                    </div>

                    {/* Name and Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 text-center group-hover:text-blue-300 transition-colors duration-300">Dev Shah</h3>
                    <div className="text-blue-400 font-semibold text-lg mb-1 text-center">Founder & Investment Lead</div>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500"></div>

                    {/* Description */}
                    <p className="text-gray-300 text-base text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Dev is the force behind every smart acquisition at Pocket Fund. He pulls the levers on investment strategy, runs point on deal negotiations, and has a sixth sense for spotting undervalued digital assets. Equal parts operator and visionary, Dev turns bold ideas into bankable businesses.
                    </p>

                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Aniket Gupta */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>

                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-purple-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-2xl border-4 border-purple-400/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <span className="relative z-10">AG</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 text-center group-hover:text-purple-300 transition-colors duration-300">Aniket Gupta</h3>
                    <div className="text-purple-400 font-semibold text-lg mb-1 text-center">COO & Chief Analyst</div>
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500"></div>

                    <p className="text-gray-300 text-base text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Aniket is the nerve center of Pocket Fund — managing operations, leading analysis, and keeping the entire machine running smooth. He breaks down messy businesses, finds hidden upside, and ensures every acquisition runs on rails. If Dev dreams it, Aniket makes it real (and scalable).
                    </p>

                    <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                    <div className="absolute bottom-6 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Adarsh Ranjan */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/10 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>

                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-green-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group-hover:scale-105 group-hover:border-green-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-2xl border-4 border-green-400/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <span className="relative z-10">AR</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 text-center group-hover:text-green-300 transition-colors duration-300">Adarsh Ranjan</h3>
                    <div className="text-green-400 font-semibold text-lg mb-1 text-center">Analyst & Sales Lead</div>
                    <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500"></div>

                    <p className="text-gray-300 text-base text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Adarsh brings structure to chaos. From diving into financials to mapping out buyer personas, he is the one turning raw data into sharp insights. With a sharp mind and a steady hand, Adarsh helps power the decisions that move deals forward.
                    </p>

                    <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                <div className="text-gray-300 font-medium">Analysts</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-gray-300 font-medium">Passion & Drive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 mb-40">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-12 shadow-lg">
              <Target className="w-6 h-6 text-blue-400 mr-3" />
              <span className="text-sm font-semibold text-blue-400 tracking-wide">OUR FOUNDATION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Mission &amp; <span className="text-blue-400">Vision</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              What drives us forward and where we&apos;re headed
            </p>
          </div>
          {/* New Layout - Stacked with Central Divider */}
          <div className="max-w-7xl mx-auto relative">
            {/* Central Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50 transform -translate-x-1/2 hidden lg:block"></div>
            {/* Mission Card - Left */}
            <div className="relative mb-16 lg:mb-32">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                {/* Mission Content */}
                <div className="lg:pr-16 mb-8 lg:mb-0">
                  <div className="relative bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-12 overflow-hidden hover:scale-105 transition-all duration-700 group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-white mb-2">Mission</h3>
                          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xl leading-relaxed mb-8">
                        Make buying a business as accessible as buying a used car. Pocket Fund empowers builders and investors to acquire and grow micro digital assets with confidence, clarity, and operating leverage.
                      </p>
                      <div className="flex items-center text-blue-400 font-semibold">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                        <span>Democratizing Digital Acquisitions</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mission Visual Element */}
                <div className="lg:pl-16 flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl absolute inset-0"></div>
                    <div className="w-64 h-64 bg-gray-900/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl flex items-center justify-center relative z-10 hover:scale-110 transition-all duration-500">
                      <div className="text-center flex flex-col items-center">
                        <Target className="w-20 h-20 text-blue-400 mb-4" />
                        <div className="text-blue-400 font-bold text-xl">Accessible</div>
                        <div className="text-gray-400">Business Buying</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Vision Card - Right */}
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                {/* Vision Visual Element */}
                <div className="lg:pr-16 flex justify-center lg:justify-end order-2 lg:order-1 mb-8 lg:mb-0">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl absolute inset-0"></div>
                    <div className="w-64 h-64 bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-3xl flex items-center justify-center relative z-10 hover:scale-110 transition-all duration-500">
                      <div className="text-center flex flex-col items-center">
                        <TrendingUp className="w-20 h-20 text-green-400 mb-4" />
                        <div className="text-green-400 font-bold text-xl">Next-Gen</div>
                        <div className="text-gray-400">Private Equity</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vision Content */}
                <div className="lg:pl-16 order-1 lg:order-2">
                  <div className="relative bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-blue-500/10 border border-green-500/30 rounded-3xl p-12 overflow-hidden hover:scale-105 transition-all duration-700 group">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-white mb-2">Vision</h3>
                          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xl leading-relaxed mb-8">
                        Redefine private equity for a new generation — operator-led, India-powered, and globally scalable. Become the category-defining firm in the &lt;$1M digital M&A space.
                      </p>
                      <div className="flex items-center text-green-400 font-semibold">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                        <span>Category-Defining Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              What We <span className="text-blue-400">Do</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              We&apos;re not just investors, we&apos;re builders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={service.title} className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <service.icon className="w-12 h-12 text-blue-400 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>



  )
};


export default About;