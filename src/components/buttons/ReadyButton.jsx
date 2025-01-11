import * as React from "react";
import { useNavigate } from "react-router-dom";

export function ReadyButton() {
  const navigate = useNavigate();
  return (
    <button
      className="gap-2.5 self-center px-20 py-5 mt-9 max-w-full text-xl font-bold leading-none text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] w-[236px] max-md:px-5"
      onClick={() => navigate("/login")}
      tabIndex={0}
      aria-label="Proceed forward"
    >
      Вперёд!
    </button>
  );
}
