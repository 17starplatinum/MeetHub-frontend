import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { SocialMediaCard } from "../cards/SocialMediaCard";

export default function ShareButton({ url = "#" }) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <button
        className="flex items-center justify-center gap-2.5 self-center py-3 px-12 my-5 max-w-full text-xl font-bold leading-none text-purple-500 whitespace-nowrap bg-yellow-300 rounded-3xl border-2 border-purple-700 border-solid min-h-[58px] max-md:px-5"
        onClick={() => setDisplay(!display)}
        tabIndex={0}
        aria-label="Proceed forward"
      >
        <img
          loading="lazy"
          src="/assets/icons/svg/share.svg"
          alt="My Events"
          className="w-7"
        />
        Поделиться
      </button>
      <SocialMediaCard url={url} display={display} />
    </>
  );
}

ShareButton.propTypes = {
  url: PropTypes.string.isRequired,
};
