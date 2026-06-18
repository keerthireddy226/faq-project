import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Cta {
  label: string;
  href: string;
}

interface HeroBannerProps {
  breadcrumbs: Breadcrumb[];
  headingHighlight: string;
  headingMain: string;
  description: string;
  bullets: string[];
  // primaryCta: Cta;
  primaryCta?: Cta;
  // secondaryCta: Cta;
  secondaryCta?: Cta;
  image: {
    src: string;
    alt: string;
  };
}

export default function HeroBanner({
  breadcrumbs,
  headingHighlight,
  headingMain,
  description,
  bullets,
  primaryCta,
  secondaryCta,
  image,
}: HeroBannerProps) {
  return (
    <section className="bg-[#22295a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Content */}
        <div>

          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-1 text-sm text-white/50 mb-8">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span>&gt;</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white/80 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#c8e130]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#c8e130]">{headingHighlight}</span>
            <br />
            <span className="text-white">{headingMain}</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-base leading-7 mb-8 max-w-lg">
            {description}
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-10">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle2 size={18} className="text-[#c8e130] shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="bg-[#c8e130] hover:bg-[#b8d020] text-[#22295a] text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {primaryCta.label}
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="border border-white text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-white/10"
              >
                {secondaryCta.label} ↓
              </Link>
            )}
          </div>

        </div>

        {/* Right — Image */}
        <div className="relative w-[550px] h-[551px] rounded-xl overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
