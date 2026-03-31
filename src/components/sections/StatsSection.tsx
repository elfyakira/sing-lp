"use client";

import { FadeIn, CountUp } from "@/components/animations";
import { sampleData } from "@/data/sample";

export default function StatsSection() {
  const { service } = sampleData;

  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-xl md:text-[28px] font-bold text-center mb-10 md:mb-14">
            東海エリアの転職を、数字で支えています。
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {service.stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="text-center">
                <div className="text-4xl md:text-[56px] font-bold text-[var(--color-accent-light)] leading-none">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs md:text-sm text-white/75">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
