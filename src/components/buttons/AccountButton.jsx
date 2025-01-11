import * as React from "react";
import PropTypes from "prop-types";

function AccountButton({ text = "Войти" }) {
  return (
    <button
      className="gap-2.5 self-start w-full px-20 py-5 mt-16 text-xl font-bold leading-none text-center text-yellow-300 hover:accent-[#6055FF] whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] max-md:px-5 max-md:mt-10"
      /*onClick={(text === "Войти") ? (() => login()) : (() => register())}*/
      tabIndex={0}
      aria-label="Начать работу с платформой"
    >
      <p className="hover:font-bold">{text}</p>
    </button>
  );
}

AccountButton.propTypes = {
  text: PropTypes.oneOf(["Войти", "Зарегистрироваться"]).isRequired,
};

export default AccountButton;
