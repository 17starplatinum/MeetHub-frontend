import * as React from "react";
import PropTypes from "prop-types";
import "./cards.css";

function HeroCaption({ text = "Мероприятия на кончиках пальца", position }) {
  return (
    <div
      className={`text-5xl font-semibold ${position === "right" ? "text-left" : "text-right"} text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]`}
    >
      <p className="caption">{text}</p>
    </div>
  );
}

HeroCaption.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default HeroCaption;
