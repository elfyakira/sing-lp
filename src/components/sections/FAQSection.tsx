"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { sampleData } from "@/data/sample";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#44ACD3] text-white rounded-full px-6 py-3 md:px-8 md:py-4 text-left hover:bg-[#3595B8] transition-colors"
      >
        <span className="font-bold text-sm md:text-base pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 py-4 text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const { faq } = sampleData;

  const leftColumn = faq.filter((_, i) => i % 2 === 0);
  const rightColumn = faq.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* イラスト + 見出し */}
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <div className="w-48 md:w-64 mx-auto mb-4">
              <Image
                src="/images/faq-illust.png"
                alt="よくあるご質問"
                width={640}
                height={360}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              よくあるご質問
            </h2>
          </div>
        </FadeIn>

        {/* 2カラムFAQ */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4">
              {leftColumn.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
            <div className="space-y-3 md:space-y-4">
              {rightColumn.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
