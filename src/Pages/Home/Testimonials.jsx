import { useState } from "react";

const testimonials = [
  {
    quote:
      "Their strategic insights helped us streamline our operations and increase profitability by 25% within a year. We couldn't have achieved such success without their expert guidance.",
    name: "Sarah Mitchell",
    role: "CEO, Tech Innovators Inc.",
  },
  {
    quote:
      "The team's risk management framework gave us the confidence to expand into two new markets this year, without losing sight of what makes our business resilient.",
    name: "David Okafor",
    role: "COO, Meridian Retail Group",
  },
  {
    quote:
      "Working with this team felt like adding a dedicated strategy department overnight. Every recommendation was grounded in our actual numbers, not generic playbooks.",
    name: "Priya Raman",
    role: "Founder, Northbridge Health",
  },
];

const ArrowIcon = ({ flip }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-[18px] w-[18px] ${flip ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  // Only animate after the visitor clicks, not on first load
  const [touched, setTouched] = useState(false);
  const current = testimonials[index];

  const go = (next) => {
    setTouched(true);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <section className="page-x bg-mist py-20 md:py-28">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-row items-center justify-between gap-6 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start">
          <h2 className="text-[17px] font-semibold text-ink">
            What our clients say
          </h2>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-forest hover:text-forest"
            >
              <ArrowIcon flip />
            </button>
            <p className="min-w-[3.5ch] text-center text-[14px] tabular-nums text-stone">
              {index + 1} of {testimonials.length}
            </p>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-forest hover:text-forest"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>

        <figure
          key={index}
          className={`lg:col-span-9 ${touched ? "swap-in" : ""}`}
          aria-live="polite"
        >
          <blockquote className="display text-[26px] leading-[1.3] text-ink md:text-[38px] md:leading-[1.25]">
            “{current.quote}”
          </blockquote>
          <figcaption className="mt-8 text-[15px] leading-[1.5]">
            <span className="block font-semibold text-ink">{current.name}</span>
            <span className="block text-stone">{current.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
