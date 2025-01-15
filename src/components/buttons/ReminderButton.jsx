import * as React from "react";

export function ReminderButton() {
  return (
    <button
      className="flex items-center justify-center gap-2.5 self-center py-4 max-w-full text-xl font-bold leading-none text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] w-[300px] max-md:px-5"
      // onClick={() => }
      tabIndex={0}
      aria-label="Proceed forward"
    >
      <img
        loading="lazy"
        src="/assets/icons/svg/notification-yellow.svg"
        alt="My Events"
        className="w-7"
      />
      Ставить уведомление
    </button>
  );
}
