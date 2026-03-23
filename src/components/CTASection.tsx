import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground leading-[1]">
          Create new
          <br />
          innovation{" "}
          <span className="inline-flex items-center mx-2">
            <span className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-muted-foreground/30 inline-flex items-center justify-center">
              <span className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-muted-foreground/30" />
            </span>
          </span>
          together
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
          <p className="body-text max-w-md">
            These elements help ensure visitors can easily find important information and stay connected with your agency.
          </p>
          <div className="flex items-center gap-3">
            <button className="btn-outline text-xs px-5 py-2.5">Contact Us</button>
            <button className="btn-icon w-9 h-9">
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
