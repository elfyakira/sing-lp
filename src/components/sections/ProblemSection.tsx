"use client";

import { FadeIn } from "@/components/animations";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";
import { sampleData } from "@/data/sample";

export default function ProblemSection() {
  const { target } = sampleData;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-[32px] font-bold text-[var(--color-text-primary)] text-center leading-snug">
            こんなことで、
            <br className="md:hidden" />
            転職をあきらめていませんか？
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="mt-10 md:mt-12 space-y-0">
          {target.problems.map((problem, index) => (
            <ScrollRevealItem key={index}>
              <div className="py-5 md:py-6 border-b border-[var(--color-border)] last:border-b-0">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-[3px] bg-[var(--color-accent)] rounded-full mt-1" style={{ minHeight: "20px" }} />
                  <div>
                    <p className="text-base md:text-lg font-bold text-[var(--color-text-primary)] leading-snug">
                      {problem.headline}
                    </p>
                    <p className="mt-2 text-sm md:text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                      {problem.body}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        <FadeIn delay={0.4}>
          <p className="text-center mt-8 md:mt-10 text-base text-[var(--color-primary)] font-medium">
            一つでも当てはまるなら、ツナゲルに相談してみてください。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
