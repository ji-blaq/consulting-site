import { Link } from "react-router-dom";

// Shown at the bottom of every page (see App.jsx).
const CtaBanner = () => {
  return (
    <section className="page-x bg-forest py-20 text-white [--focus-ring:#ffffff] md:py-24">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="display text-[40px] leading-[1.04] md:text-[64px]">
            Ready to transform your business?
          </h2>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.7] text-[#cfdcc4]">
            Partner with us for expert guidance and strategies that drive
            growth and success.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-forest transition-colors hover:bg-mist"
          >
            Get your free consultation
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
