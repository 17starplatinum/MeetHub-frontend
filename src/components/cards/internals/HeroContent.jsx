import PropTypes from "prop-types";

function HeroContent({ desc, position }) {
  return (
    <div
      className={`self-end text-xl leading-6 ${position === "right" ? "text-left" : "text-right"} text-white`}
    >
      <p className="content">{desc}</p>
    </div>
  );
}

HeroContent.propTypes = {
  desc: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default HeroContent;
