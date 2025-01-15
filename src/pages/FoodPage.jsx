import { Header } from "../components/common/Header";
import PropTypes from "prop-types";
import { Footer } from "../components/common/Footer";
import * as React from "react";
import { useNavigate } from "react-router";
import SaveButton from "../components/buttons/SaveButton";

export function FoodPage({ action = "add" }) {
  const navigate = useNavigate();
  return (
    <div className="content relative bg-[#0B0B0B]">
      <div className="flex flex-col bg-white z-10">
        <Header account={true} logged={true} />
      </div>
      <img
        className="object-cover absolute inset-0 w-full h-full opacity-20"
        src="/assets/backgrounds/food-background.png"
        alt=""
        loading="lazy"
      />
      <div className="flex relative justify-between w-full z-10 my-5">
        <button
          className="flex items-center text-xl text-white hover:text-yellow-300 underline gap-0.5 p-10 ml-8"
          onClick={() => navigate(-1)}
        >
          <img
            className="w-5 transform rotate-90 mt-0.5"
            src="/assets/icons/svg/arrow.svg"
            alt="back"
            loading="lazy"
          />
          Вернуться
        </button>
        <div className="flex relative content items-center float-right justify-between">
          <p className="text-5xl text-white px-20 py-10 font-black float-right">
            {action === "add" ? "Добавление" : "Редактирование"} еды
          </p>
        </div>
      </div>
      <div className="relative flex justify-evenly px-20 py-5">
        <div className="flex w-1/2 justify-center">
          <img
            loading="lazy"
            src="/assets/images/event-image.jpg"
            alt="event"
            className="relative w-[30vw] h-[70vh] rounded-3xl object-cover border-2 border-indigo-600"
          />
        </div>
        <div className="flex flex-col w-1/2 justify-center mx-auto items-center">
          <input
            className="block pl-5 my-5 rounded-2xl gap-2.5 w-[32vw] h-[6vh]"
            type="text"
            placeholder="Название"
          />
          <input
            className="block pl-5 my-5 rounded-2xl gap-2.5 w-[32vw] h-[6vh]"
            type="text"
            placeholder="Описание"
          />
          <input
            className="block pl-5 mt-5 mb-10 rounded-2xl gap-2.5 w-[32vw] h-[6vh]"
            type="text"
            placeholder="Категория"
          />
          <SaveButton />
        </div>
      </div>

      <Footer />
    </div>
  );
}

FoodPage.propTypes = {
  action: PropTypes.oneOf(["add", "edit"]).isRequired,
};
