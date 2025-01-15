import PropTypes from "prop-types";
import "./internals/cards.css";

export default function FAQItem({ question, answer, iconSrc }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-2 text-3xl font-bold text-white">
        <img
          loading="lazy"
          src={iconSrc}
          className="object-contain shrink-0 my-auto aspect-square w-[29px]"
          alt=""
        />
        <div className="content flex-auto max-md:max-w-full">{question}</div>
      </div>
      <div className="flex items-center gap-3 mt-2 text-xl text-neutral-400">
        <img
          loading="lazy"
          src="/assets/icons/svg/arrow-gray.svg"
          className="object-contain -ml-7 mt-1.5 shrink-0 self-start shadow-sm aspect-square w-[19px] transform -rotate-90"
          alt=""
        />
        <div className="grow w-fit max-md:max-w-full">{answer}</div>
      </div>
    </div>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  iconSrc: PropTypes.string,
};
