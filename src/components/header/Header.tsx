import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

const navItems = [
  { label: "Training Programs" },
  { label: "Platform" },
  { label: "Managed Training" },
  { label: "Consulting" },
  { label: "Company" },
  { label: "Resources" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.webp" alt="Edstellar" className="h-8" />
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
            >
              {item.label}
              <ChevronDown size={14} className="text-gray-400" />
            </button>
          ))}
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
