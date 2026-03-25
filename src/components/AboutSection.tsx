import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    description: "Architecting high-performance, responsive websites that deliver seamless user experiences across all devices.",
  },
  {
    number: "02",
    title: "UI/UX DESIGN",
    highlighted: true,
    description: "Crafting intuitive digital journeys through empathetic design and data-driven user experience strategies.",
  },
  {
    number: "03",
    title: "WEB APPLICATIONS",
    description: "Building scalable, robust web applications with modern frameworks to solve complex business challenges.",
  },
  {
    number: "04",
    title: "DIGITAL MARKETING",
    description: "Strategic multi-channel campaigns designed to amplify your brand voice and maximize conversion rates.",
  },
  {
    number: "05",
    title: "SEO OPTIMIZATION",
    description: "Data-led search engine optimization to increase visibility, organic traffic, and domain authority.",
  },
  {
    number: "06",
    title: "BRANDING & IDENTITY",
    description: "Defining unique brand personas that resonate with audiences and stand out in competitive markets.",
  },
  {
    number: "07",
    title: "CONTENT STRATEGY",
    description: "Leveraging compelling storytelling and creative content to build trust and authority.",
  },
  {
    number: "08",
    title: "SOCIAL MEDIA",
    description: "Cultivating vibrant online communities and driving engagement through tailored social strategies.",
  },
];

const AboutSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Direct scroll translation for maximum compatibility and reliability
  // -85% is a more aggressive value to ensure all 8 cards clear the screen
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  // Parallax effects for the intro text
  const introY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section className="bg-white">
      {/* 1. STICKY PROGRESSIVE HEADER (Scrolls up as cards move in) */}
      <motion.div 
         style={{ y: introY, opacity: introOpacity }}
         className="px-6 md:px-10 lg:px-16 pt-32 pb-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="flex-1"
          >
            <p className="text-2xl font-black mb-6 uppercase tracking-tighter text-black flex items-center gap-4">
               <span className="w-12 h-[2px] bg-pink-500 rounded-full" />
               About Our Agency
            </p>
            <p className="text-lg text-gray-500 max-w-sm leading-relaxed font-medium">
              We specialize in pushing the boundaries of digital possibilities. From concept to code, we deliver excellence through innovation and precision.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
             className="flex-1"
          >
             <h2 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-black">
               Crafting the<br />Future of Digital<br />Experiences
             </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. MAIN HORIZONTAL SCROLL AREA */}
      <div ref={targetRef} className="relative h-[600vh] bg-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          {/* Background Decorative Element */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-black leading-none uppercase select-none">
               SERVICES
             </div>
          </div>

          <motion.div 
            style={{ x }} 
            className="relative z-10 flex gap-12 px-10 md:px-20 will-change-transform items-center"
          >
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} scrollYProgress={scrollYProgress} index={i} />
            ))}
          </motion.div>

          {/* 3. SCROLL PROGRESS BAR */}
          <div className="absolute bottom-20 left-10 md:left-20 right-10 md:right-20 h-1 bg-gray-100 rounded-full overflow-hidden">
             <motion.div 
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                className="w-full h-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" 
             />
          </div>
        </div>
      </div>

      {/* 4. POST-SCROLL FINALE (Massive Reveal) */}
      <div className="px-6 md:px-10 lg:px-16 py-40 bg-white text-black relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <h2 className="text-[120px] md:text-[200px] font-black tracking-[-0.05em] leading-none text-black select-none">500+</h2>
            <p className="text-2xl font-black uppercase tracking-[0.4em] text-pink-500 -mt-4 text-center md:text-left">Projects Delivered</p>
          </motion.div>
          
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold leading-tight uppercase tracking-tight text-gray-900 italic"
            >
              "We've partnered with industry leaders to launch products that redefine markets. Our commitment to quality is unwavering."
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-12 py-6 bg-black text-white font-black uppercase text-sm rounded-full hover:bg-pink-500 transition-all shadow-2xl tracking-[0.2em]"
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, scrollYProgress, index }: any) => {
  const cardRef = useRef(null);
  
  // Subtle parallax tilt for each card as they move through the screen
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 2 : -2, index % 2 === 0 ? -2 : 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotate, scale }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative h-[500px] w-[350px] md:w-[540px] flex-shrink-0 border border-gray-100 p-12 flex flex-col justify-between transition-colors hover:border-pink-500/30 bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] rounded-[40px]"
    >
      {/* Numbering */}
      <div className="flex justify-between items-start">
        <span className="text-8xl md:text-[140px] font-black text-pink-500 opacity-[0.08] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 leading-none select-none">
          {service.number}
        </span>
        <motion.div 
          whileHover={{ rotate: 90 }}
          className="w-14 h-14 border border-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm"
        >
          <ArrowUpRight size={28} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.9] group-hover:text-pink-500 transition-colors">
          {service.title.split(' ').map((word: string, i: number) => (
             <span key={i} className="block">{word}</span>
          ))}
        </h3>
        <p className="text-sm md:text-base text-gray-400 font-bold leading-relaxed uppercase tracking-widest group-hover:text-black transition-colors max-w-[320px]">
          {service.description}
        </p>
      </div>

      {/* Background Micro-animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />
      
      {/* Dynamic line */}
      <div className="absolute bottom-10 left-12 right-12 h-[2px] bg-gray-100 rounded-full overflow-hidden">
         <div className="w-0 h-full bg-pink-500 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </motion.div>
  );
};

export default AboutSection;
