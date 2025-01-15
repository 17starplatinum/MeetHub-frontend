import * as React from "react";
import { Header } from "../components/common/Header";
import SearchBar from "../components/event/SearchBar";
import Filter from "../components/filter/Filter";
import PaginationButton from "../components/buttons/PaginationButton";
import EventCard from "../components/event/EventCard";
import "../index.css";
import PropTypes from "prop-types";

import { Footer } from "../components/common/Footer";
import { useNavigate } from "react-router";

function EventPage({ type = "Мероприятия" }) {
  const navigate = useNavigate();
  return (
    <div className="page relative flex-col w-full min-h-[1024px] max-md:max-w-full">
      <img
        loading="lazy"
        src="/assets/backgrounds/dark-blue-background.jpg"
        alt=""
        className="object-cover absolute -z-10 inset-0 size-full opacity-20"
      />
      <Header account={true} logged={true} />
      <div className="title sans-pro float-right font-bold text-6xl mr-20 text-white sans-pro pt-9">
        <p>{type}</p>
      </div>
      <div className="content flex mt-24">
        <div className="sans-pro clear-both items-center mt-10 ml-28 min-h-full min-w-[320px]">
          <SearchBar />
          <Filter />
          {(type === "Мероприятия" || type === "Мои мероприятия") && (
            <button
              onClick={() => navigate("/events/event/add")}
              className="flex justify-center items-center gap-2.5 self-start mt-5 text-xl w-full font-bold leading-none text-center text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[58px] max-md:px-5 max-md:mt-5"
            >
              <img
                loading="lazy"
                src="/assets/icons/svg/event-yellow.svg"
                alt="event"
                className="w-8"
              />
              Создать
            </button>
          )}
        </div>
        <div className="event-control my-8 mx-20 w-[1200px] justify-center items-center">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <div className="buttons p-5 mt-7 rounded-3xl flex max-w-[420px] mx-auto justify-center bg-neutral-900">
            <PaginationButton buttonType="prev" />
            <PaginationButton buttonType="next" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

EventPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default EventPage;
