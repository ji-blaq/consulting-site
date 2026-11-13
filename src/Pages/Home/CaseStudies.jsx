import { Link } from "react-router-dom";
import caseStudies from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <section className="page-x bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px]">
              Real results for real businesses
            </h2>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.7] text-stone">
              A look at how we've helped clients across industries solve real
              problems and grow with confidence.
            </p>
          </div>
          <Link to="/case-studies" className="text-link shrink-0 text-[15px]">
            See all case studies
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-16 md:mt-16 md:grid-cols-2">
          {caseStudies.map((study) => (
            <li
              key={study.client}
              className="grid grid-cols-[2.4em_1fr] items-baseline gap-x-6 border-t border-line py-8 text-[44px] md:text-[60px]"
            >
              <p className="display leading-none text-forest">{study.figure}</p>
              <div>
                <p className="text-[17px] leading-[1.5] text-ink">
                  {study.result}
                </p>
                <p className="mt-2 text-[14px] text-stone">
                  {study.client}, {study.industry}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CaseStudies;
