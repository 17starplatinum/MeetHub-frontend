import { Header } from "../components/common/Header";
import { useNavigate } from "react-router";
import { Footer } from "../components/common/Footer";
import { EventButton } from "../components/buttons/EventButton";
import { ActionButton } from "../components/buttons/ActionButton";
import { ReminderButton } from "../components/buttons/ReminderButton";
import EventInfo from "../components/event/EventInfo";
import "../components/cards/internals/cards.css";
import { ProfileCard } from "../components/cards/ProfileCard";
import * as React from "react";

export function DetailsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B0B0B]">
      <img
        className="object-cover opacity-20 absolute inset-0 size-full -z-20"
        src="/assets/backgrounds/background-details.png"
        alt=""
        loading="lazy"
      />
      <Header account={true} logged={true} />
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
      <div className="details w-full px-10">
        <div className="flex justify-evenly">
          <div className="description w-2/3 pr-16">
            <div className="event-header flex justify-between">
              <div className="event-title text-white text-7xl font-black">
                Z2*
              </div>
              <EventButton />
            </div>
            <div className="flex items-center text-xl text-white underline gap-0.5 pt-16">
              <img
                className="w-5 transform -rotate-90 mt-0.5"
                src="/assets/icons/svg/arrow.svg"
                alt="back"
                loading="lazy"
              />
              Прошедший концерт
            </div>
            <div className="relative flex justify-between mt-6">
              <ActionButton text={"Варшав"} />
              <ActionButton text={"Музыка"} />
              <ReminderButton />
            </div>
            <div className="content text-white whitespace-pre-line">
              <p className="text-white text-7xl font-black my-5">
                Описание мероприятия
              </p>
              “Чёвы гады)” Возвращение широко известного артиста zxcursed после
              2022. Он готов разнести один из самых известных клубов в Польше. В
              2024 году знаменитый артист zxcursed возвращается на сцену после
              годичного перерыва с грандиозным выступлением в одном из самых
              известных клубов в Польше. Этот заведение, известное своей
              отличной акустикой и атмосферой, станет идеальной площадкой для
              демонстрации новых и полюбившихся старых треков артиста. Зрителей
              ожидает не только музыкальное разнообразие, но и впечатляющее
              визуальное сопровождение – от сценических установок до
              профессионального освещения и видео. Zxcursed известен своим
              непосредственным взаимодействием с аудиторией, что делает его шоу
              исключительно живым и эмоционально насыщенным. Ожидается, что его
              возвращение привлечет множество поклонников, включая международную
              аудиторию. Музыкальное событие станет не только концертом, но и
              праздником единения через искусство, подчеркивая универсальное
              влияние музыки на объединение людей.
            </div>
          </div>
          <div className="relative picture rounded-3xl border-4 border-yellow-300 w-[512px] h-[512px]">
            <img
              className="rounded-[20px] object-cover w-[504px] h-[504px]"
              src="/assets/images/event-example.jpg"
              alt="Event"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative block m-8">
          <EventInfo />
          <ProfileCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
