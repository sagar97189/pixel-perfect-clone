import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Working with vantage was not just a service, it was a collaborative and enjoyable journey. Team's dedication to understanding our goals and delivering beyond.",
    author: "Betaly Agency",
    role: "Branding Design, UI/UX Design",
  },
  {
    text: 'He creativity and professionalism of this team are unmatched. From start to finish, they provided outstanding support and delivered results that made a real impact."',
    author: "Sarah Thampaer",
    role: "Branding Design, UI/UX Design",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">See from our client</p>
          <h2 className="heading-lg">
            What Our
            <br />
            <span className="inline-flex items-center gap-2">
              <span className="w-10 h-10 rounded-full border border-muted-foreground/30 inline-flex items-center justify-center">
                <span className="w-4 h-4 rounded-full border border-muted-foreground/30" />
              </span>
              Client Says
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="text-sm text-foreground leading-relaxed mb-8">
                {testimonial.text}
              </p>
              <div>
                <p className="text-sm font-bold text-primary">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
