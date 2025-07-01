import React from 'react';
import { Briefcase, CheckCircle, DollarSign, Globe, Target, TrendingUp, Users } from 'lucide-react';

const Metrics = () => {
    return (
        <div className="bg-slate-900 text-white">
            {/* Key Metrics Section */}
            <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
                <div className="max-w-8xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-12">
                            <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                            <span className="text-sm font-semibold text-blue-400 tracking-wide">OUR IMPACT</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                            By The <span className="text-blue-400">Numbers</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                            Driving exceptional results in the micro private equity space
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Deal Volume */}
                        <div className="relative group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Briefcase className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">30-50</h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg">Deals evaluated per week</p>
                        </div>
                        {/* Multiples */}
                        <div className="relative group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <DollarSign className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">2-4x</h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg">Average multiples (vs 5-6x market)</p>
                        </div>
                        {/* Community */}
                        <div className="relative group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">75,000+</h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg">Active community members</p>
                        </div>
                        {/* Impressions */}
                        <div className="relative group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">1M+</h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg">Monthly impressions</p>
                        </div>
                        {/* Acquisitions */}
                        <div className="relative group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">7</h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg">Successful acquisitions completed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
                <div className="max-w-8xl mx-auto text-center">
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-16 overflow-hidden">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                Ready to <span className="text-blue-400">Transform</span> Digital Commerce?
                            </h3>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                                Join us in democratizing business acquisitions and building the future of micro private equity.
                                Whether you are a founder looking to exit or an investor seeking opportunities, we are here to help.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="group">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                                        <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                        <h4 className="text-xl font-bold text-white mb-3">For Sellers</h4>
                                        <p className="text-gray-400">Exit with confidence and transparency</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
                                        <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                        <h4 className="text-xl font-bold text-white mb-3">For Investors</h4>
                                        <p className="text-gray-400">Access curated deal flow and expertise</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                                        <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                                        <h4 className="text-xl font-bold text-white mb-3">For Partners</h4>
                                        <p className="text-gray-400">Collaborate on the future of digital M&A</p>
                                    </div>
                                </div>
                            </div>
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

                {/* Subtle floating elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Metrics;