import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ReadyButton } from "../components/buttons/ReadyButton";
import PropTypes from "prop-types";
import * as React from "react";
import { useNavigate } from "react-router";

const EventTypes = {
  CONFERENCE: "Конференция",
  SEMINAR: "Семинар",
  WORKSHOP: "Мастерская",
  MEETUP: "Митап",
  CORPORATE: "Корпоратив",
  PARTY: "Вечеринка",
  CONCERT: "Концерт",
  SHOW: "Шоу",
  OPENING: "Открытие",
  OTHER: "Другой",
};
// Потом украшу календарь ахах
export function ControlPage({ action = "add" }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0B0B0B] relative">
      <div className="flex flex-col bg-white max-md:max-w-full z-10">
        <Header account={true} logged={true} />
      </div>
      <img
        className="object-cover absolute w-full max-h-screen opacity-50 -z-0"
        src="/assets/backgrounds/add-edit.png"
        alt=""
        loading="lazy"
      />
      <div className="relative flex justify-center w-full">
        <div className="relative flex-col">
          <div className="flex-col gap-y-10">
            <button
              className="flex items-center text-xl text-white hover:text-yellow-300 underline pt-10 pb-5 px-32 ml-8"
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
            <div className="flex flex-col text-5xl w-full font-bold text-white pt-5 pb-10 px-40">
              {action === "add" ? "Создание" : "Редактирование"}
              <br />
              мероприятия
            </div>
          </div>

          <div className="flex w-full px-40">
            <img
              loading="lazy"
              src="/assets/images/placeholder.jpg"
              alt="event"
              className="relative w-[30vw] h-[70vh] rounded-3xl object-cover border-2 border-indigo-600"
            />
          </div>
        </div>
        <div className="caption flex flex-col gap-y-5 float-right text-2xl p-10">
          <input
            className="flex-auto pl-5 shrink rounded-2xl gap-2.5 w-[32vw] h-[6vh]"
            type="text"
            placeholder="Название"
            /*value={}*/
            /*required={true}*/
          />
          <input
            className="flex-auto pl-5 shrink rounded-2xl gap-2.5 w-[32vw] h-[6vh] justify-normal"
            type="text"
            placeholder="Описание"
            /*value={}*/
          />
          <Calendar locale={"ru-RU"} className="rounded-3xl w-[32vw] mx-auto" />
          <input
            className="flex-auto pl-5 shrink rounded-3xl gap-2.5 w-[32vw] h-[6vh] justify-normal"
            type="time"
            placeholder="Описание"
            min="00:00"
            max="23:59"
            step="60"
            /*value={}*/
          />
          <select className="flex-auto pl-5 shrink rounded-3xl gap-2.5 w-[32vw] h-[6vh] justify-normal">
            <option value="" disabled defaultValue="">
              Выберите тип мероприятия
            </option>
            {Object.entries(EventTypes).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
          <ReadyButton path={`/events/event/${action}/location`} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

ControlPage.propTypes = {
  action: PropTypes.oneOf(["add", "edit"]).isRequired,
};
