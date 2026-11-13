import { useState } from "react";
import PageHeader from "../Components/PageHeader";

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

// Same details as the footer, so the site never contradicts itself
const details = [
  { label: "Email", value: "info@apexadvisory.com", href: "mailto:info@apexadvisory.com" },
  { label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { label: "Office", value: "123 Business Ave, Suite 500, New York, NY 10001, USA" },
  { label: "Hours", value: "Monday – Friday, 9 AM – 6 PM" },
];

const emptyForm = { name: "", email: "", phone: "", message: "" };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please tell us your name.";
  if (!form.email.trim()) errors.email = "Please add your email so we can reply.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "That email doesn't look quite right.";
  if (!form.message.trim()) errors.message = "Please add a short message.";
  return errors;
};

const inputClass = (hasError) =>
  `mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-[17px] text-ink placeholder:text-stone/60 focus:outline-none ${
    hasError ? "border-red-700" : "border-ink/25 focus:border-forest"
  }`;

const Field = ({ id, label, optional, error, children }) => (
  <div>
    <label htmlFor={id} className="text-[14px] font-semibold text-ink">
      {label}
      {optional && <span className="font-normal text-stone"> (optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-2 text-[14px] text-red-700">
        {error}
      </p>
    )}
  </div>
);

const FaqItem = ({ id, q, a, isOpen, onToggle }) => (
  <div className="border-b border-ink/20">
    <h3>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="display text-[22px] leading-[1.3] text-ink md:text-[26px]">
          {q}
        </span>
        {/* plus that turns into a minus */}
        <span aria-hidden="true" className="relative h-4 w-4 shrink-0 text-forest">
          <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
          <span
            className={`absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ${
              isOpen ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>
    </h3>
    {isOpen && (
      <p
        id={`${id}-answer`}
        className="max-w-[60ch] pb-6 text-[16px] leading-[1.7] text-stone"
      >
        {a}
      </p>
    )}
  </div>
);

const ContactUs = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // clear a field's error as soon as the visitor fixes it
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setSent(false);
      // move focus to the first field that needs fixing
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    // Concept site: no backend yet, so we just confirm on screen
    setSent(true);
    setForm(emptyForm);
  };

  const describedBy = (field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your business"
        intro="Tell us what you're working on. A consultant will get back to you within one business day."
      />

      <section className="page-x bg-white pb-20 md:pb-28">
        <div className="container-x grid grid-cols-1 gap-16 border-t border-line pt-14 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={describedBy("name")}
                  placeholder="Your name"
                  className={inputClass(errors.name)}
                />
              </Field>

              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={describedBy("email")}
                  placeholder="you@company.com"
                  className={inputClass(errors.email)}
                />
              </Field>
            </div>

            <Field id="phone" label="Phone" optional>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={inputClass(false)}
              />
            </Field>

            <Field id="message" label="How can we help?" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={describedBy("message")}
                placeholder="A few lines about your business and what you'd like to change"
                className={`${inputClass(errors.message)} resize-none`}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-6">
              <button type="submit" className="btn-primary">
                Send message
              </button>

              <p role="status" className="text-[15px] font-semibold text-forest">
                {sent && "Thanks — your message is on its way. We'll be in touch within one business day."}
              </p>
            </div>
          </form>

          {/* Details */}
          <dl className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
            {details.map((item) => (
              <div key={item.label} className="border-t border-line pt-5">
                <dt className="text-[14px] font-semibold text-moss">{item.label}</dt>
                <dd className="display mt-2 text-[22px] leading-[1.35] text-ink">
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-forest">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Map */}
        <div className="container-x mt-16 h-[320px] overflow-hidden border border-line md:mt-20">
          <iframe
            title="Map showing our New York office"
            src="https://www.google.com/maps?q=New+York,+NY+10001&output=embed"
            className="h-full w-full grayscale"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="page-x bg-mist py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="display text-[36px] leading-[1.08] text-ink md:text-[52px]">
              Frequently asked questions
            </h2>
            <p className="mt-6 max-w-[34ch] text-[16px] leading-[1.7] text-stone">
              Answers to the questions we hear most often.
            </p>
          </div>

          <div className="border-t border-ink/20 lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                id={`faq-${i}`}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
