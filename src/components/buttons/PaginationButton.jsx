import * as React from "react";
import PropTypes from "prop-types";

function PaginationButton({ buttonType = "prev" }) {
  return (
    <div
      className="flex gap-2.5 cursor-pointer justify-center items-center self-stretch px-11 py-4 m-2 my-auto bg-purple-500 rounded-2xl border-2 border-yellow-300 border-solid min-h-[58px] w-[115px] max-md:px-5"
      /*onClick={}*/
    >
      <img
        loading="lazy"
        src="/assets/icons/svg/arrow-yellow.svg"
        alt=""
        className={`object-contain self-stretch my-auto w-7 shadow-sm aspect-square transform ${buttonType === "prev" ? "rotate-90" : "-rotate-90"}`}
      />
    </div>
  );
}

PaginationButton.propTypes = {
  buttonType: PropTypes.string,
};
export default PaginationButton;
