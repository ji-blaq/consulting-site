import { Fragment } from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

const headline = "Drive your business forward with expert consulting";

const Hero = () => {
  const words = headline.split(" ");

  return (
    <section className="page-x bg-white pt-14 pb-20 md:pt-24 md:pb-28">
      <div className="container-x">
        {/* Each word rises into place on load (see .rise-word in index.css) */}
        <h1
          className="display max-w-[920px] text-[44px] leading-[1.04] text-ink sm:text-[64px] lg:text-[96px] lg:leading-[0.98]"
          aria-label={headline}
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="rise-word" aria-hidden="true">
                <span style={{ "--i": i }}>{word}</span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p
              className="fade-up max-w-[42ch] text-[17px] leading-[1.7] text-stone"
              style={{ "--delay": "550ms" }}
            >
              Our expert-driven strategies empower businesses to accelerate
              growth, optimize operations, and overcome challenges, ensuring
              sustainable success in an ever-evolving market.
            </p>

            <div
              className="fade-up mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ "--delay": "700ms" }}
            >
              <Link to="/contact" className="btn-primary">
                Book a free consultation
              </Link>
              <Link to="/services" className="text-link text-[15px]">
                Discover our services
              </Link>
            </div>
          </div>

          <div className="wipe-in overflow-hidden lg:col-span-8">
            <img
              src={heroImg}
              alt="City skyline viewed from below, representing business growth and ambition"
              className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
