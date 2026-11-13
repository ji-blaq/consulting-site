import PageHeader from "../Components/PageHeader";
import caseStudies from "../data/caseStudies";

const CaseStudies = () => {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Real results for real businesses"
        intro="A look at how we've helped clients across industries solve real problems and grow with confidence."
      />

      <section className="page-x bg-white pb-20 md:pb-28">
        <ul className="container-x border-t border-line">
          {caseStudies.map((study) => (
            <li
              key={study.client}
              className="grid grid-cols-1 gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-12 md:py-16"
            >
              {/* The result, set large */}
              <p className="display text-[72px] leading-[0.9] text-forest md:col-span-3 md:text-[104px]">
                {study.figure}
              </p>

              <div className="md:col-span-4">
                <h2 className="display text-[28px] leading-[1.18] text-ink md:text-[32px]">
                  {study.result}
                </h2>
                <p className="mt-4 text-[14px] font-semibold text-moss">
                  {study.client}
                  <span className="font-normal text-stone"> · {study.industry}</span>
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-5 text-[15px] leading-[1.7] md:col-span-4 md:col-start-9">
                <div>
                  <dt className="font-semibold text-ink">The challenge</dt>
                  <dd className="mt-1 text-stone">{study.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">What we did</dt>
                  <dd className="mt-1 text-stone">{study.approach}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CaseStudies;
