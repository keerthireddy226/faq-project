"use client";

import { useEffect, useRef } from "react";
import allCountries, { type Country as ITICountry } from "intl-tel-input/data";

const preferredCodes = ["us", "gb", "in", "au", "ca"];

function cleanName(name: string) {
  return name.replace(/\s*\(.*?\)/g, "").trim();
}

export default function ContactFormSection({
  backgroundImage = "/learningstrategy.webp",
}: {
  backgroundImage?: string;
}) {
  const phoneRef = useRef<HTMLInputElement>(null);
  const countrySelectRef = useRef<HTMLSelectElement>(null);
  const countryNameRef = useRef<HTMLInputElement>(null);
  const dialCodeRef = useRef<HTMLInputElement>(null);
  const branchRef = useRef<HTMLInputElement>(null);
  const pageNameRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);

  useEffect(() => {
    if (!phoneRef.current) return;
    let destroyed = false;

    async function init() {
      const { default: intlTelInput } = await import("intl-tel-input/intlTelInputWithUtils");
      if (destroyed || !phoneRef.current) return;

      const iti = intlTelInput(phoneRef.current, {
        initialCountry: "in",
        countryOrder: [...preferredCodes] as any,
        separateDialCode: true,
        formatAsYouType: true,
      });
      itiRef.current = iti;

      // Build country select
      const sel = countrySelectRef.current;
      if (sel) {
        sel.innerHTML = "";
        const addOpt = (text: string, val: string, disabled = false) => {
          const o = document.createElement("option");
          o.value = val;
          o.textContent = text;
          if (disabled) o.disabled = true;
          sel.appendChild(o);
        };
        addOpt("Select Country*", "", true);
        preferredCodes.forEach((code) => {
          const c = allCountries.find((x: ITICountry) => x.iso2 === code);
          if (c) addOpt(cleanName(c.name), c.iso2);
        });
        addOpt("────────────", "", true);
        allCountries
          .filter((c: ITICountry) => !preferredCodes.includes(c.iso2))
          .sort((a: ITICountry, b: ITICountry) => a.name.localeCompare(b.name))
          .forEach((c: ITICountry) => addOpt(cleanName(c.name), c.iso2));
      }

      function syncCountryInfo() {
        const data = itiRef.current?.getSelectedCountry();
        if (!data) return;
        if (dialCodeRef.current) dialCodeRef.current.value = data.dialCode || "";
        if (countryNameRef.current) countryNameRef.current.value = cleanName(data.name || "");
        if (countrySelectRef.current && data.iso2) {
          countrySelectRef.current.value = data.iso2;
        }
      }

      syncCountryInfo();
      phoneRef.current.addEventListener("countrychange", syncCountryInfo);

      if (sel) {
        sel.addEventListener("change", function () {
          if (this.value) itiRef.current?.setSelectedCountry(this.value as any);
        });
      }
    }

    init();

    // Auto-fill hidden fields from URL
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (branchRef.current) branchRef.current.value = pathSegments[0] || "course";
    if (pageNameRef.current) pageNameRef.current.value = pathSegments[pathSegments.length - 1] || "Home Page";

    return () => {
      destroyed = true;
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const iti = itiRef.current;
    if (!iti) return;

    const phone = phoneRef.current;
    if (!phone) return;

    // Validate phone
    if (!phone.value.trim()) {
      e.preventDefault();
      showError("Phone-error2", "Phone number is required");
      return;
    }
    if (iti.isValidNumber() === false) {
      e.preventDefault();
      showError("Phone-error2", "Invalid phone number");
      return;
    }

    // Extract national number for submission
    const country = iti.getSelectedCountry();
    if (country) {
      const full = iti.getNumber("E164") as string;
      const national = full.substring(1 + country.dialCode.length);
      phone.value = national;
      if (dialCodeRef.current) dialCodeRef.current.value = country.dialCode;
    }
    hideError("Phone-error2");
  }

  function showError(id: string, msg: string) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = "block"; }
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
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="https://www.edstellar.com/thank-you/course" />
            <input type="hidden" name="zc_gad" value="" />

            {/* Name */}
            <div className="mb-[18px] relative">
              <input
                type="text"
                name="SingleLine2"
                maxLength={255}
                placeholder="Enter your Name*"
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p id="Name-error2" className="text-red-500 text-xs absolute right-0 hidden" />
            </div>

            {/* Email */}
            <div className="mb-[18px] relative">
              <input
                type="email"
                name="Email"
                maxLength={255}
                placeholder="Enter your Work Email*"
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p id="Email-error2" className="text-red-500 text-xs absolute right-0 hidden" />
            </div>

            {/* Company */}
            <div className="mb-[18px] relative">
              <input
                type="text"
                name="SingleLine"
                maxLength={255}
                placeholder="Enter your Company Name*"
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p id="Company-error2" className="text-red-500 text-xs absolute right-0 hidden" />
            </div>

            {/* Job Title */}
            <div className="mb-[18px] relative">
              <input
                type="text"
                name="SingleLine1"
                maxLength={255}
                placeholder="Enter your Job Title*"
                required
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] outline-none focus:[border:2px_solid_#3898ec]"
              />
              <p id="Job-error2" className="text-red-500 text-xs absolute right-0 hidden" />
            </div>

            {/* Country Select */}
            <div className="mb-[18px] relative" id="select-parent">
              <select
                name="Dropdown"
                ref={countrySelectRef}
                id="country-select1"
                defaultValue=""
                className="h-[46px] bg-white [border:1px_solid_#c1c1c1] w-full rounded-[3px] px-3 text-sm leading-[22px] appearance-none cursor-pointer outline-none focus:[border:2px_solid_#3898ec] text-black"
              >
                <option value="" disabled>Select Country*</option>
              </select>
              <input type="hidden" name="SingleLine7" ref={countryNameRef} />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[10px] h-[6px]"
                viewBox="0 0 10 6" fill="none"
              >
                <path d="M1 1l4 4 4-4" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
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
              <p id="Phone-error2" className="text-red-500 text-xs absolute right-0 hidden" />
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

            <input type="hidden" name="SingleLine5" id="branch" ref={branchRef} defaultValue="course" />
            <input type="hidden" name="SingleLine4" id="page-name" ref={pageNameRef} defaultValue="" />

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
