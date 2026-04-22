"use client";

import { FadeIn } from "@/components/animations";
import CTAButton from "@/components/common/CTAButton";
import { sampleData } from "@/data/sample";

export default function ClosingCTASection() {
  const { cta } = sampleData;

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/closing-bg.png')",
          backgroundColor: "#3595B8",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(53,149,184,0.92) 0%, rgba(68,172,211,0.85) 100%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            あなたの「転職したい」に、
            <br />
            100万円の後押しを。
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed">
            まだ迷っていても大丈夫。
            <br />
            相談だけでも、あなたの未来は動き出します。
          </p>

          <div className="mt-10">
            <CTAButton href={cta.registerUrl} size="xl" variant="cta">
              30秒で無料登録
            </CTAButton>
            <p className="mt-4 text-sm text-white/70">
              30秒で登録完了 ｜ 利用料ずっと0円 ｜ 退会も自由
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
