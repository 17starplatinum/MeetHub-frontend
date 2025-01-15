import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

function HeroImage({
  link = "/assets/images/event-image.jpg",
  position = "left",
}) {
  const marginClasses = clsx({
    "float-left": position === "left",
    "float-right": position === "right",
  });

  return (
    <div className={`items-center w-6/12 ${marginClasses}`}>
      <img
        loading="lazy"
        src={link}
        alt="Event management illustration"
        className="object-cover grow w-full aspect-[0.79] rounded-[35px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}

HeroImage.propTypes = {
  link: PropTypes.string,
  position: PropTypes.oneOf(["left", "right"]),
};

export default HeroImage;
