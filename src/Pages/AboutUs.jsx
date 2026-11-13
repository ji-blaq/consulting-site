import { Link } from "react-router-dom";
import heroImg from "../assets/Card1.png";
import missionImg from "../assets/Card1.png";
import visionImg from "../assets/hero.png";
import whyImg from "../assets/hero.png";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "100+", label: "Successful Projects" },
  { value: "80%", label: "Client Retention Rate" },
  { value: "50+", label: "Industries Served" },
];

const team = [
  { name: "Jane Doe", title: "Chief Executive Officer" },
  { name: "John Smith", title: "Chief Operating Officer" },
  { name: "Sarah Johnson", title: "Chief Financial Officer" },
  { name: "Emma Thompson", title: "Senior Business Consultant" },
];

const reasons = [
  "Leverage decades of consulting expertise to navigate business challenges with confidence.",
  "We prioritize your unique needs, offering personalized strategies that drive results.",
  "Our successful collaborations have helped businesses grow, streamline, and achieve measurable success.",
  "We design strategies that are specifically aligned with your business goals and industry demands.",
  "We design strategies that are specifically aligned with your business goals and industry demands.",
];

const AboutUs = () => {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-white px-[60px] pt-[64px] pb-[48px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start">
          <h1 className="text-[36px] leading-[44px] font-semibold text-slate-900">
            Driving Business Success through{" "}
            <span className="text-teal-600">Expertise</span> &{" "}
            <span className="text-teal-600">Innovation</span>
          </h1>
          <p className="text-[15px] leading-[26px] text-slate-600">
            With decades of expertise in business consulting, we specialize in
            helping companies navigate challenges, streamline operations, and
            unlock growth opportunities. Whether you're scaling up, optimizing
            efficiency, or reinventing your strategy, our tailored solutions
            ensure sustainable success. Let's shape the future of your
            business together.
          </p>
        </div>
      </section>

      <div className="w-full px-[60px] pb-[64px]">
        <img
          src={heroImg}
          alt="Two consultants discussing strategy"
          className="w-full h-[360px] object-cover rounded-xl max-w-[1200px] mx-auto"
        />
      </div>

      {/* Intro */}
      <section className="w-full bg-white px-[60px] pb-[64px] text-center">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-semibold text-slate-900">
            Our Business Since 2005
          </h2>
          <p className="mt-[16px] text-[15px] leading-[26px] text-slate-600">
            Founded with a vision to transform the consulting landscape, we
            began our journey in 2005 with a commitment to provide innovative
            solutions that address the unique challenges faced by businesses.
            Over the years, we have partnered with diverse clients, fostering
            growth and driving success through our strategic consulting
            services. Our unique approach combines deep industry knowledge
            with a passion for client success, enabling us to craft tailored
            strategies that help organizations thrive in an ever-evolving
            marketplace.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full bg-teal-600">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 px-[60px] py-[48px] text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[36px] font-semibold">{s.value}</p>
              <p className="mt-[8px] text-[14px] text-teal-50/90">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="w-full bg-white px-[60px] py-[64px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
          <div>
            <h2 className="text-[24px] font-semibold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-[16px] text-[15px] leading-[26px] text-slate-600">
              To empower businesses with customized, innovative solutions that
              drive growth, efficiency, and long-term success, fostering
              partnerships built on trust and excellence.
            </p>
          </div>
          <img
            src={missionImg}
            alt="Consultants reviewing strategy together"
            className="w-full h-[280px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Vision */}
      <section className="w-full bg-white px-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
          <img
            src={visionImg}
            alt="City skyline viewed from below"
            className="w-full h-[280px] object-cover rounded-xl order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <h2 className="text-[24px] font-semibold text-slate-900">
              Our Vision
            </h2>
            <p className="mt-[16px] text-[15px] leading-[26px] text-slate-600">
              To be the global leader in business consulting, known for
              transforming organizations through forward-thinking strategies
              and a relentless focus on delivering exceptional client
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="w-full bg-white px-[60px] pb-[80px] text-center">
        <h2 className="text-[28px] font-semibold text-slate-900">
          Meet Our Leadership Team
        </h2>
        <p className="mt-[12px] max-w-[560px] mx-auto text-[15px] text-slate-600">
          Led by seasoned experts, our leadership delivers innovative,
          tailored solutions that empower businesses to thrive and grow
          sustainably.
        </p>

        <div className="mt-[40px] max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-[24px] text-left">
          {team.map((member) => (
            <div key={member.name}>
              <div className="h-[180px] w-full rounded-md bg-slate-200" />
              <p className="mt-[16px] text-[15px] font-semibold text-slate-900">
                {member.name}
              </p>
              <p className="text-[14px] italic text-slate-500">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/team"
          className="mt-[32px] inline-block border border-slate-300 rounded-md px-[24px] py-[12px] text-[15px] font-semibold text-slate-800 hover:border-slate-400"
        >
          Meet Our Team
        </Link>
      </section>

      {/* Why choose us */}
      <section className="w-full bg-white px-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start">
          <div>
            <h2 className="text-[24px] font-semibold text-slate-900">
              Why Choose Us
            </h2>
            <p className="mt-[12px] text-[15px] leading-[26px] text-slate-600">
              Partner with a consulting firm that delivers innovative,
              client-focused strategies to drive growth and transformation.
            </p>
            <img
              src={whyImg}
              alt="Glass office building from below"
              className="mt-[24px] w-full h-[220px] object-cover rounded-xl"
            />
          </div>

          <ul className="flex flex-col gap-[20px]">
            {reasons.map((reason, i) => (
              <li key={i} className="flex gap-[12px] text-[15px] text-slate-600">
                <span className="mt-[2px] text-teal-600 font-semibold">+</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutUs;