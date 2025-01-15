import * as React from "react";
import { useNavigate } from "react-router";

export function RegisterButton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex gap-2.5 justify-center items-center py-2.5 pr-3 pl-3 my-auto text-xs font-bold leading-none text-center text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[45px]"
      tabIndex="0"
      aria-label="Register for event"
      onClick={() => navigate("/events/event/details")}
    >
      <img
        loading="lazy"
        src="/assets/icons/svg/events-yellow.svg"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
      />
      <div className="self-stretch my-auto">Зарегистрироваться</div>
    </button>
  );
}
