import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "Tech Innovators Inc.",
    industry: "Technology",
    result: "25% increase in profitability within one year",
  },
  {
    client: "Meridian Retail Group",
    industry: "Retail",
    result: "Expanded into two new markets in under six months",
  },
  {
    client: "Northbridge Health",
    industry: "Healthcare",
    result: "Cut operational costs by 18% while improving patient outcomes",
  },
  {
    client: "Harborview Financial",
    industry: "Finance",
    result: "Reduced loan processing time by 40% through workflow redesign",
  },
  {
    client: "Atlas Manufacturing Co.",
    industry: "Manufacturing",
    result: "Improved production throughput by 22% with leaner operations",
  },
  {
    client: "Clearwater Public Services",
    industry: "Government",
    result: "Modernized citizen services, cutting response times in half",
  },
];

const CaseStudies = () => {
  return (
    <>
      <section className="w-full bg-white px-[60px] pt-[64px] pb-[48px] text-center">
        <p className="text-[14px] font-medium text-teal-700">Case Studies</p>
        <h1 className="mt-[12px] text-[32px] font-semibold text-slate-900">
          Real Results for Real Businesses
        </h1>
        <p className="mt-[12px] max-w-[640px] mx-auto text-[15px] text-slate-600">
          A look at how we've helped clients across industries solve real
          problems and grow with confidence.
        </p>
      </section>

      <section className="w-full bg-slate-50 px-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="bg-white rounded-xl p-[32px] border border-slate-100"
            >
              <p className="text-[13px] font-medium text-teal-700">
                {study.industry}
              </p>
              <h2 className="mt-[8px] text-[18px] font-semibold text-slate-900">
                {study.client}
              </h2>
              <p className="mt-[12px] text-[15px] leading-[26px] text-slate-600">
                {study.result}
              </p>
              <Link
                to="/contact"
                className="mt-[16px] inline-block text-[15px] font-medium text-teal-700 underline"
              >
                Read the Case Study
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;