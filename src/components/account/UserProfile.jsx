import React from "react";
import { useNavigate } from "react-router";

export function UserProfile() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-[33%] max-md:w-full">
      <div className="flex relative justify-center flex-col items-start w-full text-xl font-bold leading-none text-center text-white max-md:mt-10">
        <div className="flex flex-col max-w-full text-2xl font-semibold whitespace-nowrap w-[168px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/889eb349157947aaa492252e943a294a/3a23a90a27068e843bb7084ad72b86c9ce6f2633fb3c93895fe9537473da9ad9?apiKey=889eb349157947aaa492252e943a294a&"
            className="object-contain w-full aspect-[1.08]"
            alt="Profile avatar"
          />
          <div className="self-start mt-10">Raisondetre</div>
          <div className="self-stretch mt-10 text-xl font-medium">
            franzbonaparta@example.com
          </div>
        </div>

        <button className="gap-2.5 self-stretch px-9 py-2.5 mt-14 leading-5 text-yellow-300 bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid shadow-sm min-h-[58px] max-md:px-5 max-md:mt-10">
          Редактировать профиль
        </button>
        <button
          className="flex gap-2.5 justify-center items-center py-4 pr-16 pl-16 mt-12 text-purple-500 whitespace-nowrap bg-yellow-300 rounded-3xl border-2 border-purple-500 border-solid min-h-[58px] max-md:px-5 max-md:mt-10"
          onClick={() => navigate("/")}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/889eb349157947aaa492252e943a294a/71e7d6605c956ac99715d701a088f2bc1fa7cac0a55a30c48be9dedf6086ffa8?apiKey=889eb349157947aaa492252e943a294a&"
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            alt="Logout icon"
          />
          <div className="self-stretch my-auto">Выйти</div>
        </button>
      </div>
    </div>
  );
}
