import { Fragment } from "react";

// Opening block for every inner page.
// Same rising-headline moment as the home hero, so the whole site feels like one piece.
const PageHeader = ({ eyebrow, title, intro }) => {
  const words = title.split(" ");

  return (
    <section className="page-x bg-white pt-14 pb-16 md:pt-24 md:pb-24">
      <div className="container-x">
        <p className="fade-up flex items-center gap-3 text-[14px] font-semibold text-moss">
          <span aria-hidden="true" className="h-px w-8 bg-leaf" />
          {eyebrow}
        </p>

        <h1
          className="display mt-6 max-w-[960px] text-[44px] leading-[1.04] text-ink sm:text-[60px] lg:text-[84px] lg:leading-[1]"
          aria-label={title}
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="rise-word" aria-hidden="true">
                <span style={{ "--i": i }}>{word}</span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        {intro && (
          <div className="mt-10 grid grid-cols-1 lg:mt-14 lg:grid-cols-12">
            <p
              className="fade-up max-w-[52ch] text-[17px] leading-[1.7] text-stone lg:col-span-6 lg:col-start-7"
              style={{ "--delay": "500ms" }}
            >
              {intro}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
