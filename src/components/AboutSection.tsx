import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  // This ensures every card moves fully to the left side as the user scrolls
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);

  return (
    <section className="bg-white overflow-hidden">
      {/* Intro text */}
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex-1"
          >
            <p className="text-2xl font-black mb-4 uppercase tracking-tighter text-black">About Us</p>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed font-medium">
              We specialize in pushing the boundaries of digital possibilities. From concept to code, we deliver excellence through innovation and precision.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             className="flex-1"
          >
             <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-black">
               Crafting the<br />Future of Digital<br />Experiences
             </h2>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={targetRef} className="relative h-[450vh] bg-white">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div 
            style={{ x }} 
            className="flex gap-10 px-10 md:px-20 will-change-transform"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative h-[450px] w-[350px] md:w-[500px] flex-shrink-0 border border-gray-100 p-10 flex flex-col justify-between transition-all duration-300 hover:border-black/20 bg-white"
              >
                {/* Number */}
                <div className="flex justify-between items-start">
                  <span className="text-7xl md:text-9xl font-black text-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter uppercase leading-none group-hover:text-pink-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed uppercase tracking-widest group-hover:text-black transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-1 bg-pink-500 transition-all duration-500 w-0 group-hover:w-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 md:px-10 lg:px-16 py-32 bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none text-black">500+</h2>
            <p className="text-xl font-bold uppercase tracking-widest text-pink-500 mt-4">Projects Delivered</p>
          </motion.div>
          
          <div className="max-w-md">
            <p className="text-xl font-medium leading-relaxed uppercase tracking-tight text-gray-500 italic">
              "We've partnered with industry leaders to launch products that redefine markets. Our commitment to quality is unwavering."
            </p>
            <button className="mt-8 px-10 py-5 bg-black text-white font-black uppercase text-sm rounded-full hover:bg-pink-500 transition-all transform hover:scale-105 shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
