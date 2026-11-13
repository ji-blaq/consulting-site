import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Case studies", to: "/case-studies" },
  { label: "Insights", to: "/insights" },
  { label: "About us", to: "/about" },
  { label: "Contact us", to: "/contact" },
];

// Active page gets a leaf-green underline
const navLinkClass = ({ isActive }) =>
  `text-[15px] underline-offset-[10px] decoration-2 transition-colors ${
    isActive
      ? "text-forest font-semibold underline decoration-leaf"
      : "text-ink/80 hover:text-forest"
  }`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <header className="page-x sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x relative flex h-[80px] items-center justify-between">
        <Link
          to="/"
          onClick={close}
          className="-ml-3 flex items-center gap-1"
          aria-label="Apex Advisory, home"
        >
          <img src={Logo} alt="" className="h-16 w-16" />
          <span className="display text-[22px] leading-none text-ink">
            Apex Advisory
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={navLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary hidden py-3 lg:inline-flex">
          Free consultation
        </Link>

        <button
          type="button"
          className="flex h-[44px] w-[44px] items-center justify-center text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="page-x absolute left-0 top-full w-full border-b border-line bg-white pb-6 pt-2 lg:hidden"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={close}
              className={({ isActive }) =>
                `block border-b border-line py-4 text-[22px] display ${
                  isActive ? "text-forest" : "text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={close} className="btn-primary mt-6 w-full">
            Free consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
