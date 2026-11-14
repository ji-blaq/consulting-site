import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import insights from "../data/insights";
import NotFound from "./NotFound";

const Meta = ({ topic, read }) => (
  <p className="text-[14px] font-semibold text-moss">
    {topic}
    <span className="font-normal text-stone"> · {read}</span>
  </p>
);

// One article, at /insights/<article-name>
const Article = () => {
  const { slug } = useParams();
  const index = insights.findIndex((a) => a.slug === slug);

  if (index === -1) return <NotFound />;

  const article = insights[index];
  // the next two articles in the list, wrapping round to the start
  const more = [1, 2].map((step) => insights[(index + step) % insights.length]);
  const words = article.title.split(" ");

  return (
    <>
      {/* key makes the headline animation replay when you open the next article */}
      <article key={article.slug}>
        <header className="page-x bg-white pt-10 pb-12 md:pt-16 md:pb-16">
          <div className="container-x">
            <Link to="/insights" className="text-link text-[15px]">
              All insights
            </Link>

            <div className="fade-up mt-12 md:mt-16">
              <Meta topic={article.topic} read={article.read} />
            </div>

            {/* Same rising headline as the other page headers */}
            <h1
              className="display mt-5 max-w-[980px] text-[40px] leading-[1.06] text-ink sm:text-[56px] lg:text-[76px] lg:leading-[1.02]"
              aria-label={article.title}
            >
              {words.map((word, i) => (
                <Fragment key={i}>
                  <span className="rise-word" aria-hidden="true">
                    <span style={{ "--i": i }}>{word}</span>
                  </span>{" "}
                </Fragment>
              ))}
            </h1>
          </div>
        </header>

        <div className="page-x bg-white">
          <div className="container-x wipe-in overflow-hidden">
            <img
              src={article.image}
              alt=""
              className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[460px]"
            />
          </div>
        </div>

        <div className="page-x bg-white py-14 md:py-20">
          <div className="container-x grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:col-start-4">
              <p className="display text-[24px] leading-[1.45] text-ink md:text-[28px]">
                {article.intro}
              </p>

              {article.sections.map((section) => (
                <section key={section.heading} className="mt-12">
                  <h2 className="display text-[28px] leading-[1.2] text-ink md:text-[32px]">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-4 max-w-[65ch] text-[17px] leading-[1.75] text-stone"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <div className="mt-14 border-t border-line pt-8">
                <p className="text-[16px] leading-[1.7] text-ink">
                  Want to talk about how this applies to your business?
                </p>
                <Link to="/contact" className="text-link mt-3 inline-block text-[15px]">
                  Book a free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* More to read */}
      <section className="page-x bg-mist py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-[32px] leading-[1.1] text-ink md:text-[44px]">
              Keep reading
            </h2>
            <Link to="/insights" className="text-link shrink-0 text-[15px]">
              View all insights
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {more.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group block border-t border-ink/20 pt-6"
              >
                <Meta topic={post.topic} read={post.read} />
                <h3 className="display mt-3 text-[26px] leading-[1.2] text-ink transition-colors group-hover:text-forest md:text-[30px]">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.7] text-stone">
                  {post.excerpt}
                </p>
                <span className="text-link mt-5 inline-block text-[15px]">
                  Read the article
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
