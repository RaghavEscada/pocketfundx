import React from 'react';
import { Briefcase, CheckCircle, DollarSign, Globe, Target, TrendingUp, Users, Award,  } from 'lucide-react';

const Metrics = () => {
    // Team data with photo URLs - replace with actual photos
    const teamMembers = [
        {
            name: "Dev Shah",
            title: "Founder",
            description: "Dev is the force behind every smart acquisition at Pocket Fund. He pulls the levers on investment strategy, runs point on deal negotiations, and has a sixth sense for spotting undervalued digital assets. Equal parts operator and visionary, Dev turns bold ideas into bankable businesses.",
            initials: "DS",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80", // Replace with actual photo
            color: "blue",
            skills: ["Investment Strategy", "Deal Negotiation", "Market Analysis"]
        },
        {
            name: "Aniket Gupta",
            title: "COO & Chief Analyst",
            description: "Aniket is the nerve center of Pocket Fund — managing operations, leading analysis, and keeping the entire machine running smooth. He breaks down messy businesses, finds hidden upside, and ensures every acquisition runs on rails. If Dev dreams it, Aniket makes it real (and scalable).",
            initials: "AG",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80", // Replace with actual photo
            color: "purple",
            skills: ["Operations", "Business Analysis", "Process Optimization"]
        },
        {
            name: "Adarsh Ranjan",
            title: "Analyst & Sales Lead",
            description: "Adarsh brings structure to chaos. From diving into financials to mapping out buyer personas, he is the one turning raw data into sharp insights. With a sharp mind and a steady hand, Adarsh helps power the decisions that move deals forward.",
            initials: "AR",
            photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face&auto=format&q=80", // Replace with actual photo
            color: "emerald",
            skills: ["Financial Analysis", "Sales Strategy", "Data Insights"]
        }
    ];

    const colorVariants = {
        blue: {
            gradient: 'from-blue-500 to-blue-600',
            border: 'border-blue-400/30',
            glow: 'from-blue-500/20 via-purple-500/10 to-blue-600/20',
            hover: 'group-hover:text-blue-300 group-hover:border-blue-500/30 hover:shadow-blue-500/10',
            skill: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
        },
        purple: {
            gradient: 'from-purple-500 to-purple-600',
            border: 'border-purple-400/30',
            glow: 'from-purple-500/20 via-blue-500/10 to-purple-600/20',
            hover: 'group-hover:text-purple-300 group-hover:border-purple-500/30 hover:shadow-purple-500/10',
            skill: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
        },
        emerald: {
            gradient: 'from-emerald-500 to-emerald-600',
            border: 'border-emerald-400/30',
            glow: 'from-emerald-500/20 via-blue-500/10 to-emerald-600/20',
            hover: 'group-hover:text-emerald-300 group-hover:border-emerald-500/30 hover:shadow-emerald-500/10',
            skill: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
        }
    };

    return (
        <div className="bg-slate-900 text-white">
            {/* Key Metrics Section - Enhanced */}
            <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-8xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-12 shadow-lg">
                            <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                          
                            <span className="text-sm font-semibold text-blue-400 tracking-wide">OUR IMPACT</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                            By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Numbers</span>
                        </h2>
                        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                            Driving exceptional results in the micro private equity space with transparency and innovation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Enhanced metric cards with better animations */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="relative bg-gradient-to-br from-gray-900/80 via-slate-900/90 to-blue-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="w-7 h-7 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">30-50</h3>
                                        <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg font-medium group-hover:text-gray-200 transition-colors">Deals evaluated per week</p>
                                <div className="mt-4 text-sm text-blue-400/80">Rigorous due diligence process</div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="relative bg-gradient-to-br from-gray-900/80 via-slate-900/90 to-purple-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <DollarSign className="w-7 h-7 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">2-4x</h3>
                                        <div className="h-1.5 w-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg font-medium group-hover:text-gray-200 transition-colors">Average multiples</p>
                                <div className="mt-4 text-sm text-purple-400/80">vs 5-6x market standard</div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="relative bg-gradient-to-br from-gray-900/80 via-slate-900/90 to-emerald-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">75,000+</h3>
                                        <div className="h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg font-medium group-hover:text-gray-200 transition-colors">Active community members</p>
                                <div className="mt-4 text-sm text-emerald-400/80">Growing daily</div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="relative bg-gradient-to-br from-gray-900/80 via-slate-900/90 to-cyan-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl"></div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">1M+</h3>
                                        <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg font-medium group-hover:text-gray-200 transition-colors">Monthly impressions</p>
                                <div className="mt-4 text-sm text-cyan-400/80">Global reach</div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="relative bg-gradient-to-br from-gray-900/80 via-slate-900/90 to-green-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl"></div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-7 h-7 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-green-300 transition-colors">7</h3>
                                        <div className="h-1.5 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg font-medium group-hover:text-gray-200 transition-colors">Successful acquisitions</p>
                                <div className="mt-4 text-sm text-green-400/80">100% success rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Footer Section */}
            <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
                <div className="max-w-8xl mx-auto text-center">
                    <div className="relative bg-gradient-to-br from-gray-900/90 via-slate-900/95 to-blue-900/90 backdrop-blur-sm border border-gray-800 rounded-3xl p-16 overflow-hidden">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Buy</span>a Business?
                            </h3>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Join us in democratizing business acquisitions and building the future of micro private equity.
                                Whether you are a founder looking to exit or an investor seeking opportunities, we are here to help.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="group">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                                        <Target className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold text-white mb-3">For Sellers</h4>
                                        <p className="text-gray-400 mb-4">Exit with confidence and transparency</p>
                                        <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50">
                                            Schedule Call
                                        </button>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
                                        <Users className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold text-white mb-3">For Investors</h4>
                                        <p className="text-gray-400 mb-4">Access curated deal flow and expertise</p>
                                        <button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 hover:text-green-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-green-500/30 hover:border-green-500/50">
                                            Book Meeting
                                        </button>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                                        <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold text-white mb-3">For Partners</h4>
                                        <p className="text-gray-400 mb-4">Collaborate on the future of digital M&A</p>
                                        <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Completely Redesigned Team Section */}
            <div className="py-32 px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900 relative overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Enhanced Section Header */}
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20 rounded-full px-8 py-4 mb-8 shadow-lg">
                            <Users className="w-6 h-6 text-blue-400 mr-3" />
                            <Award className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-sm font-semibold text-blue-300 tracking-wide">THE TEAM</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Visionaries</span>
                        </h2>
                        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                            The brilliant minds transforming micro acquisitions into extraordinary success stories
                        </p>
                    </div>

                    {/* Enhanced Team Cards with Photos */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {teamMembers.map((member, index) => {
                            const colors = colorVariants[member.color as keyof typeof colorVariants];
                            return (
                                <div key={index} className="group relative">
                                    {/* Enhanced floating background effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}></div>

                                    <div className={`relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-${member.color}-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl ${colors.hover} transition-all duration-500 group-hover:scale-105 overflow-hidden`}>
                                        {/* Enhanced inner glow effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center">
                                            {/* Enhanced Photo/Avatar */}
                                            <div className="relative mb-8">
                                                <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                    <img
                                                        src={member.photo}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Overlay gradient */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                                    {/* Border ring */}
                                                    <div className={`absolute inset-0 rounded-full border-4 ${colors.border} shadow-2xl`}></div>
                                                </div>

                                                {/* Status indicator */}
                                                <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg`}>
                                                   
                                                </div>
                                            </div>

                                            {/* Enhanced Name and Title */}
                                            <h3 className={`text-2xl lg:text-3xl font-black text-white mb-2 text-center ${colors.hover} transition-colors duration-300`}>
                                                {member.name}
                                            </h3>
                                            <div className={`text-${member.color}-400 font-bold text-lg mb-4 text-center`}>
                                                {member.title}
                                            </div>
                                            <div className={`h-1.5 w-20 bg-gradient-to-r from-${member.color}-500 to-purple-500 rounded-full mb-8 group-hover:w-32 transition-all duration-500`}></div>

                                            {/* Skills tags */}
                                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                                {member.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.skill} backdrop-blur-sm`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Enhanced Description */}
                                            <p className="text-gray-300 text-base text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                                {member.description}
                                            </p>

                                            {/* Enhanced floating particles effect */}
                                            <div className={`absolute top-4 right-4 w-2 h-2 bg-${member.color}-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse`}></div>
                                            <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-pulse"></div>
                                            <div className={`absolute top-1/3 left-4 w-1.5 h-1.5 bg-${member.color}-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 animate-pulse`}></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Enhanced Team Stats */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                            <div className="text-gray-300 font-semibold">Analysts</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-8 h-8 text-purple-400" />
                            </div>
                            <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                            <div className="text-gray-300 font-semibold">Years Experience</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              
                            </div>
                            <div className="text-4xl font-black text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                            <div className="text-gray-300 font-semibold">Dedication</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              
                            </div>
                            <div className="text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                            <div className="text-gray-300 font-semibold">Innovation</div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-4">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                                Join Our Team
                            </button>
                            <button className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced floating elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Metrics;