import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Design ☺",
    description:
      "We don't believe in one-size-fits-all solutions. Our design process starts with understanding your brand's unique identity, goals, and target audience. We then create a custom design.",
  },
  {
    title: "Graphic Design ☺",
    highlighted: true,
    description:
      "In a world where mobile devices dominate, having a well designed app is essential for engaging customers and growing your business.",
  },
  {
    title: "Motion Graphic ☺",
    description:
      "Whether you're looking to enhance your marketing videos, create stunning visual content for social media, or develop compelling animations for your website.",
  },
  {
    title: "Illustration ☺",
    description:
      "We specialize in crafting unique, eye-catching illustrations that elevate your brand and engage your audience. Whether you need custom artwork for your marketing.",
  },
];

const AboutSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left - About text */}
          <div className="flex-1">
            <p className="section-label mb-4">About Us</p>
            <p className="body-text max-w-sm">
              An agency is an organization or entity that provides a specific service on behalf of another party. In many cases, agencies act as intermediaries.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <button className="btn-outline text-xs px-5 py-2.5">Learn More</button>
              <button className="btn-icon w-9 h-9">
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Right - Heading */}
          <div className="flex-1">
            <h2 className="heading-lg">
              Transforming{" "}
              <span className="inline-flex items-center">
                <span className="w-8 h-8 rounded-full border border-muted-foreground/30 inline-flex items-center justify-center mx-1">
                  <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                </span>
              </span>
              <br />
              ideas into visually
              <br />
              stunning realities
            </h2>
          </div>
        </div>

        {/* Stats Card + Services */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          {/* Dark Card */}
          <div className="bg-foreground text-background rounded-3xl p-8 flex-shrink-0 w-full lg:w-[340px] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
              <button className="text-xs border border-background/30 text-background/80 px-4 py-2 rounded-full">
                Our Services
              </button>
              <button className="text-xs border border-background/30 text-background/80 px-4 py-2 rounded-full">
                2024
              </button>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8">
              <ArrowUpRight size={20} className="text-primary-foreground" />
            </div>

            <h3 className="text-5xl font-bold text-background">720+</h3>
            <p className="text-xl font-bold text-background mt-1">projects</p>
            <p className="text-xl font-bold text-background">launched</p>

            <p className="text-sm text-background/60 mt-4">
              We work in detail for every project, trust me.
            </p>

            <div className="mt-8">
              <button className="bg-background text-foreground text-xs font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col">
                <div
                  className={`inline-flex items-center gap-1 text-sm font-semibold mb-3 ${
                    service.highlighted
                      ? "bg-primary text-primary-foreground px-4 py-2 rounded-full self-start"
                      : "text-foreground"
                  }`}
                >
                  {service.title}
                </div>
                <p className="body-text text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
