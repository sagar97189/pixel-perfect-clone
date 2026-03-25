import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with Vantage was not just a service, it was a collaborative and enjoyable journey. Team's dedication to understanding our goals and delivering beyond.",
    author: "Betely Agency",
    role: "Branding Design, UI/UX Design",
  },
  {
    text: "The creativity and professionalism of this team are unmatched. From start to finish, they provided outstanding support and delivered results that made a real impact.",
    author: "Sarah Thampaer",
    role: "Branding Design, UI/UX Design",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-wide font-bold">
          See from our client
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2 ">
            What Our <br />
            <span className="text-primary relative">
              Clients Says
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary/30"></span>
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl border border-border bg-white/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote size={18} className="text-primary" />
              </div>

              {/* Text */}
              <p className="text-[15px] leading-relaxed text-foreground mt-4 mb-10">
                “{item.text}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border pt-4">

                <div>
                  <p className="font-medium text-sm text-primary">
                    {item.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.role}
                  </p>
                </div>

                {/* Creative Dot */}
                <div className="w-3 h-3 rounded-full bg-primary/60 group-hover:scale-125 transition"></div>

              </div>

              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;