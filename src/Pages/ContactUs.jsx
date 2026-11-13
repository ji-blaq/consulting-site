import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer business strategy, financial advisory, operational efficiency, risk management, and IT & digital transformation consulting.",
  },
  {
    q: "How do I schedule a consultation?",
    a: "Fill out the form on this page or call us directly, and a consultant will reach out within one business day.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work primarily across technology, finance, retail, and healthcare, with additional experience in manufacturing and the public sector.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary by scope, but most engagements run between 6 and 12 weeks from kickoff to final recommendations.",
  },
  {
    q: "Do you provide ongoing support after the project?",
    a: "Yes. We offer optional retainer support to help implement recommendations and adjust strategy over time.",
  },
  {
    q: "How are your consultants qualified?",
    a: "Our team holds advanced degrees and certifications across strategy, finance, and operations, with an average of over a decade of industry experience.",
  },
];

const FaqItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-slate-200 py-[16px]">
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between text-left text-[15px] font-medium text-slate-900"
    >
      {q}
      <span className="ml-[16px] text-teal-600">{isOpen ? "–" : "+"}</span>
    </button>
    {isOpen && (
      <p className="mt-[10px] text-[14px] leading-[24px] text-slate-600">
        {a}
      </p>
    )}
  </div>
);

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <>
      {/* Header */}
      <section className="w-full bg-white px-[60px] pt-[64px] pb-[48px] text-center">
        <h1 className="text-[32px] font-semibold text-slate-900">
          Contact & Support
        </h1>
        <p className="mt-[12px] max-w-[560px] mx-auto text-[15px] text-slate-600">
          We're here to assist you. Whether it's inquiries, consultations, or
          support, don't hesitate to reach out.
        </p>
      </section>

      {/* Form + support info */}
      <section className="w-full bg-white px-[60px] pb-[64px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          {/* Form */}
          <div className="rounded-xl border border-slate-200 p-[32px]">
            <h2 className="text-[18px] font-semibold text-slate-900">
              Get in Touch with Us
            </h2>

            <form onSubmit={handleSubmit} className="mt-[20px] flex flex-col gap-[16px]">
              <div>
                <label className="text-[13px] font-medium text-slate-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-[6px] w-full border border-slate-300 rounded-md px-[14px] py-[10px] text-[14px] focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[13px] font-medium text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-[6px] w-full border border-slate-300 rounded-md px-[14px] py-[10px] text-[14px] focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[13px] font-medium text-slate-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="mt-[6px] w-full border border-slate-300 rounded-md px-[14px] py-[10px] text-[14px] focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[13px] font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Leave us a message"
                  rows={4}
                  className="mt-[6px] w-full border border-slate-300 rounded-md px-[14px] py-[10px] text-[14px] focus:border-teal-600 focus:outline-none"
                />
              </div>

                            <button
                type="submit"
                className="mt-[4px] bg-teal-600 rounded-md px-[24px] py-[12px] text-[15px] font-semibold text-white hover:bg-teal-700"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-[14px] font-medium text-teal-700">
                  Thanks — your message has been sent. We'll be in touch soon.
                </p>
              )}
            </form>
          </div>

          {/* Support info */}
          <div className="flex flex-col gap-[28px]">
            <div>
              <h3 className="text-[15px] font-semibold text-slate-900">
                Chat to Support
              </h3>
              <p className="mt-[6px] text-[14px] text-slate-600">
                Chat to our staff 24/7 for instant access to support.
              </p>
              <a href="/" className="mt-[6px] inline-block text-[14px] font-medium text-teal-700 underline">
                Start Live Chat
              </a>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-900">
                Call Us
              </h3>
              <p className="mt-[6px] text-[14px] text-slate-600">
                Monday – Friday, 9:00 AM – 6:00 PM
              </p>
              <p className="mt-[4px] text-[14px] font-medium text-teal-700">
                +1 (0)10 987 6543
              </p>
              <p className="text-[14px] font-medium text-teal-700">
                +1 (0)10 987 6543
              </p>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-900">
                Email Support
              </h3>
              <p className="mt-[6px] text-[14px] text-slate-600">
                Email us & we will get back to you within 24 hours.
              </p>
              <p className="mt-[4px] text-[14px] font-medium text-teal-700">
                support@apexadvisory.com
              </p>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-900">
                Manchester, UK
              </h3>
              <p className="mt-[6px] text-[14px] text-slate-600">
                Visit our office Monday – Friday, 9:00 AM – 6:00 PM
              </p>
              <p className="mt-[4px] text-[14px] text-slate-600">
                123 Business Lane, Suite 100, Manchester, UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full px-[60px] pb-[64px]">
        <div className="max-w-[1200px] mx-auto h-[280px] rounded-xl overflow-hidden border border-slate-200">
          <iframe
            title="Office location map"
            src="https://www.google.com/maps?q=Manchester,UK&output=embed"
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white px-[60px] pb-[80px] text-center">
        <h2 className="text-[28px] font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-[12px] text-[15px] text-slate-600">
          Answers to common inquiries about our services.
        </p>

        <div className="mt-[40px] max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] text-left">
          <div>
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === faq.q}
                onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
              />
            ))}
          </div>
          <div>
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === faq.q}
                onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;