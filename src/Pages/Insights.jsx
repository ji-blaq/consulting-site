import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import insights from "../data/insights";

const [lead, ...posts] = insights;

const Meta = ({ topic, read }) => (
  <p className="text-[14px] font-semibold text-moss">
    {topic}
    <span className="font-normal text-stone"> · {read}</span>
  </p>
);

const Insights = () => {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Expert insights"
        intro="Trends, strategies, and practical perspectives on consulting and business growth from our team."
      />

      <section className="page-x bg-white pb-20 md:pb-28">
        <div className="container-x">
          {/* Lead story */}
          <article className="border-t border-line pt-10 md:pt-14">
            <Link
              to={`/insights/${lead.slug}`}
              className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="overflow-hidden lg:col-span-7">
                <img
                  src={lead.image}
                  alt=""
                  className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-[420px]"
                />
              </div>

              <div className="lg:col-span-5 lg:pt-2">
                <Meta topic={lead.topic} read={lead.read} />
                <h2 className="display mt-4 text-[34px] leading-[1.12] text-ink transition-colors group-hover:text-forest md:text-[44px]">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.7] text-stone">
                  {lead.excerpt}
                </p>
                <span className="text-link mt-6 inline-block text-[15px]">
                  Read the article
                </span>
              </div>
            </Link>
          </article>

          {/* The rest */}
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 border-t border-line pt-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link to={`/insights/${post.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6">
                    <Meta topic={post.topic} read={post.read} />
                  </div>
                  <h3 className="display mt-3 text-[26px] leading-[1.2] text-ink transition-colors group-hover:text-forest">
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
      </section>
    </>
  );
};

export default Insights;
