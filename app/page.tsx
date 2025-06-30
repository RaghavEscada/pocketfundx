"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Horizontal from "@/components/horizontal";
import TimelineDemo from "@/components/ui/timeline";

const Home = () => {
  return (
    <main className="relative bg-black-100">
      {/* FloatingNav positioned absolutely to overlay on full-width content */}
      <FloatingNav navItems={navItems} />

      {/* Hero takes full width and height */}
      <Hero />
      <div className="relative">
        <Horizontal />
      </div>

      <div id="grid">
        <Grid />
      </div>

      <div id="timeline">
        <TimelineDemo />
      </div>

      {/* Main content sections */}
      <div className="relative">

        <div id="recentprojects">
          <RecentProjects />
        </div>
        <div id="testimonial">
          <Clients />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Home;