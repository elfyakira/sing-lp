"use client";

import { FadeIn } from "@/components/animations";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";
import CTAButton from "@/components/common/CTAButton";
import Image from "next/image";
import { sampleData } from "@/data/sample";

const benefitCards = [
  {
    image: "/images/benefit-money.png",
    number: "最大100万円",
    title: "お金の心配がなくなる",
    description: "入社祝い金で、引っ越し・生活費・転職準備のすべてをカバー。",
  },
  {
    image: "/images/benefit-advisor.png",
    number: "完全伴走",
    title: "一人で悩まなくていい",
    description: "求人選びから面接対策、入社後の悩みまで、専任のプロがずっとそばに。",
  },
  {
    image: "/images/benefit-video.png",
    number: "動画で確認",
    title: "ミスマッチしない",
    description: "動画で職場の雰囲気を確認でき、厳選された優良企業のみをご紹介。",
  },
];

export default function SolutionSection() {
  const { cta } = sampleData;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* グラデーション背景 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #3595B8 0%, #44ACD3 40%, #5FBFDF 100%)",
        }}
      />

      {/* 斜め白シェイプ */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40%]"
        style={{
          background: "white",
          clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* 見出し */}
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-white/70 text-xs md:text-sm tracking-widest font-medium uppercase">
              Service Strengths
            </p>
            <h2 className="mt-3 text-xl md:text-3xl font-bold text-white leading-relaxed">
              ツナゲルは、あなたの「転職したい」を
              <br />
              お金とサポートの両面から応援します。
            </h2>
          </div>
        </FadeIn>

        {/* 3カラムカード */}
        <ScrollRevealContainer className="grid md:grid-cols-3 gap-5 md:gap-6">
          {benefitCards.map((card, index) => (
            <ScrollRevealItem key={index}>
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg h-full">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[#44ACD3] text-2xl md:text-3xl font-bold">
                  {card.number}
                </p>
                <p className="mt-2 text-[var(--color-text-primary)] text-base md:text-lg font-bold">
                  {card.title}
                </p>
                <p className="mt-2 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-10 md:mt-14 text-center">
            <CTAButton href={cta.registerUrl} size="lg">
              {cta.buttonText}
            </CTAButton>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              利用料0円 ｜ 相談だけでもOK
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
