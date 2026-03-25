import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-20 pointer-events-none">
      <nav className="max-w-7xl mx-auto bg-white/40 backdrop-blur-xl border border-white/40 rounded-[32px] px-6 py-2 flex items-center justify-between shadow-lg pointer-events-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
            <div className="w-5 h-5 bg-gradient-to-br from-[#8b5cf6] to-[#d8b4fe] rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full translate-x-[0.5px] translate-y-[0.5px]" />
            </div>
          </div>
          <span className="text-xl font-bold text-[#111111] tracking-tight">Agency</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#444444] hover:text-[#111111] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>




        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#111111] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-[32px] p-10 flex flex-col gap-6 lg:hidden shadow-2xl border border-white/40 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-semibold text-[#111111]"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}

        </div>
      )}
    </div>
  );
};

export default Navbar;
