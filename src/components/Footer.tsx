const footerLinks = {
  Home: ["About Us", "Our Works", "Community"],
  Features: ["Get Started", "Privacy Policy"],
  "Social Media": ["Instagram", "Linkedin"],
};

const Footer = () => {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo + Description */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">✦</span>
            </div>
            <span className="text-lg font-bold text-foreground">Agency</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We're here to help you with any inquiries or project ideas you may have. Whether you have a question about our services.
          </p>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap gap-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
