import PropTypes from "prop-types";
import * as React from "react";
import ReactStars from "react-rating-stars-component";

export default function ReviewCard({ stars = 1 }) {
  return (
    <div className="caption mx-10 w-[78vw] flex items-start justify-between card border-2 border-white">
      <div className="info mx-10 my-5">
        <p className="text-white font-bold text-4xl ">Username</p>
        <p className="text-neutral-500 font-semibold text-xl">21.10.2025</p>
        <p className="text-white mt-5 font-semibold text-xl">Неплохо</p>
      </div>
      <div className="rating float-right mx-10 my-5">
        <ReactStars
          count={5}
          value={stars}
          size={32}
          edit={false}
          emptyIcon={<i></i>}
          fullIcon={<i></i>}
          activeColor="#FFF13C"
        />
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  stars: PropTypes.number.isRequired,
};
