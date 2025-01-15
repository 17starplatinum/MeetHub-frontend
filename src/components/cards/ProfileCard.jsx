import * as React from "react";
import { useNavigate } from "react-router";

export function ProfileCard() {
  const navigate = useNavigate();

  return (
    <div className="profile-card flex items-center justify-between p-10 my-10 bg-purple-500 border-4 border-yellow-300 rounded-3xl">
      <div className="user flex items-center gap-x-10">
        <img
          className="pfp rounded-full w-[236px]"
          src="/assets/images/zxcursed.jpg"
          alt=""
        />
        <div className="links">
          <p className="username text-white text-4xl font-black">zxcursed</p>
          <br />
          <p className="caption more text-white text-xl font-semibold">
            Больше об организаторе
          </p>
        </div>
      </div>
      <button
        className="flex items-center justify-center gap-2.5 self-center py-3 my-5 max-w-full text-xl font-bold leading-none text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] w-[300px] max-md:px-5"
        onClick={() => navigate("/accounts/{id}")}
      >
        <img
          loading="lazy"
          src="/assets/icons/svg/account-yellow.svg"
          alt="account"
          className="w-9"
        />
        Смотреть профиль
      </button>
    </div>
  );
}
