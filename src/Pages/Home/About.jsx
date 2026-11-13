import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="page-x bg-mist py-20 md:py-28">
      <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px] lg:col-span-6">
          Trusted business consultants with proven results
        </h2>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
          <p className="text-[17px] leading-[1.75] text-stone">
            With over 20 years of expertise, we empower businesses to achieve
            sustainable growth, optimize operations, and drive profitability
            through strategic consulting tailored to their unique needs. Our
            dedicated team ensures measurable success at every step of your
            journey.
          </p>

          <Link to="/about" className="text-link mt-8 inline-block text-[15px]">
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
