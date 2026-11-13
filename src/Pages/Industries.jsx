import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";

const industries = [
  {
    title: "Technology",
    text: "Driving innovation and digital transformation to help tech companies scale and thrive in a competitive landscape.",
    focus: ["Product strategy", "Scaling operations", "Go-to-market planning"],
  },
  {
    title: "Finance",
    text: "Enhancing profitability and managing financial risks with expert advisory tailored for the financial sector.",
    focus: ["Risk management", "Regulatory compliance", "Capital planning"],
  },
  {
    title: "Retail",
    text: "Empowering retail businesses to enhance customer experiences and streamline supply chain operations.",
    focus: ["Supply chain", "Customer experience", "Multi-channel growth"],
  },
  {
    title: "Healthcare",
    text: "Improving healthcare efficiency and patient outcomes through process optimization and regulatory expertise.",
    focus: ["Patient outcomes", "Regulatory guidance", "Operational efficiency"],
  },
  {
    title: "Manufacturing",
    text: "Helping manufacturers modernize operations, reduce waste, and improve throughput without compromising quality.",
    focus: ["Process optimization", "Quality control", "Cost reduction"],
  },
  {
    title: "Government & public sector",
    text: "Supporting public institutions with strategic planning, operational reviews, and digital modernization.",
    focus: ["Strategic planning", "Digital modernization", "Service delivery"],
  },
];

const Industries = () => {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Industries we serve"
        intro="We bring sector-specific expertise to every engagement, so our strategies fit the real constraints and opportunities of your industry."
      />

      <section className="page-x bg-white pb-20 md:pb-28">
        <ul className="container-x border-t border-line">
          {industries.map((industry, i) => (
            <li
              key={industry.title}
              className="grid grid-cols-1 gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-12 md:py-12"
            >
              <div className="flex items-baseline gap-5 md:col-span-5">
                <span className="display text-[20px] text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display text-[30px] leading-[1.12] text-ink md:text-[38px]">
                  {industry.title}
                </h2>
              </div>

              <div className="md:col-span-5 md:col-start-6">
                <p className="text-[16px] leading-[1.7] text-stone">
                  {industry.text}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {industry.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-4 py-1.5 text-[14px] text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 md:text-right">
                <Link to="/contact" className="text-link text-[15px]">
                  Talk to us
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="container-x mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:items-end">
          <h2 className="display text-[30px] leading-[1.12] text-ink md:col-span-6 md:text-[38px]">
            Don't see your industry?
          </h2>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[16px] leading-[1.7] text-stone">
              We've worked across more sectors than we can list here. Tell us
              about your business and we'll tell you honestly if we can help.
            </p>
            <Link to="/contact" className="text-link mt-5 inline-block text-[15px]">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
