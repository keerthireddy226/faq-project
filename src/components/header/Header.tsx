"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

const navItems = [
  { label: "Training Programs" },
  { label: "Platform" },
  { label: "Managed Training" },
  { label: "Consulting" },
  { label: "Company" },
  { label: "Resources" },
  { label: "Blog", href: "/blogs/leadership-training-companies-saudi-arabia" },
];

export default function Header() {
  const [showAiSubmenu, setShowAiSubmenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.webp" alt="Edstellar" className="h-8" />
        </Link>

        {/* Nav */}
<nav className="hidden lg:flex items-center gap-1">
  {navItems.map((item) =>
    item.href ? (
      <Link
        key={item.label}
        href={item.href}
        className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
      >
        {item.label}
      </Link>
    ) : item.label === "Training Programs" ? (
      <div key={item.label} className="relative group">
        <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50">
          {item.label}
          <ChevronDown size={14} className="text-gray-400" />
        </button>

        {/* Mega Menu */}
        <div className="absolute top-full left-0 mt-2 w-[650px] bg-white rounded-xl border border-gray-200 shadow-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

          {/* Heading */}
          <h3 className="text-xl font-bold text-gray-900 mb-8">
            2,000+ Instructor-led Corporate Training Programs Across Domains
          </h3>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                By Training Type
              </h4>

              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  IT & Technical Training (1045+)
                </a>

                <div>
                  <button
                    type="button"
                    onClick={() => setShowAiSubmenu((prev) => !prev)}
                    className="flex w-full items-center justify-between text-gray-600 hover:text-blue-600"
                  >
                    Artificial Intelligence Training (130)
                    <ChevronDown
                      size={14}
                      className={`text-gray-400 transition-transform ${
                        showAiSubmenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showAiSubmenu && (
                    <div className="mt-2 ml-3 space-y-2 border-l border-gray-200 pl-3">
                      <Link
                        href="/corporate-training/artificial-intelligence/ml-model-monitoring"
                        className="block text-gray-600 hover:text-blue-600"
                      >
                        ML Model Monitoring
                      </Link>
                    </div>
                  )}
                </div>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Management Skills Training (335+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Leadership Training (115+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Behavioral Training (65)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Compliance Training (50+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Social Impact Training (80+)
                </a>
              </div>
            </div>

            {/* Right */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Popular Categories
              </h4>

              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Cybersecurity Training (35+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Environmental Sustainability Training (55+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Product Management Training (15+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Risk Management Training (20+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Soft Skills Training (20+)
                </a>

                <a href="#" className="block text-gray-600 hover:text-blue-600">
                  Strategic Leadership Training (65+)
                </a>
              </div>
            </div>

          </div>

          {/* Footer Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Instructor-led Training Programs
            </Link>
          </div>

        </div>
      </div>
    ) : (
      <button
        key={item.label}
        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
      >
        {item.label}
        <ChevronDown size={14} className="text-gray-400" />
      </button>
    )
  )}
</nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50">
            <Search size={18} />
          </button>

          <Link
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            View Pricing
          </Link>
        </div>

      </div>
    </header>
  );
}
