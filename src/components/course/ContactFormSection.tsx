"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import allCountries, { type Country as ITICountry } from "intl-tel-input/data";
import type { Iti, Iso2 } from "intl-tel-input";
import countryNames from "./countryNames";

const preferredCodes: Iso2[] = ["us", "gb", "in", "au", "ca"];

// Force native dropdown option text/background regardless of OS dark theme.
const optionStyle: React.CSSProperties = {
  color: "#000000",
  backgroundColor: "#ffffff",
};

// intl-tel-input only fills in country `name`s after the plugin inits, so use a
// static map for the declarative <select>. It MUST be deterministic across server
// and client (no runtime Intl.DisplayNames) or React hydration fails and breaks
// the phone widget.
function countryName(iso2: string): string {
  return countryNames[iso2] ?? iso2.toUpperCase();
}

type CountryOption = { iso2: Iso2; name: string };

// Requires text + "@" + domain + "." + TLD (rejects missing/misplaced "@").
const EMAIL_RE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function ContactFormSection({
  backgroundImage = "/learningstrategy.webp",
}: {
  backgroundImage?: string;
}) {
  const phoneRef = useRef<HTMLInputElement>(null);
  const dialCodeRef = useRef<HTMLInputElement>(null);
  const branchRef = useRef<HTMLInputElement>(null);
  const pageNameRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<Iti | null>(null);

  // Country select is rendered declaratively so React owns the <option>s.
  const [selectedIso2, setSelectedIso2] = useState<Iso2>("in");

  const { preferred, rest } = useMemo(() => {
    const named: CountryOption[] = allCountries.map((c: ITICountry) => ({
      iso2: c.iso2,
      name: countryName(c.iso2),
    }));
    const preferred = preferredCodes
      .map((code) => named.find((c) => c.iso2 === code))
      .filter(Boolean) as CountryOption[];
    const rest = named
      .filter((c) => !preferredCodes.includes(c.iso2))
      .sort((a, b) => a.name.localeCompare(b.name));
    return { preferred, rest };
  }, []);

  const selectedCountryName = useMemo(
    () => countryName(selectedIso2),
    [selectedIso2],
  );

  useEffect(() => {
    if (!phoneRef.current) return;
    let destroyed = false;

    async function init() {
      const { default: intlTelInput } =
        await import("intl-tel-input/intlTelInputWithUtils");
      if (destroyed || !phoneRef.current) return;

      const iti = intlTelInput(phoneRef.current, {
        initialCountry: "in",
        countryOrder: [...preferredCodes],
        separateDialCode: true,
        formatAsYouType: true,
        placeholderNumberPolicy: "AGGRESSIVE",
      });
      itiRef.current = iti;

      function syncCountryInfo() {
        const data = itiRef.current?.getSelectedCountry();
        if (!data) return;
        if (dialCodeRef.current)
          dialCodeRef.current.value = data.dialCode || "";
        if (data.iso2) setSelectedIso2(data.iso2);
      }

      syncCountryInfo();
      phoneRef.current.addEventListener("countrychange", syncCountryInfo);
      phoneRef.current.addEventListener("input", () => {
        const el = document.getElementById("Phone-error2");
        if (el) el.style.display = "none";
      });
    }

    init();

    // Auto-fill hidden fields from URL
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (branchRef.current)
      branchRef.current.value = pathSegments[0] || "course";
    if (pageNameRef.current)
      pageNameRef.current.value =
        pathSegments[pathSegments.length - 1] || "Home Page";

    return () => {
      destroyed = true;
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    let valid = true;

    const requireField = (fieldName: string, errorId: string, msg: string) => {
      const el = form.elements.namedItem(fieldName) as HTMLInputElement | null;
      const value = el?.value.trim() ?? "";
      if (!value) {
        showError(errorId, msg);
        valid = false;
        return "";
      }
      hideError(errorId);
      return value;
    };

    requireField("SingleLine2", "Name-error2", "Name is required");

    const email = requireField(
      "Email",
      "Email-error2",
      "Email address is required",
    );
    if (email && !EMAIL_RE.test(email)) {
      showError("Email-error2", "Enter a valid email address");
      valid = false;
    }

    requireField("SingleLine", "Company-error2", "Company name is required");
    requireField("SingleLine1", "Job-error2", "Job title is required");

    // Validate phone (unchanged intl-tel-input logic)
    const iti = itiRef.current;
    const phone = phoneRef.current;
    if (!phone || !phone.value.trim()) {
      showError("Phone-error2", "Phone number is required");
      valid = false;
    } else if (iti && iti.isValidNumber() === false) {
      showError("Phone-error2", "Invalid phone number");
      valid = false;
    } else {
      hideError("Phone-error2");
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    // Extract national number for submission
    const country = iti?.getSelectedCountry();
    if (iti && phone && country) {
      const full = iti.getNumber("E164") as string;
      const national = full.substring(1 + country.dialCode.length);
      phone.value = national;
      if (dialCodeRef.current) dialCodeRef.current.value = country.dialCode;
    }
  }

  // Hide a field's error message as soon as the user edits it.
  function clearError(errorId: string) {
    hideError(errorId);
  }

  // Validate the email format when the user leaves the field.
  function validateEmail(value: string) {
    const v = value.trim();
    if (v && !EMAIL_RE.test(v)) {
      showError("Email-error2", "Enter a valid email address");
    } else {
      hideError("Email-error2");
    }
  }

  function showError(id: string, msg: string) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = msg;
      el.style.display = "block";
    }
  }
  function hideError(id: string) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex justify-end">
        <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-2xl p-8">
          <p className="text-[22px] font-semibold text-[#2d2d2d] text-center leading-6 mb-5">
            Request a Quote for your Corporate Training Requirements
          </p>

          <form
            action="https://forms.zohopublic.in/arvindedst1/form/TrainingEnquiry/formperma/uB1eKs_l1E4npKVJKC49HDEQm5jBlAC3Ow4h9zLcGmA/htmlRecords/submit"
            name="form2"
            id="form2"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input
              type="hidden"
              name="zf_redirect_url"
              value="https://www.edstellar.com/thank-you/course"
            />
            <input type="hidden" name="zc_gad" value="" />

            {/* Name */}
            <div className="mb-[18px] relative">
              <input
                type="text"
                name="SingleLine2"
                maxLength={255}
                placeholder="Enter your Name*"
                onInput={() => clearError("Name-error2")}
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p
                id="Name-error2"
                className="text-red-500 text-xs absolute right-0 hidden"
              />
            </div>

            {/* Email */}
            <div className="mb-[18px] relative">
              <input
                type="email"
                name="Email"
                maxLength={255}
                placeholder="Enter your Work Email*"
                onInput={() => clearError("Email-error2")}
                onBlur={(e) => validateEmail(e.currentTarget.value)}
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p
                id="Email-error2"
                className="text-red-500 text-xs absolute right-0 hidden"
              />
            </div>

            {/* Company */}
            <div className="mb-[18px] relative">
              <input
                type="text"
                name="SingleLine"
                maxLength={255}
                placeholder="Enter your Company Name*"
                onInput={() => clearError("Company-error2")}
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p
                id="Company-error2"
                className="text-red-500 text-xs absolute right-0 hidden"
              />
            </div>

            {/* Job Title */}
            <div className="mb-[18px] relative">
              <input
                type="text"
                name="SingleLine1"
                maxLength={255}
                placeholder="Enter your Job Title*"
                onInput={() => clearError("Job-error2")}
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p
                id="Job-error2"
                className="text-red-500 text-xs absolute right-0 hidden"
              />
            </div>

            {/* Country Select */}
            <div className="mb-[18px] relative" id="select-parent">
              <select
                name="Dropdown"
                id="country-select1"
                value={selectedIso2}
                onChange={(e) => {
                  const iso2 = e.target.value as Iso2;
                  setSelectedIso2(iso2);
                  if (iso2) itiRef.current?.setSelectedCountry(iso2);
                }}
                style={{ colorScheme: "light" }}
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] appearance-none cursor-pointer outline-none focus:[border:2px_solid_#3898ec] text-black"
              >
                <option value="" disabled style={optionStyle}>
                  Select Country*
                </option>
                {preferred.map((c) => (
                  <option key={c.iso2} value={c.iso2} style={optionStyle}>
                    {c.name}
                  </option>
                ))}
                <option value="" disabled style={optionStyle}>
                  ────────────
                </option>
                {rest.map((c) => (
                  <option key={c.iso2} value={c.iso2} style={optionStyle}>
                    {c.name}
                  </option>
                ))}
              </select>
              <input
                type="hidden"
                name="SingleLine7"
                value={selectedCountryName}
                readOnly
              />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[10px] h-[6px]"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Phone */}
            <div className="mb-[18px] relative">
              <input type="hidden" name="SingleLine3" ref={dialCodeRef} />
              <input
                ref={phoneRef}
                type="tel"
                name="PhoneNumber_countrycode"
                maxLength={20}
                placeholder="81234 56789"
                required
                autoComplete="off"
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p
                id="Phone-error2"
                className="text-red-500 text-xs absolute right-0 hidden"
              />
            </div>

            {/* Message */}
            <div className="mb-[18px]">
              <textarea
                name="MultiLine"
                maxLength={65535}
                placeholder="Tell Us about your Training Requirements"
                rows={4}
                className="[border:1px_solid_#c1c1c1] text-sm leading-[22px] w-full rounded-[3px] p-3 outline-none focus:[border:2px_solid_#3898ec] resize-none"
              />
            </div>

            <input
              type="hidden"
              name="SingleLine5"
              id="branch"
              ref={branchRef}
              defaultValue="course"
            />
            <input
              type="hidden"
              name="SingleLine4"
              id="page-name"
              ref={pageNameRef}
              defaultValue=""
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#1a3c6e] hover:bg-[#152e55] text-white font-semibold px-10 py-3 rounded cursor-pointer transition-colors text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
