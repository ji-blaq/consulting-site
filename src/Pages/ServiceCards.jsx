import { Link } from "react-router-dom";

const Icon = ({ path }) => (
  <svg className="h-[26px] w-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={path} />
  </svg>
);

const steps = [
  { n: "01", title: "Discover", text: "We study your business, your market, and where the real friction is." },
  { n: "02", title: "Strategize", text: "We build a plan grounded in data, not guesswork or templates." },
  { n: "03", title: "Implement", text: "We work alongside your team to put the plan into motion." },
  { n: "04", title: "Measure", text: "We track results and adjust course as your business evolves." },
];

const services = [
  {
    title: "Business Strategy Consulting",
    text: "Customized strategic plans that help your business achieve long-term goals and stay ahead of the competition.",
    icon: "M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM14 3v6h6M9 14h6M9 10h2",
  },
  {
    title: "Financial Advisory",
    text: "Manage risk, optimize cash flow, and make confident financial decisions in a changing market.",
    icon: "M4 20V10m5 10V6m5 14v-8m5 8V4",
  },
  {
    title: "Operational Efficiency",
    text: "Streamlined processes and sharper performance metrics so your team does more with what it already has.",
    icon: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8",
  },
  {
    title: "IT & Digital Transformation",
    text: "Modernize systems and adopt the right technology to support growth, without disrupting operations.",
    icon: "M9 4h6l1 3h3v10H5V7h3l1-3Z",
  },
  {
    title: "Risk Management",
    text: "Anticipate, plan for, and reduce the operational, financial, and regulatory risks that slow you down.",
    icon: "M12 3 4 7v5c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V7l-8-4Z",
  },
];

const ServiceCards = () => {
  return (
    <>
      <section className="w-full bg-white px-[60px] pt-[64px] pb-[48px] text-center">
        <p className="text-[14px] font-medium text-teal-700">Our Services</p>
        <h1 className="mt-[12px] text-[32px] font-semibold text-slate-900">
          Consulting Services Built Around Your Goals
        </h1>
        <p className="mt-[12px] max-w-[640px] mx-auto text-[15px] text-slate-600">
          From strategy to execution, our team partners with you at every
          stage to drive growth, reduce risk, and improve performance.
        </p>
      </section>

      {/* How we work */}
      <section className="w-full bg-slate-50 px-[60px] py-[64px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {steps.map((step) => (
            <div key={step.n}>
              <p className="text-[32px] font-semibold text-teal-600/30">{step.n}</p>
              <h3 className="mt-[8px] text-[16px] font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-[6px] text-[14px] leading-[22px] text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="w-full bg-white px-[60px] py-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-slate-200 p-[32px] transition hover:-translate-y-[4px] hover:shadow-lg hover:border-teal-600"
            >
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition">
                <Icon path={service.icon} />
              </div>
              <h2 className="mt-[20px] text-[18px] font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-[8px] text-[14px] leading-[24px] text-slate-600">{service.text}</p>
              <Link
                to="/contact"
                className="mt-[20px] inline-flex items-center gap-[6px] text-[14px] font-medium text-teal-700"
              >
                Talk to Us
                <span className="transition group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-teal-600 px-[60px] py-[64px] text-center">
        <h2 className="text-[24px] font-semibold text-white">
          Not sure which service fits your business?
        </h2>
        <p className="mt-[8px] text-[15px] text-teal-50/90">
          Tell us what you're working on and we'll point you in the right direction.
        </p>
        <Link
          to="/contact"
          className="mt-[20px] inline-block bg-white rounded-md px-[24px] py-[12px] text-[15px] font-semibold text-teal-700 hover:bg-slate-100"
        >
          Get Your Free Consultation
        </Link>
      </section>
    </>
  );
};

export default ServiceCards;