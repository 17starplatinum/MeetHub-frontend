import * as React from "react";
import PropTypes from "prop-types";

function ActionButton({ scrollTo, text = "Дальше" }) {
  return (
    <button
      className="absolute top-[22rem] gap-2.5 self-start px-20 py-4 mt-16 ml-[4.5rem] text-xl w-100 font-bold leading-none text-center text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] max-md:px-5 max-md:mt-5"
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
          className="w-8"
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

export default ActionButton;
