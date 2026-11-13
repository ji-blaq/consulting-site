import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";

const services = [
  {
    title: "Business strategy consulting",
    text: "Customized strategic plans that help your business achieve long-term goals and stay ahead of the competition.",
    includes: ["Market and competitor review", "Growth roadmap", "Quarterly strategy check-ins"],
  },
  {
    title: "Financial advisory",
    text: "Manage risk, optimize cash flow, and make confident financial decisions in a changing market.",
    includes: ["Cash flow planning", "Cost and margin analysis", "Investment readiness"],
  },
  {
    title: "Operational efficiency",
    text: "Streamlined processes and sharper performance metrics so your team does more with what it already has.",
    includes: ["Process mapping", "Performance dashboards", "Team workflow redesign"],
  },
  {
    title: "IT & digital transformation",
    text: "Modernize systems and adopt the right technology to support growth, without disrupting operations.",
    includes: ["Systems audit", "Technology selection", "Rollout and training plan"],
  },
  {
    title: "Risk management",
    text: "Anticipate, plan for, and reduce the operational, financial, and regulatory risks that slow you down.",
    includes: ["Risk assessment", "Compliance review", "Continuity planning"],
  },
];

const steps = [
  { n: "01", title: "Discover", text: "We study your business, your market, and where the real friction is." },
  { n: "02", title: "Strategize", text: "We build a plan grounded in data, not guesswork or templates." },
  { n: "03", title: "Implement", text: "We work alongside your team to put the plan into motion." },
  { n: "04", title: "Measure", text: "We track results and adjust course as your business evolves." },
];

// "Business strategy" -> "business strategy", but "IT & digital" stays "IT & digital"
const lowerFirst = (text) =>
  text[1] === text[1].toUpperCase() ? text : text[0].toLowerCase() + text.slice(1);

const ServiceCards = () => {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Consulting built around your goals"
        intro="From strategy to execution, we partner with you at every stage to drive growth, reduce risk, and improve performance."
      />

      {/* Services as numbered rows, same language as the home page list */}
      <section className="page-x bg-white pb-20 md:pb-28">
        <ul className="container-x border-t border-line">
          {services.map((service, i) => (
            <li key={service.title} className="border-b border-line">
              <div className="group relative grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:gap-12 md:py-12">
                {/* Green line that draws across the row on hover */}
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-[2px] w-0 bg-forest transition-[width] duration-500 ease-out group-hover:w-full group-focus-within:w-full"
                />

                <p className="display text-[20px] text-moss md:col-span-1 md:pt-2">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h2 className="display text-[30px] leading-[1.12] text-ink transition-colors group-hover:text-forest md:col-span-4 md:text-[38px]">
                  {service.title}
                </h2>

                <div className="md:col-span-6 md:col-start-7">
                  <p className="max-w-[52ch] text-[16px] leading-[1.7] text-stone">
                    {service.text}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line px-4 py-1.5 text-[14px] text-ink/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="text-link mt-6 inline-block text-[15px]">
                    Talk to us about {lowerFirst(service.title)}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* How we work */}
      <section className="page-x bg-mist py-20 md:py-28">
        <div className="container-x">
          <h2 className="display max-w-[16ch] text-[36px] leading-[1.08] text-ink md:text-[52px]">
            How we work with you
          </h2>

          <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-ink/20 pt-6">
                <p className="display text-[56px] leading-none text-forest">
                  {step.n}
                </p>
                <h3 className="display mt-6 text-[28px] leading-[1.15] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-stone">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default ServiceCards;
