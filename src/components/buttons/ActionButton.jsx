import * as React from "react";
import PropTypes from "prop-types";

export function ActionButton({ scrollTo, text = "Дальше" }) {
  return (
    <button
      className="top-[22rem] gap-3 self-start px-20 py-4 text-xl w-100 font-bold leading-none text-center text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] max-md:px-5 max-md:mt-5"
      onClick={() =>
        document
          .getElementById(scrollTo)
          ?.scrollIntoView({ behavior: "smooth", block: "end" })
      }
      tabIndex={0}
      aria-label="Начать работу с платформой"
    >
      <span className="flex items-center">
        <img
          src="/assets/icons/svg/arrow-yellow.svg"
          alt={text}
          className="w-7"
        />
        <p>{text}</p>
      </span>
    </button>
  );
}

ActionButton.propTypes = {
  scrollTo: PropTypes.string,
  text: PropTypes.string.isRequired,
};
