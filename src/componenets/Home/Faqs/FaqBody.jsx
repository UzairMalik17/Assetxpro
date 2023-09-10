import React, { useState } from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import FaqCategory from "./FaqCategory";
import FaqQuestions from "./FaqQuestions";

function FaqBody() {
  const faqs = [
    {
      category: "OPEN ACCOUNT",
      question: "How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "OPEN ACCOUNT",
      question: "How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "OPEN ACCOUNT",
      question: "How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "OPEN ACCOUNT",
      question: "How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "OPEN ACCOUNT",
      question: "How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "SUPPORT",
      question: "SUPPORT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "SUPPORT",
      question: "SUPPORT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "SUPPORT",
      question: "SUPPORT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "SUPPORT",
      question: "SUPPORT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "SUPPORT",
      question: "SUPPORT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "TRADING",
      question: "TRADING How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "TRADING",
      question: "TRADING How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "TRADING",
      question: "TRADING How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "TRADING",
      question: "TRADING How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "TRADING",
      question: "TRADING How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "PLATFORM",
      question: "PLATFORM How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "PLATFORM",
      question: "PLATFORM How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "PLATFORM",
      question: "PLATFORM How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "PLATFORM",
      question: "PLATFORM How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "PLATFORM",
      question: "PLATFORM How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "DEPOSIT",
      question: "DEPOSIT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "DEPOSIT",
      question: "DEPOSIT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "DEPOSIT",
      question: "DEPOSIT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "DEPOSIT",
      question: "DEPOSIT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
    {
      category: "DEPOSIT",
      question: "DEPOSIT How Secure Is Trading with You ?",
      answer:
        "We take all possible measures to ensure your utmost security. We use the internationally accepted security system SSL (Secure Sockets Layer) that encrypts all credit card payments over the web. This system is automatic, and you will receive instant notification if your browser does not support it.",
    },
  ];
  const faqCategory = [
    "OPEN ACCOUNT",
    "SUPPORT",
    "PLATFORM",
    "TRADING",
    "DEPOSIT",
  ];
  const [selectedCategory, setCategory] = useState(faqCategory[0]);
  function categorySelector(item) {
    setCategory(item);
  }

  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-center p-4">
        PRODUCTS FOREX
      </div>
      <ComponentWrapper>
        <div className="w-full flex flex-row justify-start items-start gap-4 py-8">
          <div className="w-4/12  flex flex-col justify-start items-center gap-4">
            {faqCategory.map((item, index) => {
              return (
                <FaqCategory
                  key={index}
                  categoryName={item}
                  categorySelector={() => categorySelector(item)}
                />
              );
            })}
          </div>
          <div className="w-8/12 flex flex-col justify-start items-start gap-4">
            {faqs
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => (
                <FaqQuestions
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default FaqBody;
