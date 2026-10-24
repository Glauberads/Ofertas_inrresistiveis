"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `faq-trigger-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden bg-white",
              isOpen
                ? "border-emerald-500/60 shadow-md ring-1 ring-emerald-500/20"
                : "border-slate-200 hover:border-slate-300 shadow-sm"
            )}
          >
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-5 py-4 sm:px-6 sm:py-5 text-slate-900 font-semibold text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl gap-4 cursor-pointer"
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                    isOpen
                      ? "bg-emerald-100 text-emerald-800 rotate-180"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                "px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3",
                !isOpen && "hidden"
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
