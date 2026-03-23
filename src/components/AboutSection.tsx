import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "We don't believe in one-size-fits-all solutions. Our design process starts with understanding your brand's unique identity.",
  },
  {
    title: "Graphic Design",
    highlighted: true,
    description:
      "In a world where mobile devices dominate, having a well designed app is essential for engaging customers.",
  },
  {
    title: "Motion Graphic",
    description:
      "Whether you're looking to enhance your marketing videos or create stunning visual content.",
  },
  {
    title: "Illustration",
    description:
      "We specialize in crafting unique, eye-catching illustrations that elevate your brand.",
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
              An agency is an organization or entity that provides a specific
              service on behalf of another party. In many cases, agencies act as
              intermediaries.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <button className="border-2 border-gray-900 px-5 py-2.5 rounded-full text-xs hover:bg-black hover:text-white transition">
                Learn More
              </button>

              <button className="w-9 h-9 border-2 border-gray-900 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT HEADING */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Transforming{" "}
              <span className="inline-flex items-center">
                <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mx-1">
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                </span>
              </span>
              <br />
              ideas into visually
              <br />
              stunning realities
            </h2>
          </div>
        </div>

        {/* BOTTOM SECTION */}

        <div className="flex flex-col lg:flex-row gap-10 items-start mx-auto mt-10 ">
          {/* LEFT: GLASS CARD */}
          <div className="relative w-full lg:w-[400px] flex-shrink-0 h-auto ">
            {/* Gradient Border Card */}
            <div className="p-[3px] rounded-[32px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-2xl">
              {/* Inner Card */}
              <div className="bg-white  rounded-[30px] p-8 flex flex-col justify-between h-full min-h-[480px]">
                {/* Top - Badges on RIGHT */}
                <div className="flex gap-3 mb-6 justify-end">
                  <span className="text-xs border border-gray-900 px-4 py-2 rounded-full font-medium font-extrabold">
                    Our Service
                  </span>
                  <span className="text-xs border border-gray-900 px-4 py-2 rounded-full font-medium font-extrabold">
                    2024
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center mb-6">
                  <ArrowUpRight size={24} className="text-white" />
                </div>

                {/* Text - Large Font & Gradient Color */}
                <div>
                  <h2 className="text-4xl font-bold leading-none text-purple-900 bg-clip-text text-transparent mb-2">
                    720+ projects
                  </h2>

                  <p className="text-4xl font-bold text-purple-900 mb-4">
                    launched
                  </p>

                  <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                    We work in detail for every project, trust me.
                  </p>
                </div>

                {/* Button */}
                <button className="mt-8 border-2 border-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>



          {/* web design */}
          <div className="w-full">
  {services.map((service, i) => (
    <div
      key={i}
      className={`p-5 rounded-2xl border border-gray-500  transition hover:shadow-md mb-3 ${
        service.highlighted
          ? "bg-purple-600 text-white border-purple-600"
          : "bg-white text-black border-gray-200"
      }`}
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-3 ">
        <span
          className={`text-sm font-semibold  ${
            service.highlighted ? "text-white" : "text-black"
          }`}
        >
          {service.title}
        </span>

        {/* Arrow */}
        <div
          className={`w-7 h-7 flex items-center justify-center rounded-full mb-3 ${
            service.highlighted ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          →
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-xs leading-relaxed ${
          service.highlighted ? "text-white/80" : "text-gray-600"
        }`}
      >
        {service.description}
      </p>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
