import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";
import slugify from "../utils/slugify";

// Every article on the site lives here. The home page, the Insights page
// and each article page all read from this list, so they always match.
// To add an article, copy one block and change the text.
const articles = [
  {
    title: "Navigating financial challenges in uncertain times",
    topic: "Finance",
    image: card1,
    excerpt:
      "Explore how to manage financial risk and optimize cash flow in a volatile economic climate, and which decisions to make first when the numbers get tight.",
    intro:
      "When revenue becomes unpredictable, the businesses that come through in good shape are rarely the ones with the cleverest forecasts. They are the ones that see their cash position clearly and act early.",
    sections: [
      {
        heading: "Start with a 13-week cash view",
        body: [
          "An annual budget tells you where you hoped to be. A rolling 13-week cash forecast tells you where you actually are. List the money you expect in and out each week, update it every Friday, and you will spot a shortfall a month or two before it arrives instead of the week it lands.",
        ],
      },
      {
        heading: "Protect the cash you already have",
        body: [
          "Before cutting anything, close the gap between earning money and collecting it. Invoice the day work is delivered, follow up on overdue accounts every week, and offer a small early-payment discount where your margins allow it.",
          "On the other side of the ledger, talk to key suppliers early. Most would rather agree new payment terms than chase a late invoice.",
        ],
      },
      {
        heading: "Cut with a scalpel, not an axe",
        body: [
          "Across-the-board cuts feel fair, but they often remove the very things that bring money in. Sort your costs into three groups: what keeps customers served, what keeps the business running, and what can pause for six months. Make decisions in that order.",
        ],
      },
      {
        heading: "Decide your triggers in advance",
        body: [
          "Agree now what you will do if revenue drops by 10%, 20% or 30%. Writing those steps down while things are calm means you can act quickly if the numbers move, instead of debating options under pressure.",
        ],
      },
    ],
  },
  {
    title: "Transforming your business with data-driven decisions",
    topic: "Strategy",
    image: card2,
    excerpt:
      "Unlock the potential of data-driven decision-making to enhance your business performance.",
    intro:
      "Most businesses already have more data than they use. The hard part isn't collecting it. It's turning it into a handful of numbers people trust and act on.",
    sections: [
      {
        heading: "Begin with the decision, not the dashboard",
        body: [
          "List the decisions your team makes every week, such as pricing, hiring, stock levels or marketing spend, and ask what information would make each one easier. Build your reporting backwards from those questions and you avoid dashboards that look impressive but change nothing.",
        ],
      },
      {
        heading: "Agree on one version of the truth",
        body: [
          "If sales and finance report different revenue figures, every meeting becomes an argument about the numbers. Define your key metrics once, write down exactly how each one is calculated, and make a single source the official one.",
        ],
      },
      {
        heading: "Keep the list short",
        body: [
          "Five to seven metrics that leadership reviews every week are worth more than fifty that nobody reads. Give each one an owner and a target, so a change in the number leads to a conversation about action, not blame.",
        ],
      },
      {
        heading: "Make it a habit",
        body: [
          "Data-driven companies are built on routine more than technology. A short weekly review in the same format each time, with decisions written down, will do more for you than any new tool.",
        ],
      },
    ],
  },
  {
    title: "How to improve client retention and build lasting relationships",
    topic: "Growth",
    image: card3,
    excerpt:
      "The essential strategies for retaining clients and growing through strong relationships.",
    intro:
      "Winning a new client usually costs far more than keeping one you already have, yet most growth plans focus almost entirely on finding new business. Retention deserves a plan of its own.",
    sections: [
      {
        heading: "Find out why clients leave",
        body: [
          "Talk to clients who stopped working with you in the past year. The reason is rarely price alone. More often it's slow replies, a change of contact, or a feeling that nobody understood their goals. Those conversations show you exactly where to start.",
        ],
      },
      {
        heading: "Make the first 90 days count",
        body: [
          "Clients decide early whether they made the right choice. A clear onboarding plan, an agreed definition of success and an early quick win build confidence that lasts long after the kickoff meeting.",
        ],
      },
      {
        heading: "Stay in touch between projects",
        body: [
          "Relationships fade when the only contact is an invoice. Share a useful idea, check in after a delivery, or send a short quarterly summary of results. Small, regular touches keep you in mind when the next need comes up.",
        ],
      },
      {
        heading: "Measure loyalty, not just satisfaction",
        body: [
          "Track repeat business, referrals and how many clients grow the work they give you. These tell you far more about the health of your relationships than a one-off satisfaction score.",
        ],
      },
    ],
  },
  {
    title: "5 signs it's time to rethink your operating model",
    topic: "Operations",
    image: card1,
    excerpt:
      "Recognize the early warning signs that your current processes are holding growth back.",
    intro:
      "An operating model that worked at twenty people often starts to creak at sixty. The warning signs usually show up long before results suffer, if you know where to look.",
    sections: [
      {
        heading: "1. Decisions keep landing on the same few desks",
        body: [
          "If every approval waits for one or two senior people, the business can only move as fast as their calendars allow.",
        ],
      },
      {
        heading: "2. Teams are doing the same work twice",
        body: [
          "Duplicate reports, parallel spreadsheets and repeated data entry are signs that roles and handovers were never clearly defined.",
        ],
      },
      {
        heading: "3. Growth makes margins worse, not better",
        body: [
          "When each new client adds more cost than the last one did, your processes aren't scaling with the business.",
        ],
      },
      {
        heading: "4. Nobody is sure who owns what",
        body: [
          "If problems bounce between teams before anyone picks them up, accountability needs redrawing.",
        ],
      },
      {
        heading: "5. Your best people spend their days firefighting",
        body: [
          "Talented staff fixing avoidable problems all day is the clearest sign the model needs attention.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "You don't need a full restructure to make progress. Map how work actually flows today, agree a clear owner for each step, and fix the two or three handovers that cause the most delay.",
        ],
      },
    ],
  },
  {
    title: "A practical guide to digital transformation",
    topic: "Technology",
    image: card2,
    excerpt:
      "What digital transformation actually looks like for mid-size businesses, step by step.",
    intro:
      "For a mid-size business, digital transformation rarely means a dramatic overhaul. It means steadily replacing the manual, disconnected ways of working that slow people down.",
    sections: [
      {
        heading: "Step 1: Audit what you have",
        body: [
          "List every system and spreadsheet the business relies on, who uses it and what it costs. Many companies find they're paying for tools that overlap, or that nobody opens.",
        ],
      },
      {
        heading: "Step 2: Pick problems, not products",
        body: [
          "Start with the processes that cause the most frustration or delay, such as invoicing, scheduling or customer requests. Only then look for technology that fixes them.",
        ],
      },
      {
        heading: "Step 3: Start small and prove it",
        body: [
          "Try the change with one team for a few weeks. Measure the time saved or the errors avoided, then use those results to bring the rest of the business along.",
        ],
      },
      {
        heading: "Step 4: Invest in people as much as software",
        body: [
          "New tools fail when staff aren't shown how they make their work easier. Set aside time for training, name a champion in each team, and keep the old way available only for as long as you need to.",
        ],
      },
    ],
  },
  {
    title: "Building a risk management plan that actually works",
    topic: "Risk",
    image: card3,
    excerpt:
      "Move beyond checkbox compliance to a risk strategy that protects your business long-term.",
    intro:
      "Many risk plans are written once to satisfy an auditor, then forgotten in a shared drive. A useful plan is shorter, owned by real people and reviewed often.",
    sections: [
      {
        heading: "List the risks that would really hurt",
        body: [
          "Focus on the handful of events that could stop you trading or seriously damage your reputation: losing a major client, a key supplier failing, a data breach, or running short of cash.",
        ],
      },
      {
        heading: "Score them simply",
        body: [
          "Rate each risk from one to five for how likely it is and how badly it would hurt. Multiply the two numbers and you have a clear order of priority, without complicated models.",
        ],
      },
      {
        heading: "Give every risk an owner",
        body: [
          "A risk with no owner is a risk nobody is managing. Assign one person to watch each top risk, agree the early warning signs, and decide in advance what they'll do if those signs appear.",
        ],
      },
      {
        heading: "Review it every quarter",
        body: [
          "Businesses change, and so do their risks. A short review every quarter keeps the plan current and turns risk management into a habit rather than a document.",
        ],
      },
    ],
  },
];

// Reading time from the actual word count (about 200 words a minute)
const minutesToRead = (article) => {
  const text = [article.intro, ...article.sections.flatMap((s) => [s.heading, ...s.body])].join(" ");
  const words = text.split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
};

const insights = articles.map((article) => ({
  ...article,
  slug: slugify(article.title),
  read: `${minutesToRead(article)} min read`,
}));

export default insights;
