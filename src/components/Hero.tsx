import { ArrowUpRight } from "lucide-react";
import hero3d from "@/assets/hero-3d.png";

const Hero = () => {
  return (
    <section className="relative px-6 md:px-10 lg:px-16 pt-8 pb-20 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="heading-xl uppercase">
            Bring all your
            <br />
            ideas to life with our
            <br />
            creative magic
          </h1>
          <p className="body-text mt-6 max-w-md">
            Our creative team gets to work, crafting a custom design that's not only beautiful but functional. We develop your landing page using the latest technologies and best practices.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <button className="btn-primary-dark">Get started</button>
            <button className="btn-icon">
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Right - 3D Image + Card */}
        <div className="relative flex-1 flex justify-center lg:justify-end">
          <img
            src={hero3d}
            alt="3D abstract sculpture"
            className="w-72 md:w-96 lg:w-[420px] object-contain relative z-10"
          />

          {/* Qualified Team Card */}
          <div className="absolute top-8 right-0 lg:right-4 bg-card rounded-2xl p-5 shadow-lg max-w-[220px] z-20 border border-border">
            <h4 className="text-sm font-bold text-foreground">Qualified team</h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              We delve deep into your business target audience, and competitive landscape. Armed with this
            </p>
          </div>

          {/* Decorative circle */}
          <div className="absolute bottom-4 right-8 w-12 h-12 rounded-full border border-border flex items-center justify-center bg-card/50">
            <div className="w-6 h-6 rounded-full border border-muted-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
