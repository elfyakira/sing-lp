"use client";

import { FadeIn } from "@/components/animations";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";
import Image from "next/image";
import { sampleData } from "@/data/sample";

const voiceImages = [
  "/images/voice-01.png",
  "/images/voice-02.png",
  "/images/voice-03.png",
];

export default function TestimonialSection() {
  const { service } = sampleData;

  if (!service.testimonials || service.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      {/* 上部ティール帯 */}
      <div className="bg-[#44ACD3] py-4 md:py-6 text-center mb-8 md:mb-12">
        <p className="text-white/70 text-xs md:text-sm tracking-widest font-medium">
          ツナゲルで転職した先輩たちの
        </p>
        <h2 className="text-white text-2xl md:text-4xl font-bold mt-1">
          リアルな声をご紹介
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <ScrollRevealContainer className="grid md:grid-cols-3 gap-6 md:gap-8">
          {service.testimonials.map((testimonial, index) => (
            <ScrollRevealItem key={index}>
              <div className="h-full">
                {/* 斜めカットの写真 */}
                <div
                  className="relative w-full aspect-[4/3] overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                  }}
                >
                  <Image
                    src={voiceImages[index]}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* テキスト */}
                <div className="pt-4 md:pt-5">
                  <p className="text-[var(--color-primary)] text-base md:text-lg font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)]">
                    {testimonial.role}
                  </p>
                  <p className="mt-3 text-sm md:text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
