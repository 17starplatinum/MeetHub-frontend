import * as React from "react";
import PropTypes from "prop-types";
import "../../index.css";

export function IconLink({ icon, text, alt }) {
  return (
    <div className="flex gap-1.5 text-lg whitespace-nowrap text-neutral-400 sans-pro">
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className={`object-contain shrink-0 mt-1 self-start shadow-sm aspect-square w-[21px] ${alt === "Concert icon" ? "transform -rotate-90" : ""}`}
      />
      <div className="underline decoration-auto decoration-solid underline-offset-auto">
        {text}
      </div>
    </div>
  );
}

IconLink.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
};
