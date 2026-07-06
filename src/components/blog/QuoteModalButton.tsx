"use client";

import { useEffect, useState } from "react";
import TrainingEnquiryForm from "@/src/components/course/TrainingEnquiryForm";

export default function QuoteModalButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock background scroll while the popup is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 py-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[720px]"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -right-3 -top-3 z-10 flex items-center justify-center h-9 w-9  rounded-full bg-white text-xl leading-none text-[#1a1a2e] shadow-md transition hover:bg-gray-100"
            >
              ×
            </button>
            <TrainingEnquiryForm />
          </div>
        </div>
      )}
    </>
  );
}
