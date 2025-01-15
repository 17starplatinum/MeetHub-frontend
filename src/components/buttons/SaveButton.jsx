import * as React from "react";
import { useNavigate } from "react-router";

export default function SaveButton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex self-center items-center top-[22rem] gap-3 px-20 py-4 text-xl w-100 font-bold leading-none text-center text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] max-md:px-5 max-md:mt-5"
      onClick={() => navigate("/events")}
    >
      <img
        className="w-7"
        src="/assets/icons/svg/events-yellow.svg"
        alt="save"
        loading="lazy"
      />
      Сохранить
    </button>
  );
}
