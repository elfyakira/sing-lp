"use client";

import { FadeIn } from "@/components/animations";
import CTAButton from "@/components/common/CTAButton";
import { sampleData } from "@/data/sample";

export default function OfferSection() {
  const { cta } = sampleData;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-tertiary)]">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[var(--color-text-secondary)] text-2xl md:text-4xl font-medium">
              ツナゲルの利用料は、ずっと
            </p>
            <p className="mt-3 text-8xl md:text-[128px] font-bold text-[var(--color-primary)] leading-none">
              0<span className="text-5xl md:text-7xl">円</span>
            </p>
            <p className="mt-6 text-lg md:text-2xl text-[var(--color-text-secondary)] leading-relaxed">
              求人紹介、履歴書添削、面接対策、入社後サポート。
              <br />
              すべてのサービスを、完全無料でご利用いただけます。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 md:mt-14 border-2 border-[var(--color-accent)] rounded-2xl bg-white p-10 md:p-14 text-center">
            <p className="text-[var(--color-text-secondary)] text-xl md:text-3xl font-medium">
              さらに、入社祝い金
            </p>
            <p className="mt-3 flex items-baseline justify-center gap-2">
              <span className="text-2xl md:text-4xl text-[var(--color-text-primary)] font-bold">
                最大
              </span>
              <span className="text-7xl md:text-[96px] font-bold text-[var(--color-accent)] leading-none">
                100
              </span>
              <span className="text-4xl md:text-6xl font-bold text-[var(--color-accent)]">
                万円
              </span>
            </p>
            <p className="mt-5 text-lg md:text-2xl text-[var(--color-text-secondary)]">
              ツナゲルを通じてご入社いただいた方に、入社祝い金をお贈りします。
            </p>
            <p className="mt-3 text-base md:text-lg text-[var(--color-text-muted)]">
              ※入社後一定期間の継続勤務が支給条件となります。金額は求人により異なります。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <CTAButton href={cta.registerUrl} size="xl" fullWidth>
              {cta.buttonText}
            </CTAButton>
            <p className="mt-3 text-lg text-[var(--color-text-muted)]">
              途中退会も自由 ｜ 費用は一切かかりません
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
