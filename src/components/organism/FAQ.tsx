"use client";

import { dataFAQ } from "@/constants/faq";
import { MinusIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function FAQComponents() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {dataFAQ.map((data, index) => (
        <div key={index} id="faq" className="py-6">
          <div id="question" className="flex items-center justify-between">
            <p className="text-base font-bold text-black">{data.question}</p>
            <button
              onClick={() => toggleFAQ(index)}
              className="bg-primary flex size-5 cursor-pointer items-center justify-center rounded-full"
            >
              {openIndex === index ? (
                <MinusIcon className="size-4 text-white" />
              ) : (
                <PlusIcon className="size-4 text-white" />
              )}
            </button>
          </div>
          {openIndex === index && (
            <p id="answer" className="text-typography mt-4 text-sm">
              {data.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
