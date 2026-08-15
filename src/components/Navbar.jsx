import { useState } from "react";
import Button from "./Button";

import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Explore Wisdom", href: "#explore" },
    { label: "For Elders", href: "#elders" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-wisdom-beige/60 bg-wisdom-cream/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo Placeholder */}
        <a href="/" className="flex items-center">
  <img
    src="/wombs-of-wisdom-logo.png"
    alt="Wombs of Wisdom"
    className="h-18 w-auto object-contain"
  />
</a>
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-wisdom-green transition-colors hover:text-wisdom-rust"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="/signin"
            className="font-body text-sm font-semibold text-wisdom-green transition-colors hover:text-wisdom-rust"
          >
            Sign In
          </a>
 <Link to="/Contribute">
          <Button>Get Started</Button>
          </Link>
        </div>
        

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-wisdom-green transition-colors hover:bg-wisdom-beige/50 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-wisdom-beige/60 bg-wisdom-cream px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-base font-medium text-wisdom-green"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 border-t border-wisdom-beige pt-5">
              <a
                href="/signin"
                className="font-body text-sm font-semibold text-wisdom-green"
              >
                Sign In
              </a>

              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
