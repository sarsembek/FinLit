import * as React from "react";
import { FAQItem } from "./FAQItem";

const faqData = [
  {
    question: "How to create a personal budget?",
    answer:
      "List all your income and track your expenses for the month. Divide into fixed and variable expenses. Choose a method (e.g., 50/30/20 rule, zero-based budgeting). Identify short-term and long-term goals. Record your income and expenses using a spreadsheet or app. Review monthly and adjust as needed. Track your daily expenses and be disciplined. Evaluate spending patterns and make changes for the next month.",
  },
  {
    question: "How to control expenses?",
    answer:
      "Start by categorizing your spending to understand where your money goes. Set limits for non-essential categories, and avoid impulsive purchases by following a budget. Consider using budgeting tools or apps to track expenses and receive alerts when you're close to exceeding limits.",
  },
  {
    question: "What is a financial safety net and how to create it?",
    answer:
      "A financial safety net is a reserve of funds set aside for emergencies, such as unexpected medical bills or job loss. Build it by setting aside a portion of your income each month, aiming for 3-6 months' worth of living expenses. Keep this money in an easily accessible account, like a savings account.",
  },
  {
    question: "What types of investments are there and how to choose the right ones?",
    answer:
      "Common investment types include stocks, bonds, mutual funds, and real estate. Choosing the right ones depends on your risk tolerance, financial goals, and investment timeframe. Higher-risk investments like stocks may offer greater returns but require a longer time horizon, while bonds are typically safer but yield lower returns.",
  },
  {
    question: "How to properly distribute income between savings, expenses, and investments?",
    answer:
      "A popular guideline is the 50/30/20 rule: allocate 50% of income for needs, 30% for wants, and 20% for savings and investments. Adjust this rule based on your financial goals. Prioritize building an emergency fund, then gradually increase investments as your savings grow.",
  },
  {
    question: "How to plan for retirement savings?",
    answer:
      "Begin by estimating your retirement needs based on your current lifestyle. Contribute regularly to retirement accounts like a 401(k) or IRA if available. Take advantage of employer matches if applicable, and increase contributions as your income grows. Start early to benefit from compound growth.",
  },
  {
    question: "How to reduce debt?",
    answer:
      "Focus on high-interest debts first to minimize overall interest costs. Use methods like the debt snowball (paying off smallest debts first) or debt avalanche (paying off highest interest debts first). Make consistent payments and avoid accruing new debt. Consider consolidating debt if it simplifies your payment process.",
  },
];


export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number>(-1); // Initialize with -1 to keep all closed

  return (
    <section
      id="faq"
      data-layername="faq"
      className="flex flex-col items-center pt-24 max-w-full w-[1020px] max-md:mt-10 px-12"
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
