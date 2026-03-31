import { sampleData } from "@/data/sample";

const footerLinks = [
  { label: "利用規約", href: "https://tunageru.net/special/termofuse" },
  { label: "プライバシーポリシー", href: "https://tunageru.net/special/privacypolicy" },
  { label: "会社概要", href: "https://tunageru.net/special/company" },
  { label: "お問い合わせ", href: "https://tunageru.net/inquiry" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-primary)] text-white py-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400 font-medium">
          {sampleData.company.name}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          &copy; 2025 Sing Co., Ltd.
        </p>
      </div>
    </footer>
  );
}
