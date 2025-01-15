import React from "react";
import { Header } from "../components/common/Header";
import { UserProfile } from "../components/account/UserProfile";
import { ReadyButton } from "../components/buttons/ReadyButton";
import { Footer } from "../components/common/Footer";

export function AccountPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col items-center w-full max-md:max-w-full bg-[#0B0B0B]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/889eb349157947aaa492252e943a294a/860508edd625b717e45334ffc412963036d18dd4a390f2fc127a36ee13ec3434?apiKey=889eb349157947aaa492252e943a294a&"
          className="object-cover absolute inset-0 size-full opacity-10"
          alt="background"
        />
        <Header />
        <div className="relative self-center my-12 text-4xl font-black leading-none text-center text-white max-md:mt-10">
          Личный кабинет
        </div>
        <div className="flex relative items-center gap-5 max-md:flex-col">
          <UserProfile />
          <div className="flex relative m-28 mt-16 justify-center w-full max-w-[1057px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-10 max-md:flex-col">
              <ReadyButton path={"/events/:my"} />
              <ReadyButton path={"/events/:my/history"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
