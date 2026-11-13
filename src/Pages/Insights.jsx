import { Link } from "react-router-dom";
import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";

const images = [card1, card2, card3];

const posts = [
  {
    title: "Navigating Financial Challenges in Uncertain Times",
    text: "Explore how to manage financial risk and optimize cash flow in a volatile economic climate.",
  },
  {
    title: "Transforming Your Business with Data-Driven Decisions",
    text: "Unlock the potential of data-driven decision-making to enhance your business performance.",
  },
  {
    title: "How to Improve Client Retention and Build Lasting Relationships",
    text: "Learn the essential strategies for retaining clients and growing your business through strong relationships.",
  },
  {
    title: "5 Signs It's Time to Rethink Your Operating Model",
    text: "Recognize the early warning signs that your current processes are holding growth back.",
  },
  {
    title: "A Practical Guide to Digital Transformation",
    text: "What digital transformation actually looks like for mid-size businesses, step by step.",
  },
  {
    title: "Building a Risk Management Plan That Actually Works",
    text: "Move beyond checkbox compliance to a risk strategy that protects your business long-term.",
  },
];

const Insights = () => {
  return (
    <>
      <section className="w-full bg-white px-[60px] pt-[64px] pb-[48px] text-center">
        <p className="text-[14px] font-medium text-teal-700">Insights</p>
        <h1 className="mt-[12px] text-[32px] font-semibold text-slate-900">
          Expert Insights
        </h1>
        <p className="mt-[12px] max-w-[640px] mx-auto text-[15px] text-slate-600">
          Stay informed with the latest trends, strategies, and expert
          perspectives in consulting and business growth.
        </p>
      </section>

      <section className="w-full bg-white px-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {posts.map((post, i) => (
            <article key={post.title}>
              <img
                src={images[i % images.length]}
                alt=""
                className="h-[192px] w-full object-cover rounded-xl"
              />
              <h2 className="mt-[16px] text-[16px] font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-[8px] text-[15px] leading-[26px] text-slate-600">
                {post.text}
              </p>
              <Link
                to="/contact"
                className="mt-[12px] inline-block text-[15px] font-medium text-teal-700 underline"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Insights;