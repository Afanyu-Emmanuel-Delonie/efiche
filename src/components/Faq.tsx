"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is eFiche?",
    answer:
      "eFiche is an AI-powered healthcare platform that provides Electronic Medical Records, patient management, and data analytics tools tailored for modern healthcare facilities.",
  },
  {
    question: "Who can use eFiche?",
    answer:
      "eFiche is designed for hospitals, clinics, dental facilities, and individual healthcare providers looking to digitize and streamline their patient care workflows.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. eFiche uses industry-standard encryption and complies with healthcare data privacy regulations to ensure all patient information is stored and transmitted securely.",
  },
  {
    question: "Does eFiche support mobile devices?",
    answer:
      "Absolutely. The eFiche Patient App is available on mobile, allowing patients to access records, schedule appointments, and communicate with providers on the go.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out through our contact form or request a demo. Our team will guide you through onboarding and setup tailored to your facility's needs.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left text-white font-medium text-sm md:text-base gap-4 cursor-pointer"
      >
        <span>{question}</span>
        <span className="text-white/60 text-xl leading-none shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-4 text-white/60 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

function Faq() {
  return (
    <section className="py-24 lg:py-28 xl:py-32 bg-primary">
      <div className="max-container padding-container flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left */}
        <div className="md:w-2/5 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-white leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Have questions about eFiche? We&apos;ve got answers. If you don&apos;t find
            what you&apos;re looking for, feel free to reach out to our team directly.
          </p>
        </div>

        {/* Right */}
        <div className="md:w-3/5">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
