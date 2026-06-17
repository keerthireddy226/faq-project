import Link from "next/link";
import { Mail, CheckCircle2 } from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2E2F72] text-white">
      {/* Top Contact Bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-10">
          <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-sm">
            <span className="font-semibold">Reach Us:</span>

            <a
              href="mailto:contact@edstellar.com"
              className="flex items-center gap-2 text-white/80"
            >
              <Mail size={15} />
              contact@edstellar.com
            </a>

            <span className="hidden md:block h-4 w-px bg-white/20" />

            <a href="tel:+16822974830" className="text-white/80">
              🇺🇸 +1 682 297 4830
            </a>

            <span className="hidden md:block h-4 w-px bg-white/20" />

            <a href="tel:+441514534009" className="text-white/80">
              🇬🇧 +44 151 453 4009
            </a>

            <span className="hidden md:block h-4 w-px bg-white/20" />

            <a href="tel:+916364833830" className="text-white/80">
              🇮🇳 +91 636 483 3830
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr]">

          {/* Left Column */}
          <div>
            <img
              src="/logo.webp"
              className="h-10 mb-4"
              style={{ filter: "grayscale(1) invert(1) brightness(10)", mixBlendMode: "screen", opacity: 0.85 }}
              alt="Edstellar"
            />
            <p className="max-w-xs text-sm leading-6 text-white/80">
              Edstellar is a one-stop instructor-led corporate training and
              coaching solution that addresses organizational upskilling and
              talent transformation needs globally.
            </p>

            <h3 className="mt-6 mb-3 text-sm font-bold uppercase tracking-wide">
              Follow Us
            </h3>

            <div className="flex gap-2">
              <SocialIcon><FaLinkedinIn /></SocialIcon>
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaXTwitter /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaYoutube /></SocialIcon>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold">
                Quality and Compliance
              </h4>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={15} className="text-lime-400 shrink-0" />
                  ISO 9001:2015 Certified
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={15} className="text-lime-400 shrink-0" />
                  ISO 27001:2022 Certified
                </div>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <FooterColumn
            title="Training Programs"
            links={[
              "IT & Technical Training",
              "Management Training",
              "Leadership Training",
              "Behavioral Training",
              "Compliance Training",
              "Social Impact Training",
              "Browse All 2,000+ Courses",
            ]}
          />

          {/* Excellence */}
          <FooterColumn
            title="Excellence"
            links={[
              "Sales Excellence",
              "Marketing Excellence",
              "Operational Excellence",
              "Finance Excellence",
              "HR Excellence",
              "IT Excellence",
              "Customer Service",
              "Leadership Excellence",
              "Quality Management",
            ]}
          />

          {/* Platform */}
          <FooterColumn
            title="Platform"
            links={[
              "Training Management Software",
              "How it Works",
              "FAQ's",
              "Corporate Training Catalog",
              "Stellar AI",
              "Skill Matrix",
              "HRMS Integration",
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              "About us",
              "Who We Serve",
              "CEO Retreats",
              "Pricing",
              "Training Delivery",
              "Partner with Edstellar",
              "Careers",
              "Contact Us",
            ]}
          />

          {/* Resources + Trainers */}
          <div>
            <FooterColumn
              title="Resources"
              links={["Blog", "L&D Resources", "Sitemap"]}
            />

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-bold">Trainers</h3>

              <div className="space-y-3">
                <a
                  href="#"
                  title="Click Here to View Trainer"
                  className="block text-sm text-white/80 hover:text-white"
                >
                  Trainer
                </a>

                <a
                  href="#"
                  title="Click Here to View Join as Trainer"
                  className="block text-sm text-white/80 hover:text-white"
                >
                  Join as Trainer
                </a>

                <a
                  href="#"
                  title="Click Here to View Write for Us"
                  className="block text-sm text-white/80 hover:text-white"
                >
                  Write for Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-white/60">
              © 2021–2026 Edstellar. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-1 text-sm text-white/60">
              <a href="#" className="hover:text-white">Modern Slavery</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              title={`Click Here to View ${link}`}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-sm transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}
