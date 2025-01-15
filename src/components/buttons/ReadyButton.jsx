import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useNavigate } from "react-router";

export function ReadyButton({ path = "/login" }) {
  const navigate = useNavigate();

  const NavigationClasses = clsx({
    "Вперёд!": path === "/login",
    "Мои мероприятия": path === "/events/:my",
    История: path === "/events/:my/history",
    Далее:
      path === "/events/event/add/location" ||
      path === "/events/event/add/food",
  });
  const IconClasses = clsx({
    "arrow-yellow.svg":
      path === "/login" ||
      path === "/events/event/add/location" ||
      path === "/events/event/add/food",
    "Event-Management.svg": path === "/events/:my",
    "events.svg": path === "/events/:my/history",
  });
  const SizeClasses = clsx({
    "w-7 transform -rotate-90":
      path === "/login" ||
      path === "/events/event/add/location" ||
      path === "/events/event/add/food",
    "w-12": path === "/events/:my",
    "w-9": path === "/events/:my/history",
  });
  return (
    <button
      className="flex items-center justify-center gap-2.5 self-center py-3 my-5 max-w-full text-xl font-bold leading-none text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] w-[300px] max-md:px-5"
      onClick={() => navigate(path)}
      tabIndex={0}
      aria-label="Proceed forward"
    >
      {NavigationClasses}
      {(path === "/login" ||
        path === "/events/event/add/location" ||
        path === "/events/event/add/food") && (
        <img
          loading="lazy"
          src={`/assets/icons/svg/${IconClasses}`}
          alt="My Events"
          className={`${SizeClasses}`}
        />
      )}
    </button>
  );
}

ReadyButton.propTypes = {
  path: PropTypes.string.isRequired,
};
