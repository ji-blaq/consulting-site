import { Link } from "react-router-dom";
import insights from "../../data/insights";

// First three articles: one lead story, two beside it
const [lead, ...rest] = insights;
const more = rest.slice(0, 2);

const Insights = () => {
  return (
    <section className="page-x bg-white pb-20 md:pb-28">
      <div className="container-x border-t border-line pt-20 md:pt-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px]">
              Expert insights
            </h2>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.7] text-stone">
              Stay informed with the latest trends, strategies, and expert
              perspectives in consulting and business growth.
            </p>
          </div>
          <Link to="/insights" className="text-link shrink-0 text-[15px]">
            View all insights
          </Link>
        </div>

        {/* Magazine layout: one lead story, two smaller ones beside it */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <Link to={`/insights/${lead.slug}`} className="group block">
              <div className="overflow-hidden">
                <img
                  src={lead.image}
                  alt=""
                  className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-[380px]"
                />
              </div>
              <h3 className="display mt-6 text-[30px] leading-[1.15] text-ink transition-colors group-hover:text-forest md:text-[38px]">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-[56ch] text-[16px] leading-[1.7] text-stone">
                {lead.excerpt}
              </p>
              <span className="text-link mt-5 inline-block text-[15px]">
                Read the article
              </span>
            </Link>
          </article>

          <div className="flex flex-col lg:col-span-5">
            {more.map((post, i) => (
              <article
                key={post.slug}
                className={`border-line ${i === 0 ? "border-t pt-8 lg:border-t-0 lg:pt-0" : "mt-8 border-t pt-8"}`}
              >
                <Link to={`/insights/${post.slug}`} className="group block">
                  <h3 className="display text-[26px] leading-[1.2] text-ink transition-colors group-hover:text-forest">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-stone">
                    {post.excerpt}
                  </p>
                  <span className="text-link mt-5 inline-block text-[15px]">
                    Read the article
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
