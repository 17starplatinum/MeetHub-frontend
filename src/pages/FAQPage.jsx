import * as React from "react";
import { Header } from "../components/common/Header";
import FAQItem from "../components/cards/FAQItem";
import { Footer } from "../components/common/Footer";
import { faqData } from "../components/cards/internals/descriptions/FAQData";
import "../components/cards/internals/cards.css";

export function FAQPage() {
  return (
    <div className="flex overflow-hidden flex-col">
      <img
        loading="lazy"
        src="/assets/backgrounds/images.jpeg"
        alt=""
        className="object-fill absolute inset-0 size-full opacity-10 -z-30"
      />
      <Header />
      <div className="flex flex-col w-full font-bold text-white max-md:max-w-[800px]">
        <div className="content text-5xl text-center mt-10 max-md:max-w-full max-md:text-4xl">
          Ответы на часто задаваемые вопросы
        </div>
        {faqData.map((faq, index) => (
          <React.Fragment key={faq.id}>
            <div className={`mt-8 ml-8 pr-16 pl-16`}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                iconSrc={faq.iconSrc}
              />
            </div>
            {index < faqData.length - 1 && (
              <div className="mt-11 w-full border border-white border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}
