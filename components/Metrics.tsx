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
        </div>
    );
};

export default Metrics; 