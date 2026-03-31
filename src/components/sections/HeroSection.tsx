"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/common/CTAButton";
import { sampleData } from "@/data/sample";

export default function HeroSection() {
  const { cta } = sampleData;

  return (
    <section className="relative overflow-hidden bg-[#e8f4fb]">
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {/* 背景画像（集中線+人物） */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg-v5.png')",
          }}
        />

        {/* テキストオーバーレイ - 中央配置 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          {/* 転職応援キャンペーン */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-[var(--font-rounded)] text-[#44ACD3] text-4xl md:text-7xl lg:text-9xl font-extrabold tracking-wider"
            style={{
              WebkitTextStroke: "5px white",
              paintOrder: "stroke fill",
              textShadow: "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)",
            }}
          >
            転職応援キャンペーン！
          </motion.p>

          {/* 入社祝い金 */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-[var(--font-rounded)] mt-1 md:mt-2 text-3xl md:text-5xl lg:text-8xl font-extrabold"
            style={{
              color: "#1B2567",
              WebkitTextStroke: "6px white",
              paintOrder: "stroke fill",
              textShadow: "0 0 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.6)",
            }}
          >
            入社祝い金
          </motion.p>

          {/* 100万円 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 md:mt-10"
          >
            <div className="flex items-end justify-center">
              <span
                className="text-[14rem] md:text-[24rem] lg:text-[32rem] leading-[0.75]"
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  WebkitTextStroke: "4px #1B2567",
                  paintOrder: "stroke fill",
                  textShadow: "4px 4px 0px rgba(0,0,0,0.2), 8px 8px 15px rgba(0,0,0,0.1)",
                }}
              >
                100
              </span>
              <span
                className="text-5xl md:text-8xl lg:text-[10rem] font-extrabold mb-0 tracking-[-0.1em]"
                style={{
                  fontFamily: "var(--font-shippori), serif",
                  color: "#FFFFFF",
                  WebkitTextStroke: "6px #1B2567",
                  paintOrder: "stroke fill",
                  textShadow: "3px 3px 0px rgba(0,0,0,0.2), 6px 6px 10px rgba(0,0,0,0.1)",
                }}
              >
                万円
              </span>
            </div>
          </motion.div>

          {/* サブメッセージ */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="font-[var(--font-rounded)] text-[#2D3436] text-xl md:text-3xl lg:text-5xl font-extrabold mt-4 md:mt-8"
          >
            あなたの新社会生活を応援します
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="mt-4 md:mt-6"
          >
            <CTAButton href={cta.registerUrl} size="lg">
              {cta.buttonText}
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
