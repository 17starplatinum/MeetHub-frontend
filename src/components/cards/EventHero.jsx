import HeroContent from "./internals/HeroContent";
import HeroImage from "./internals/HeroImage";
import HeroCaption from "./internals/HeroCaption";
import { ActionButton } from "../buttons/ActionButton";
import PropTypes from "prop-types";

export function EventHero({
  idName,
  nextTo,
  caption,
  img,
  buttonText,
  imagePosition,
  description,
}) {
  let imageCardPosition = imagePosition === "left" ? "left" : "right";

  return (
    <section
      id={idName}
      className="flex relative flex-col justify-center items-center px-16 py-5 w-full min-h-[830px] max-md:px-5 max-md:py-5 max-md:max-w-full"
    >
      <div
        className={`relative ${imageCardPosition === "left" ? "pr-9" : "pl-9"} max-w-full bg-neutral-950 rounded-[35px] w-[1170px] max-md:pr-5 border-2 border-yellow-400`}
      >
        <div className="justify-evenly max-md:flex-col">
          <HeroImage link={img} position={imageCardPosition} />
          <div
            className={`flex flex-col ${imageCardPosition === "left" ? "ml-20" : "mr-20"} w-6/12 max-md:w-full`}
          >
            <div className="flex relative flex-col mt-24 max-md:mt-10 max-md:max-w-full">
              <HeroCaption text={caption} position={imageCardPosition} />
              <div
                className={`flex flex-col ${imageCardPosition === "left" ? "pl-14" : "pr-14"} mt-12 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full`}
              >
                <HeroContent desc={description} position={imageCardPosition} />
                <div className="flex absolute justify-center w-full -bottom-48">
                  <ActionButton scrollTo={nextTo} text={buttonText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

EventHero.propTypes = {
  idName: PropTypes.string,
  nextTo: PropTypes.string,
  caption: PropTypes.string,
  img: PropTypes.string,
  buttonText: PropTypes.string,
  imagePosition: PropTypes.string,
  description: PropTypes.string,
};
