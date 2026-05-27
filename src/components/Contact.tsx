"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-slate-50 flex items-center justify-center px-4 md:px-page py-12 md:py-20">
      <div className="w-full bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-slate-100">
        {/* Left Informational Sidebar */}
        <div className="w-full md:w-[42%] bg-primary text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-4 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-bold leading-snug tracking-tight mb-4 font-mono">
              We&apos;d Love to hear more from you
            </h2>
            <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-12 max-w-sm">
              Got a question about how our platform can help you? We have got
              the answers.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Office Number",
                  value: "+250-798-400-111 / +250-788-307-498",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Customer Support",
                  value: "info@efiche.africa",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Our Office",
                  value: "Kigali, Rwanda",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Business Hours",
                  value: "9 AM - 5 PM, Monday - Friday",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-3 bg-white text-primary rounded-xl flex items-center justify-center shadow-md">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base text-white">
                      {label}
                    </h4>
                    <p className="text-white/70 text-xs lg:text-sm mt-0.5">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="w-full md:w-[58%] p-8 lg:p-14 bg-white flex flex-col justify-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary tracking-wide mb-8 font-mono">
            Contact Us
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                How Can We Help?
              </label>
              <div className="relative">
                <select
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-400 bg-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Select Inquiry Type
                  </option>
                  <option value="general" className="text-slate-800">
                    General Inquiry
                  </option>
                  <option value="support" className="text-slate-800">
                    Technical Support
                  </option>
                  <option value="demo" className="text-slate-800">
                    Request a Demo
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Enter Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-primary text-white font-medium px-6 py-3.5 rounded-full hover:opacity-90 transition-all group shadow-md"
              >
                <span className="tracking-wide text-sm font-medium px-1">
                  Send A Message
                </span>
                <div className="bg-white text-primary rounded-full p-1 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
