import { Link } from "react-router-dom";

// Shown for any address that isn't a real page (instead of a blank screen).
const NotFound = () => {
  return (
    <section className="page-x bg-white py-24 md:py-36">
      <div className="container-x">
        <p className="flex items-center gap-3 text-[14px] font-semibold text-moss">
          <span aria-hidden="true" className="h-px w-8 bg-leaf" />
          Page not found
        </p>

        <h1 className="display mt-6 max-w-[760px] text-[44px] leading-[1.04] text-ink sm:text-[60px] lg:text-[84px] lg:leading-[1]">
          This page took a different direction.
        </h1>

        <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.7] text-stone">
          The page you're looking for doesn't exist or has moved. Let's get
          you back on track.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/contact" className="text-link text-[15px]">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
