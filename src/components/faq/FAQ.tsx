import * as React from "react";
import { FAQItem } from "./FAQItem";
import { FAQData } from "./types";

const faqData: FAQData[] = [
  {
    question: "What credit score do I need to apply for a credit card?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "How can I apply for a credit card online?",
    answer:
      "You can apply for a credit card online through the bank or financial institution's website. Simply fill out the online application form, providing your personal information, financial details, and any required documentation.",
  },
  {
    question: "Are there any annual fees associated with the credit card?",
    answer:
      "Some credit cards may charge an annual fee, while others offer no annual fee options. Be sure to read the terms and conditions of the card to understand any fees that may apply.",
  },
  {
    question: "How long does it take to receive the credit card once approved?",
    answer:
      "Once your application is approved, it typically takes 5 to 10 business days for the credit card to arrive in the mail. Some issuers offer expedited shipping for an additional fee.",
  },
  {
    question: "How can I check my credit card balance and transactions?",
    answer:
      "You can check your credit card balance and transactions by logging into your account on the issuer's website or mobile app. Most issuers also provide customer service numbers you can call for assistance.",
  },
  {
    question: "What should I do if my credit card is lost or stolen?",
    answer:
      "If your credit card is lost or stolen, immediately contact your card issuer to report it. They will help you freeze your account and issue a new card to prevent unauthorized charges.",
  },
  {
    question: "Is my credit card information secure?",
    answer:
      "Yes, credit card companies use advanced security measures, such as encryption and fraud detection systems, to protect your information. However, it's essential to be cautious and monitor your account for any suspicious activity.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number>(-1); // Initialize with -1 to keep all closed

  return (
    <section
      data-layername="faq"
      className="flex flex-col items-center mt-32 max-w-full w-[1020px] max-md:mt-10"
    >
      <h2 data-layername="faQs" className="text-4xl font-bold text-white">
        FAQs
      </h2>
      <div className="flex flex-col mt-16 w-full max-md:mt-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            className="mb-6" // Added margin-bottom here
          />
        ))}
      </div>
    </section>
  );
};
