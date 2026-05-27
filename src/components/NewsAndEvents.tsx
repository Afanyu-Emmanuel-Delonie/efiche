"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { articles } from "@/lib/articles";
import Link from "next/link";
import { FadeUp } from "./Motion";
import Image from "next/image";

const ITEMS_PER_PAGE = 2;

export default function NewsAndEvents() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const visible = articles.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section className="w-full bg-white py-16 px-4 md:px-page select-none">
      <div className="flex flex-col items-center">
        {/* Header */}
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-widest font-mono text-center mb-12">
            News &amp; Events
          </h2>
        </FadeUp>

        <FadeUp
          delay={0.1}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10"
        >
          {visible.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col sm:flex-row border border-slate-50 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,0,0,0.09)]"
            >
              {/* Image */}
              <div className="w-full sm:w-[45%] min-h-[240px] sm:min-h-full relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-5 left-5 bg-white/30 backdrop-blur-md text-white text-xs font-medium px-4 py-1.5 rounded-full tracking-wide shadow-sm">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="w-full sm:w-[55%] p-6 md:p-8 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primary leading-snug tracking-tight mb-4">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover grayscale border border-slate-100 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 tracking-tight">
                      {article.author.name}
                    </h4>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {article.date} <span className="mx-1">•</span>{" "}
                      {article.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </FadeUp>

        {/* Pagination */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${i === page ? "w-6 bg-primary" : "w-2 bg-slate-200"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
