import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Here you can add some brief text to explain the title. This is just a demo so consider replacing this text with your own presentation content.",
    
    role: "Graphic designer",
    image: "https://i.pravatar.cc/100?img=5",
    color: "text-blue-500",
  },
  {
    text: "Here you can add some brief text to explain the title. This is just a demo so consider replacing this text with your own presentation content.",
   
    role: "backend developer",
    image: "https://i.pravatar.cc/100?img=12",
    color: "text-orange-500",
  },
  {
    text: "Here you can add some brief text to explain the title. This is just a demo so consider replacing this text with your own presentation content.",
   
    role: "UI/UX designer",
    image: "https://i.pravatar.cc/100?img=15",
    color: "text-purple-500",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          We Have Earned the Trust of Our <br />
          Most{" "}
          <span className="text-blue-600">
            Valuable Customers
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
          Here you can add some brief text to explain the title. This is just a demo so consider replacing this text with your own presentation content.
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* Quote Icon */}
              <Quote className={`${item.color} w-10 h-10 mb-6`} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {item.text}
              </p>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mt-8"
              />

              {/* Name */}
              <h4 className="mt-4 font-semibold text-lg text-gray-900">
                {item.name}
              </h4>

              {/* Role */}
              <p className={`${item.color} text-sm mt-1`}>
                {item.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;