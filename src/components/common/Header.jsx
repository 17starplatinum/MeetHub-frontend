import * as React from "react";
import "./common.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function Header({ account = false, logged = false }) {
  let navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start px-16 py-8 w-full border-solid bg-neutral-950 bg-opacity-90 border-[5px] border-indigo-500 border-opacity-40 max-md:px-5 max-md:max-w-full">
      <div
        className="z-10 shadow-sm cursor-pointer"
        onClick={logged ? () => navigate("/events") : () => navigate("/")}
      >
        <span className="meet-1">Meet</span>
        <span className="hub-2">HUB</span>
      </div>
      <div className="z-10 shadow-sm flex items-center mt-auto mb-auto">
        <img
          loading="lazy"
          src="/assets/icons/svg/question.svg"
          alt=""
          className="object-contain shrink-0 w-9 aspect-square mr-4 cursor-pointer"
          onClick={() => navigate("/faq")}
        />
        {account && (
          <img
            loading="lazy"
            src="/assets/icons/svg/account.svg"
            alt=""
            className="object-contain shrink-0 w-9 aspect-square cursor-pointer"
            onClick={() => navigate("/login")}
          />
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  account: PropTypes.bool,
  logged: PropTypes.bool,
};
