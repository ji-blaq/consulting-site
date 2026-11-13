import { Link } from "react-router-dom";

const industries = [
  {
    title: "Technology",
    text: "Driving innovation and digital transformation to help tech companies scale and thrive in a competitive landscape.",
    linkLabel: "Learn more about technology consulting",
  },
  {
    title: "Finance",
    text: "Enhancing profitability and managing financial risks with expert advisory tailored for the financial sector.",
    linkLabel: "Discover our finance expertise",
  },
  {
    title: "Retail",
    text: "Empowering retail businesses to enhance customer experiences and streamline supply chain operations.",
    linkLabel: "See our retail consulting services",
  },
  {
    title: "Healthcare",
    text: "Improving healthcare efficiency and patient outcomes through process optimization and regulatory expertise.",
    linkLabel: "Explore healthcare solutions",
  },
];

const Industries = () => {
  return (
    <section className="page-x bg-white py-20 md:py-28">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px]">
            Industries we serve
          </h2>
          <p className="mt-6 max-w-[38ch] text-[16px] leading-[1.7] text-stone">
            Explore how we help businesses across various industries achieve
            growth, optimize operations, and navigate challenges with our
            expert consulting services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {industries.map(({ title, text, linkLabel }) => (
            <div key={title} className="border-t border-line pt-6">
              <h3 className="display text-[28px] leading-[1.15] text-ink">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-stone">
                {text}
              </p>
              <Link
                to="/industries"
                className="text-link mt-5 inline-block text-[15px]"
              >
                {linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
