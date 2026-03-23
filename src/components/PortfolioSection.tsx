import { ArrowUpRight, ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Betaly Agency",
    category: "UI/UX Website Design",
  },
  {
    image: portfolio2,
    title: "Growthy",
    category: "UI/UX Mobile App Design",
  },
  {
    image: portfolio3,
    title: "Alpnace",
    category: "Branding Design",
  },
];

const PortfolioSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="section-label mb-3">See Our Portfolio Reels</p>
            <h2 className="heading-lg">
              Awesome
              <br />
              <span className="inline-flex items-center gap-2">
                <span className="w-10 h-10 rounded-full border border-muted-foreground/30 inline-flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full border border-muted-foreground/30" />
                </span>
                works
              </span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="body-text mb-4">
              We crafted detailed botanical illustrations to highlight the natural ingredients used in the products. Each design was carefully integrated into the packaging layout.
            </p>
            <div className="flex items-center gap-3">
              <button className="btn-outline text-xs px-5 py-2.5">Learn More</button>
              <button className="btn-icon w-9 h-9">
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{project.category}</p>
                </div>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
