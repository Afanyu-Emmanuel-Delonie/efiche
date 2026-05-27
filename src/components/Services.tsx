import Image from "next/image";
import React from "react";
import Button from "./Button";

const services = [
  {
    img: "/services/next-gen-emr.png",
    title: "Next-Gen EMR",
    description:
      "Advanced Electronic Medical Record system powered by AI, providing seamless healthcare data management and improved patient care coordination.",
  },
  {
    img: "/services/dental-emr.png",
    title: "Dental Facility EMR",
    description:
      "Join clinics like Kivu Clinic using our custom-built advanced EMR. Secure, all inclusive, with local support for seamless care delivery.",
  },
  {
    img: "/services/mobile.png",
    title: "eFiche Patient App",
    description:
      "Patient-centric mobile application enabling easy access to medical records, appointment scheduling, and real-time communication with healthcare providers.",
  },
  {
    img: "/services/dna-research.png",
    title: "Biobank & DNA Research",
    description:
      "Advanced biobanking solution integrated with DNA research capabilities, facilitating groundbreaking medical research and personalized medicine.",
  },
  {
    img: "/services/data-analytics.png",
    title: "Data Insights & Analytics",
    description:
      "Comprehensive healthcare analytics platform providing actionable insights for better decision-making and improved operational efficiency.",
  },
  {
    img: "/general/about.png",
    title: "AI & Predictive Analytics",
    description:
      "Cutting-edge AI algorithms for disease prediction, treatment optimization, and healthcare outcome forecasting.",
  },
];

function Services() {
  return (
    <section className="px-4 md:px-page py-12 md:py-20 flex flex-col gap-10 bg-primary">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-white leading-snug">
          Our Solutions
        </h2>
        <p className="text-white/60 text-center text-sm md:text-base max-w-xl">
          We empower healthcare professionals with AI-driven tools that enhance
          decision-making, improve patient outcomes, and boost operational
          efficiency.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ img, title, description }) => (
          <div
            key={title}
            className="flex flex-col rounded-sm overflow-hidden bg-white/10 hover:bg-white/15 hover:shadow-md transition duration-300"
          >
            <div className="relative w-full h-48">
              <Image src={img} alt={title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-base font-semibold text-white font-mono">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <Button href="#" variant="secondary" className="self-center px-8">Get Our Solutions</Button>
    </section>
  );
}

export default Services;
