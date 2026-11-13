import { Link } from "react-router-dom";

const services = [
  {
    title: "Business strategy consulting",
    text: "Customized strategic plans that help your business achieve long-term goals and stay ahead of the competition.",
  },
  {
    title: "Risk management consulting",
    text: "Identify, plan for, and reduce the operational and financial risks that can slow your business down.",
  },
  {
    title: "Operational efficiency",
    text: "Streamlined processes and sharper performance metrics so your team does more with what it already has.",
  },
];

const ServiceCards = () => {
  return (
    <section className="page-x bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-[16ch] text-[36px] leading-[1.08] text-ink md:text-[52px]">
            Solutions built around your business
          </h2>
          <Link to="/services" className="text-link shrink-0 text-[15px]">
            View all services
          </Link>
        </div>

        {/* A list of rows instead of identical cards */}
        <ul className="mt-12 border-t border-line md:mt-16">
          {services.map((service) => (
            <li key={service.title} className="border-b border-line">
              <Link
                to="/services"
                className="group relative grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-12 md:py-10"
              >
                {/* Green line that draws across the row on hover */}
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-[2px] w-0 bg-forest transition-[width] duration-500 ease-out group-hover:w-full group-focus-visible:w-full"
                />
                <h3 className="display text-[28px] leading-[1.15] text-ink transition-colors group-hover:text-forest md:col-span-5 md:text-[34px]">
                  {service.title}
                </h3>
                <p className="max-w-[52ch] text-[16px] leading-[1.7] text-stone md:col-span-6 md:col-start-7">
                  {service.text}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceCards;
