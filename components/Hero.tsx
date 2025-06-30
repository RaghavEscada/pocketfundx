import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Target, TrendingUp, Users, Award, Briefcase, Play, DollarSign, Search, FileText, Handshake, UserCheck, BarChart3 } from "lucide-react";
import Image from "next/image";
import LottiePlayer from "./ui/LottiePlayer";

// Enhanced Mouse Position Hook
interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

// Compact Text Flip Component
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Smart Investors", "Wealth Builders", "Deal Makers", "Industry Leaders"],
  interval = 2500,
  className,
  textClassName,
  animationDuration = 500,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval, animationDuration]);

  return (
    <div className="relative inline-block">
      <span
        className={cn(
          "inline-block text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-500",
          "bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent",
          "drop-shadow-lg shimmer-text",
          isAnimating ? "opacity-0 transform translate-y-4 scale-95" : "opacity-100 transform translate-y-0 scale-100",
          className,
        )}
      >
        {words[currentWordIndex]}
      </span>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-r from-blue-400 to-white rounded-lg pulse-glow" />
    </div>
  );
}

// Simple Moving Grid Background
const MovingGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Single clean moving grid */}
      <div className="absolute inset-0 opacity-50 moving-grid" />

      {/* Subtle blue accent */}
      <div className="absolute inset-0 opacity-10 pulse-blue" />
    </div>
  );
};

// Compact Logo Cloud - Financial Services & Private Equity
const logos1 = [
  { name: "Babel", url: "https://svgl.app/library/babel.svg" },
  { name: "Ngrok", url: "https://svgl.app/library/ngrok-light.svg" },
  { name: "Webflow", url: "https://svgl.app/library/webflow.svg" },
  { name: "Perplexity", url: "https://svgl.app/library/perplexity_wordmark_light.svg" },
  { name: "Sanity", url: "https://svgl.app/library/sanity.svg" },
  { name: "Post CSS", url: "https://svgl.app/library/postcss_wordmark.svg" },
];

const LogoMarquee = ({ logos, direction = "left", speed = 25 }: { logos: any[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative overflow-hidden py-1">
      <div className={`flex gap-6 whitespace-nowrap ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="flex gap-6 shrink-0">
            {logos.map((logo, logoIndex) => (
              <div
                key={logoIndex}
                className="flex items-center justify-center h-10 w-28 rounded-lg px-3 py-1.5 hover:scale-105 hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-6 w-auto max-w-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xs font-semibold text-gray-700">${logo.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Animation component to replace framer-motion
const AnimatedDiv = ({
  children,
  className = "",
  delay = 0,
  duration = 800,
  from = "opacity-0 translate-y-8",
  to = "opacity-100 translate-y-0"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: string;
  to?: string;
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ${inView ? to : from} ${className}`}
    >
      {children}
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes moveGrid {
          0% { background-position: 0% 0%; }
          100% { background-position: 60px 60px; }
        }
        @keyframes pulseBlue {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-800px); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-800px); }
          100% { transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .moving-grid {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: moveGrid 25s linear infinite;
        }
        .pulse-blue {
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          animation: pulseBlue 8s ease-in-out infinite;
        }
        .marquee-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .marquee-right {
          animation: marqueeRight 25s linear infinite;
        }
        .shimmer-text {
          background-size: 200% 200%;
          background-position: 0% 50%;
          animation: shimmer 3s ease-in-out infinite alternate;
        }
        .duration-800 { transition-duration: 800ms; }
        .duration-600 { transition-duration: 600ms; }
      `}</style>

      {/* Hero Section */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white py-12">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12">
          {/* Left: Headline, Subheadline, Description, CTA */}
          <div className="flex-1 flex flex-col items-start justify-center text-left space-y-6 max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1">First-of-its-kind Micro Private Equity Firm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight">
              Pocket Fund
            </h1>
            <div className="text-2xl md:text-3xl text-gray-700 font-medium flex items-center gap-2">
              Transforms Ideas & Acquisitions Into
              <span className="inline-block align-middle">
                <ContainerTextFlip
                  words={["Growing Assets", "Market Leaders", "Smart Investments", "Success Stories"]}
                  interval={1400}
                  animationDuration={300}
                  className="px-4 py-2 rounded-lg font-bold shadow text-red-900"
                />
              </span>
            </div>
            <div className="text-lg text-gray-700 font-medium mt-2">
              Pocket Fund bridges the gap between ambitious buyers and quality deals
            </div>
            <div className="text-base text-gray-500">
              End-to-end acquisition advisory for digital businesses under $10M. From sourcing and diligence to post-acquisition scale.<br />
              Complete end to end acquisition support.
            </div>
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition">Start Your Acquisition</button>
              <button className="px-6 py-3 border border-blue-200 text-blue-700 rounded-lg bg-white hover:bg-blue-50 transition">Watch Process</button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center w-full md:w-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white max-w-2xl w-full aspect-[16/9] flex items-center justify-center">
              <Image
                src="/pe.webp"
                alt="Pocket Fund Logo"
                width={800}
                height={450}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Deal Matching Section with Enhanced Flow Lines */}
      <div className="py-4 bg-white w-full relative z-20">
        <div className="w-full px-2 flex flex-col items-center">
          <div className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg bg-white flex items-center justify-center" style={{ minHeight: '180px', padding: '1rem 0' }}>
            <LottiePlayer src="https://cdn.lottielab.com/l/5Gn1jXUt1kSREm.json" />
          </div>
        </div>
      </div>

      {/* 5 Core Services Section */}
      <div className="pt-8 md:pt-20 lg:pt-32 xl:pt-48 pb-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedDiv className="text-center mb-20">
            <div className="max-w-8xl mx-auto text-center">
              <div className="inline-flex items-center bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-4 mb-12 shadow-2xl">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-sm font-medium text-gray-300 tracking-wide">First-of-its-kind Micro Private Equity Firm</span>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
                We help you acquire high-potential businesses under $10M.
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Core Services
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              End-to-end acquisition support from deal sourcing to exit preparation.
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Deal Sourcing",
                description: "Off-market focus with exclusive deal flow and proprietary networks"
              },
              {
                icon: FileText,
                title: "Due Diligence",
                description: "Technical, financial, and operational analysis with comprehensive risk assessment"
              },
              {
                icon: Handshake,
                title: "Deal Structuring & Negotiation",
                description: "Optimal terms negotiation and transaction structure optimization"
              },
              {
                icon: UserCheck,
                title: "Transition + Operator Placement",
                description: "Seamless handover with vetted operator matching and integration support"
              },
              {
                icon: BarChart3,
                title: "Growth Playbooks + Exit Prep",
                description: "Strategic growth roadmaps and exit strategy preparation for maximum value"
              }
            ].map((service, index) => (
              <AnimatedDiv
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 ${hoveredFeature === index ? 'shadow-2xl shadow-blue-500/25' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                delay={index * 150}
                from="opacity-0 translate-y-12"
                to="opacity-100 translate-y-0"
              >
                <div
                  className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-3 transition-transform duration-300"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>



    </div>
  );
};

export default Hero;