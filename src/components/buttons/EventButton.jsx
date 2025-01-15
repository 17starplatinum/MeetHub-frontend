import * as React from "react";
import "../common/common.css";

export function EventButton() {
  return (
    <button
      className="flex gap-2.5 relative font-bold float-right justify-center items-center py-2.5 pr-3 pl-3 my-auto text-s leading-none text-center text-purple-500 whitespace-nowrap bg-yellow-300 rounded-3xl border-2 border-purple-500 border-solid min-h-[45px]"
      tabIndex="0"
      aria-label="Register for event"
    >
      <img
        loading="lazy"
        src="/assets/icons/svg/ticket.svg"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
      />
      <div className="self-stretch my-auto">Зарегистрироваться</div>
    </button>
  );
}
