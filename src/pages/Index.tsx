import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhatWeBuild from "@/components/WhatWeBuild";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyLitSolutions from "@/components/WhyLitSolutions";
import Process from "@/components/Process";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <TrustStrip />
    <WhatWeBuild />
    <FeaturedProjects />
    <WhyLitSolutions />
    <Process />
    <CTABlock />
    <Footer />
  </div>
);

export default Index;
