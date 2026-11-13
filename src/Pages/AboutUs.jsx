import PageHeader from "../Components/PageHeader";
import teamImg from "../assets/Card1.png";

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "100+", label: "Successful projects" },
  { value: "80%", label: "Client retention rate" },
  { value: "50+", label: "Industries served" },
];

const team = [
  { name: "Jane Doe", title: "Chief Executive Officer" },
  { name: "John Smith", title: "Chief Operating Officer" },
  { name: "Sarah Johnson", title: "Chief Financial Officer" },
  { name: "Emma Thompson", title: "Senior Business Consultant" },
];

const reasons = [
  {
    title: "Decades of experience",
    text: "We bring years of consulting work to every challenge, so you can move forward with confidence.",
  },
  {
    title: "Built around you",
    text: "No templates. Every strategy starts from your goals, your numbers and your industry.",
  },
  {
    title: "Measurable results",
    text: "Our work has helped businesses grow, streamline and hit targets they can actually track.",
  },
  {
    title: "Partners, not observers",
    text: "We stay alongside your team through implementation, not just the recommendations.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const AboutUs = () => {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Driving business success through expertise and innovation"
        intro="We help companies navigate challenges, streamline operations and unlock growth. Whether you're scaling up, getting more efficient or rethinking your strategy, we build solutions that last."
      />

      {/* Wide photo, opens like the home hero */}
      <div className="page-x bg-white pb-20 md:pb-28">
        <div className="wipe-in container-x overflow-hidden">
          <img
            src={teamImg}
            alt="Two consultants reviewing a plan together on a laptop"
            className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[480px]"
          />
        </div>
      </div>

      {/* Story */}
      <section className="page-x bg-mist py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px] lg:col-span-5">
            Our business since 2005
          </h2>

          <div className="flex flex-col gap-6 text-[17px] leading-[1.75] text-stone lg:col-span-6 lg:col-start-7 lg:pt-3">
            <p>
              We started in 2005 with one aim: to give businesses practical,
              innovative answers to the problems that actually hold them back.
            </p>
            <p>
              Since then we've partnered with clients across many industries,
              combining deep sector knowledge with a real stake in their
              success, to build strategies that help organizations thrive in
              a market that never stands still.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="page-x bg-forest py-16 text-white md:py-20">
        <dl className="container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse pr-6 ${i > 0 ? "lg:border-l lg:border-white/20 lg:pl-10" : ""} ${i % 2 === 1 ? "border-l border-white/20 pl-6 lg:pl-10" : ""}`}
            >
              {/* label first for screen readers, shown under the number */}
              <dt className="mt-3 text-[15px] text-[#cfdcc4]">{stat.label}</dt>
              <dd className="display text-[56px] leading-none md:text-[72px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Mission and vision */}
      <section className="page-x bg-white py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <div className="border-t border-line pt-6">
            <h2 className="text-[15px] font-semibold text-moss">Our mission</h2>
            <p className="display mt-5 text-[28px] leading-[1.3] text-ink md:text-[34px]">
              To empower businesses with tailored, innovative solutions that
              drive growth, efficiency and long-term success.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <h2 className="text-[15px] font-semibold text-moss">Our vision</h2>
            <p className="display mt-5 text-[28px] leading-[1.3] text-ink md:text-[34px]">
              To be known for transforming organizations through
              forward-thinking strategy and a relentless focus on results.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="page-x bg-white pb-20 md:pb-28">
        <div className="container-x border-t border-line pt-20 md:pt-28">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px] lg:col-span-6">
              Meet our leadership team
            </h2>
            <p className="max-w-[46ch] text-[16px] leading-[1.7] text-stone lg:col-span-5 lg:col-start-8">
              Seasoned experts who lead every engagement and stay close to the
              work from first conversation to final results.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.name}>
                {/* Monogram in place of a photo */}
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/5] w-full items-center justify-center bg-mist"
                >
                  <span className="display text-[64px] text-forest md:text-[88px]">
                    {initials(member.name)}
                  </span>
                </div>
                <p className="mt-5 text-[16px] font-semibold text-ink">
                  {member.name}
                </p>
                <p className="mt-1 text-[15px] text-stone">{member.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="page-x bg-mist py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px]">
              Why choose us
            </h2>
            <p className="mt-6 max-w-[38ch] text-[16px] leading-[1.7] text-stone">
              A consulting partner that delivers client-focused strategies to
              drive growth and transformation.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {reasons.map((reason, i) => (
              <li key={reason.title} className="border-t border-ink/20 pt-6">
                <span className="display text-[20px] text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-[26px] leading-[1.15] text-ink">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-stone">
                  {reason.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
