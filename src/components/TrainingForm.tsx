"use client";

import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function TrainingForm() {
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<any>(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    itiRef.current = intlTelInput(phoneRef.current, {
      initialCountry: "us",
      separateDialCode: true,
    });

    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Full phone:", itiRef.current?.getNumber());
    console.log("Country:", itiRef.current?.getSelectedCountryData());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={phoneRef}
        type="tel"
        className="h-14 w-full rounded border border-gray-300 px-5 text-lg outline-none"
      />

      <button
        type="submit"
        className="rounded bg-lime-400 px-8 py-3 font-bold text-black"
      >
        Submit
      </button>
    </form>
  );
}
