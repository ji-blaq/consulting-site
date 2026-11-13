import { Link } from "react-router-dom";

// Each link now points at a real page instead of the home page
const columns = [
  {
    title: "Our services",
    links: [
      { label: "Business strategy consulting", to: "/services" },
      { label: "Financial advisory", to: "/services" },
      { label: "Operational efficiency", to: "/services" },
      { label: "IT & digital transformation", to: "/services" },
      { label: "Risk management", to: "/services" },
      { label: "Explore all services", to: "/services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Technology", to: "/industries" },
      { label: "Finance", to: "/industries" },
      { label: "Healthcare", to: "/industries" },
      { label: "Retail", to: "/industries" },
      { label: "Manufacturing", to: "/industries" },
      { label: "Government & public sector", to: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", to: "/about" },
      { label: "Our team", to: "/about" },
      { label: "Case studies", to: "/case-studies" },
      { label: "Insights", to: "/insights" },
      { label: "Careers", to: "/contact" },
    ],
  },
];

// Small inline icons so we don't need an extra icon library
const PhoneIcon = () => (
  <svg className="h-[16px] w-[16px] shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 3h3l1.5 4L6.5 8.5a11 11 0 0 0 5 5L13 11.5l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 2.5 4.6 1.5 1.5 0 0 1 4 3Z" />
  </svg>
);
const MailIcon = () => (
  <svg className="h-[16px] w-[16px] shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
    <path d="m3 5.5 7 5 7-5" />
  </svg>
);
const PinIcon = () => (
  <svg className="h-[16px] w-[16px] shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 18s6-5.2 6-9.6A6 6 0 0 0 4 8.4C4 12.8 10 18 10 18Z" />
    <circle cx="10" cy="8.3" r="2" />
  </svg>
);
const ClockIcon = () => (
  <svg className="h-[16px] w-[16px] shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="7" />
    <path d="M10 6v4l2.5 2" />
  </svg>
);

const socials = [
  {
    name: "Facebook",
    path: "M14 8.5h-2V7c0-.5.3-.8.8-.8H14V3.5h-2.3C9.8 3.5 8.7 4.8 8.7 7v1.5H7V11h1.7v6h2.6v-6H13.4z",
  },
  {
    name: "Instagram",
    path: "M10 3c-1.9 0-2.1 0-2.9.05-.8.03-1.3.16-1.8.34a3.6 3.6 0 0 0-1.3.85 3.6 3.6 0 0 0-.85 1.3c-.18.5-.3 1-.34 1.8C3 8.1 3 8.3 3 10.2s0 2.1.05 2.9c.03.8.16 1.3.34 1.8.18.47.43.86.85 1.3.42.42.82.67 1.3.85.5.18 1 .3 1.8.34.8.05 1 .05 2.9.05s2.1 0 2.9-.05c.8-.03 1.3-.16 1.8-.34a3.6 3.6 0 0 0 1.3-.85c.42-.42.67-.82.85-1.3.18-.5.3-1 .34-1.8.05-.8.05-1 .05-2.9s0-2.1-.05-2.9c-.03-.8-.16-1.3-.34-1.8a3.6 3.6 0 0 0-.85-1.3 3.6 3.6 0 0 0-1.3-.85c-.5-.18-1-.3-1.8-.34C12.1 3 11.9 3 10 3Zm0 1.6c1.87 0 2.1 0 2.83.05.68.03 1.05.14 1.3.24.32.12.56.27.8.51.24.24.4.48.51.8.1.24.21.6.24 1.28.05.72.05.95.05 2.82s0 2.1-.05 2.83c-.03.68-.14 1.04-.24 1.3-.12.3-.27.55-.51.8-.24.24-.48.4-.8.51-.24.1-.6.21-1.28.24-.73.05-.95.05-2.85.05s-2.1 0-2.83-.05c-.68-.03-1.04-.14-1.3-.24a2.2 2.2 0 0 1-.8-.51 2.2 2.2 0 0 1-.51-.8c-.1-.24-.21-.6-.24-1.28-.05-.72-.05-.95-.05-2.83s0-2.1.05-2.82c.03-.68.14-1.05.24-1.3.12-.3.27-.55.51-.8.24-.24.48-.39.8-.51.24-.1.6-.21 1.28-.24.72-.05.95-.05 2.85-.05ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.6A1.6 1.6 0 1 1 10 8.4a1.6 1.6 0 0 1 0 3.2Zm3.2-4.9a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z",
  },
  {
    name: "LinkedIn",
    path: "M5.6 7.1H3V16h2.6zM4.3 3.2A1.5 1.5 0 1 0 4.3 6.2 1.5 1.5 0 0 0 4.3 3.2ZM17 10.9c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.5 1.4V7.1H8.6V16h2.6v-4.9c0-.5 0-1 .3-1.4.3-.4.7-.7 1.4-.7.9 0 1.5.6 1.5 1.9V16H17z",
  },
  {
    name: "TikTok",
    path: "M13.3 3h-2.4v9.6a1.7 1.7 0 1 1-1.2-1.6V8.5a3.9 3.9 0 1 0 3.6 3.9V7.2c.8.6 1.8 1 2.9 1V5.7c-1.7-.1-2.9-1.2-2.9-2.7Z",
  },
];

const Footer = () => {
  return (
    <footer className="page-x border-t border-line bg-white py-16 md:py-20">
      <div className="container-x grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[15px] font-semibold text-ink">{col.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-stone transition-colors hover:text-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[15px] font-semibold text-ink">Contact us</h3>
          <ul className="mt-5 flex flex-col gap-3 text-[15px] text-stone">
            <li className="flex items-center gap-3">
              <PhoneIcon /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <MailIcon /> info@apexadvisory.com
            </li>
            <li className="flex items-start gap-3">
              <PinIcon />
              <span>123 Business Ave, Suite 500, New York, NY 10001, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon /> Mon–Fri: 9 AM – 6 PM
            </li>
          </ul>

          <h3 className="mt-8 text-[15px] font-semibold text-ink">Follow us</h3>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href="/"
                aria-label={s.name}
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-forest hover:text-forest"
              >
                <svg className="h-[16px] w-[16px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <form
        className="container-x mt-14 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row sm:items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="newsletter" className="text-[15px] font-semibold text-ink sm:mr-4">
          Get our insights by email
        </label>
        <input
          id="newsletter"
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-full border border-line bg-white px-5 py-3 text-[15px] text-ink placeholder:text-stone/70 focus:border-forest focus:outline-none sm:w-[320px]"
        />
        <button type="submit" className="btn-primary py-3">
          Subscribe
        </button>
      </form>

      <div className="container-x mt-10 flex flex-col items-start justify-between gap-3 text-[14px] text-stone sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Consulting Firm. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-forest">
            Privacy policy
          </Link>
          <Link to="/terms" className="hover:text-forest">
            Terms & conditions
          </Link>
          <Link to="/cookies" className="hover:text-forest">
            Cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
