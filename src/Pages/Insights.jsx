import PageHeader from "../Components/PageHeader";
import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";

const lead = {
  title: "Navigating financial challenges in uncertain times",
  text: "Explore how to manage financial risk and optimize cash flow in a volatile economic climate, and which decisions to make first when the numbers get tight.",
  topic: "Finance",
  read: "8 min read",
  image: card1,
};

const posts = [
  {
    title: "Transforming your business with data-driven decisions",
    text: "Unlock the potential of data-driven decision-making to enhance your business performance.",
    topic: "Strategy",
    read: "6 min read",
    image: card2,
  },
  {
    title: "How to improve client retention and build lasting relationships",
    text: "The essential strategies for retaining clients and growing through strong relationships.",
    topic: "Growth",
    read: "5 min read",
    image: card3,
  },
  {
    title: "5 signs it's time to rethink your operating model",
    text: "Recognize the early warning signs that your current processes are holding growth back.",
    topic: "Operations",
    read: "4 min read",
    image: card1,
  },
  {
    title: "A practical guide to digital transformation",
    text: "What digital transformation actually looks like for mid-size businesses, step by step.",
    topic: "Technology",
    read: "7 min read",
    image: card2,
  },
  {
    title: "Building a risk management plan that actually works",
    text: "Move beyond checkbox compliance to a risk strategy that protects your business long-term.",
    topic: "Risk",
    read: "6 min read",
    image: card3,
  },
];

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
          <article className="grid grid-cols-1 gap-8 border-t border-line pt-10 md:pt-14 lg:grid-cols-12 lg:gap-12">
            <div className="overflow-hidden lg:col-span-7">
              <img
                src={lead.image}
                alt=""
                className="h-[260px] w-full object-cover md:h-[420px]"
              />
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <Meta topic={lead.topic} read={lead.read} />
              <h2 className="display mt-4 text-[34px] leading-[1.12] text-ink md:text-[44px]">
                {lead.title}
              </h2>
              <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.7] text-stone">
                {lead.text}
              </p>
            </div>
          </article>

          {/* The rest */}
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 border-t border-line pt-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title}>
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="h-[220px] w-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <Meta topic={post.topic} read={post.read} />
                </div>
                <h3 className="display mt-3 text-[26px] leading-[1.2] text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-stone">
                  {post.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
