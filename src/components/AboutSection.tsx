import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Architecting high-performance, responsive websites that deliver seamless user experiences across all devices.",
  },
  {
    title: "UI/UX Design",
    highlighted: true,
    description: "Crafting intuitive digital journeys through empathetic design and data-driven user experience strategies.",
  },
  {
    title: "Web Applications",
    description: "Building scalable, robust web applications with modern frameworks to solve complex business challenges.",
  },
  {
    title: "Digital Marketing",
    description: "Strategic multi-channel campaigns designed to amplify your brand voice and maximize conversion rates.",
  },
  {
    title: "SEO Optimization",
    description: "Data-led search engine optimization to increase visibility, organic traffic, and domain authority.",
  },
  {
    title: "Branding & Identity",
    description: "Defining unique brand personas that resonate with audiences and stand out in competitive markets.",
  },
  {
    title: "Content Strategy",
    description: "Leveraging compelling storytelling and creative content to build trust and authority.",
  },
  {
    title: "Social Media",
    description: "Cultivating vibrant online communities and driving engagement through tailored social strategies.",
  },
];

const AboutSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT TEXT */}
          <div className="flex-1">
            <p className="text-2xl font-extrabold mb-4">About Us</p>

            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              We are a forward-thinking digital agency dedicated to elevating your brand through innovative technology and creative excellence.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <button className="border-2 border-gray-900 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-black hover:text-white transition">
                Learn More
              </button>

              <button className="w-9 h-9 border-2 border-gray-900 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT HEADING */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Transforming{" "}
              <span className="inline-flex items-center">
                <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-1">
                  <span className="w-4 h-4 rounded-full bg-purple-600 animate-pulse" />
                </span>
              </span>
              <br />
              ideas into digital
              <br />
              masterpieces
            </h2>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mx-auto mt-16 ">
          {/* LEFT: GLASS CARD */}
          <div className="relative w-full lg:w-[400px] flex-shrink-0 h-auto self-stretch">
            {/* Gradient Border Card */}
            <div className="p-[3px] rounded-[32px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-2xl h-full">
              {/* Inner Card */}
              <div className="bg-white rounded-[30px] p-8 flex flex-col justify-between h-full">
                {/* Top - Badges on RIGHT */}
                <div className="flex gap-3 mb-6 justify-end">
                  <span className="text-[10px] uppercase tracking-wider border border-gray-200 px-4 py-2 rounded-full font-extrabold bg-gray-50">
                    Excellence
                  </span>
                  <span className="text-[10px] uppercase tracking-wider border border-gray-200 px-4 py-2 rounded-full font-extrabold bg-gray-50">
                    2024
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-8 shadow-xl">
                  <ArrowUpRight size={28} className="text-white" />
                </div>

                {/* Text - Large Font & Gradient Color */}
                <div>
                  <h2 className="text-5xl font-black leading-none text-black mb-2">
                    500+
                  </h2>

                  <p className="text-3xl font-bold text-gray-800 mb-6">
                    Projects Delivered
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    Precision, passion, and performance in every line of code and every pixel we craft.
                  </p>
                </div>

                {/* Button */}
                <button className="mt-10 bg-black text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>

          {/* Right: Services Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] cursor-default flex flex-col justify-between ${service.highlighted
                  ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-200"
                  : "bg-white text-black border-gray-100 hover:border-purple-200 hover:shadow-xl"
                  }`}
              >
                <div>
                  {/* Title and Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${service.highlighted
                        ? "bg-white text-purple-600"
                        : "bg-black text-white group-hover:bg-purple-600"
                        }`}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed opacity-80 ${service.highlighted ? "text-white" : "text-gray-600"
                      }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
