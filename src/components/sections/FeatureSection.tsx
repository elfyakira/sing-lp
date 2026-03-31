"use client";

import { FadeIn } from "@/components/animations";
import { sampleData } from "@/data/sample";
import { Banknote, Users, Play } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  banknote: Banknote,
  users: Users,
  play: Play,
};

const featureImages = [
  "/images/feature-money.png",
  "/images/feature-advisor.png",
  "/images/feature-video.png",
];

export default function FeatureSection() {
  const { service } = sampleData;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              Why TSUNAGERU
            </p>
            <h2 className="text-2xl md:text-[32px] font-bold text-[var(--color-text-primary)]">
              ツナゲルが選ばれる3つの理由
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-16 md:space-y-20">
          {service.strengths.map((strength, index) => {
            const Icon = iconMap[strength.icon] || Banknote;
            const isReversed = index % 2 === 1;

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div
                  className={`flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 md:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-[42%] flex-shrink-0">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-bg-secondary)]">
                      <Image
                        src={featureImages[index]}
                        alt={strength.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                      {/* Fallback icon overlay when no image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-primary)]/5">
                        <Icon className="w-16 h-16 text-[var(--color-primary)] opacity-20" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-[58%]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <span className="font-serif text-2xl font-bold text-[var(--color-primary)] opacity-50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] leading-snug">
                      {index === 0 ? (
                        <>
                          入社祝い金{" "}
                          <span className="text-[var(--color-accent)]">
                            最大100万円
                          </span>
                        </>
                      ) : (
                        strength.title
                      )}
                    </h3>
                    <p className="mt-3 text-[15px] md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
