import { Link } from "react-router-dom";

const Icon = ({ path }) => (
  <svg className="h-[32px] w-[32px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={path} />
  </svg>
);

const industries = [
  {
    title: "Technology",
    text: "Driving innovation and digital transformation to help tech companies scale and thrive in a competitive landscape.",
    focus: ["Product strategy", "Scaling operations", "Go-to-market planning"],
    icon: "M9 4h6l1 3h3v10H5V7h3l1-3Z",
  },
  {
    title: "Finance",
    text: "Enhancing profitability and managing financial risks with expert advisory tailored for the financial sector.",
    focus: ["Risk management", "Regulatory compliance", "Capital planning"],
    icon: "M4 20V10m5 10V6m5 14v-8m5 8V4",
  },
  {
    title: "Retail",
    text: "Empowering retail businesses to enhance customer experiences and streamline supply chain operations.",
    focus: ["Supply chain", "Customer experience", "Multi-channel growth"],
    icon: "M6 8h12l-1 11H7L6 8Zm2-3a4 4 0 0 1 8 0",
  },
  {
    title: "Healthcare",
    text: "Improving healthcare efficiency and patient outcomes through process optimization and regulatory expertise.",
    focus: ["Patient outcomes", "Regulatory guidance", "Operational efficiency"],
    icon: "M12 4v16M4 12h16",
  },
  {
    title: "Manufacturing",
    text: "Helping manufacturers modernize operations, reduce waste, and improve throughput without compromising quality.",
    focus: ["Process optimization", "Quality control", "Cost reduction"],
    icon: "M4 20V10l5 3V10l5 3V6l6 4v10H4Z",
  },
  {
    title: "Government & Public Sector",
    text: "Supporting public institutions with strategic planning, operational reviews, and digital modernization.",
    focus: ["Strategic planning", "Digital modernization", "Service delivery"],
    icon: "M4 10h16M6 10v9m4-9v9m4-9v9m4-9v9M3 10l9-5 9 5H3Z",
  },
];

const Industries = () => {
  return (
    <>
      <section className="w-full bg-white px-[60px] pt-[64px] pb-[48px] text-center">
        <p className="text-[14px] font-medium text-teal-700">Industries</p>
        <h1 className="mt-[12px] text-[32px] font-semibold text-slate-900">
          Industries We Serve
        </h1>
        <p className="mt-[12px] max-w-[640px] mx-auto text-[15px] text-slate-600">
          We bring deep, sector-specific expertise to every engagement, so
          our strategies fit the real constraints and opportunities of your
          industry.
        </p>
      </section>

      {industries.map((ind, i) => (
        <section
          key={ind.title}
          className={`w-full px-[60px] py-[40px] ${i % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-[32px] items-start">
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Icon path={ind.icon} />
            </div>

            <div className="flex-1">
              <h2 className="text-[20px] font-semibold text-slate-900">{ind.title}</h2>
              <p className="mt-[8px] text-[15px] leading-[26px] text-slate-600 max-w-[640px]">
                {ind.text}
              </p>
              <div className="mt-[16px] flex flex-wrap gap-[8px]">
                {ind.focus.map((f) => (
                  <span
                    key={f}
                    className="text-[13px] font-medium text-teal-700 bg-teal-50 rounded-full px-[14px] py-[6px]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="shrink-0 whitespace-nowrap border border-slate-300 rounded-md px-[20px] py-[10px] text-[14px] font-semibold text-slate-800 hover:border-slate-400"
            >
              Talk to Us
            </Link>
          </div>
        </section>
      ))}

      <section className="w-full bg-white px-[60px] py-[64px] text-center">
        <h2 className="text-[20px] font-semibold text-slate-900">
          Don't see your industry?
        </h2>
        <p className="mt-[8px] text-[15px] text-slate-600">
          We've worked across more sectors than we can list here — reach out and let's talk.
        </p>
        <Link
          to="/contact"
          className="mt-[16px] inline-block bg-teal-600 rounded-md px-[24px] py-[12px] text-[15px] font-semibold text-white hover:bg-teal-700"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
};

export default Industries;