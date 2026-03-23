import { ArrowUpRight } from "lucide-react";
import herog from "@/assets/herog.jpg";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const line1 = "Bring all your".split(" ");
  const line2 = "ideas to life with our".split(" ");
  const line3 = "creative magic".split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordAnim: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a premium "reveal" feel
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] px-6 md:px-12 lg:px-20 pt-16 pb-8 overflow-hidden flex items-center bg-white">
      {/* Background image - Properly covering the full screen height */}
      <div className="absolute inset-0 z-0">
        <img
          src={herog}
          alt="Hero background"
          className="w-full h-full object-cover object-center pointer-events-none" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 w-full h-full">
        {/* Left Content - Scaled to fit single screen height */}
        <div className="flex-1 max-w-3xl text-left flex flex-col justify-center h-full">
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-[900] leading-[0.95] tracking-tighter text-[#111111] uppercase select-none"
          >
            <div className="overflow-hidden inline-block mr-2 sm:mr-4">
              {line1.map((word, i) => (
                <motion.span variants={wordAnim} key={i} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-2 sm:mr-4">
              {line2.map((word, i) => (
                <motion.span variants={wordAnim} key={i} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-2 sm:mr-4">
              {line3.map((word, i) => (
                <motion.span variants={wordAnim} key={i} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm md:text-base text-[#444444] mt-6 max-w-lg leading-relaxed font-medium"
          >
            Our creative team gets to work, crafting a custom design that's not only beautiful but functional. We develop your landing page using the latest technologies and best practices.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mt-8"
          >
            <button className="bg-[#f0f0f0] border border-[#e5e5e5] px-7 py-3.5 rounded-full text-sm font-bold text-[#111111] hover:bg-white transition-all shadow-sm">
              Get started
            </button>
            <button className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Right Content - Empty as the background image covers this area with the sculpture */}
        <div className="hidden lg:block lg:flex-1" />
      </div>
    </section>
  );
};

export default Hero;
