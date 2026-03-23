import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Products", "Pricing", "Api for Developer", "Blog", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-bold">✦</span>
        </div>
        <span className="text-lg font-bold text-foreground">Agency</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <button className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
          Log in
        </button>
        <button className="btn-primary-dark">Apply Now</button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-card border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <button className="text-sm font-medium text-foreground">Log in</button>
            <button className="btn-primary-dark">Apply Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
