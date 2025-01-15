import PropTypes from "prop-types";
import { IconLink } from "./IconLink";
import { RegisterButton } from "../buttons/RegisterButton";

// 22.01.2025 13:30
const eventData = {
  title: "Arcadia 2024",
  links: [
    {
      icon: "/assets/icons/svg/arrow-gray.svg",
      text: "Концерт",
      alt: "Concert icon",
    },
    {
      icon: "/assets/icons/svg/location-gray.svg",
      text: "Москва",
      alt: "Location icon",
    },
    {
      icon: "/assets/icons/svg/account-gray.svg",
      text: "plenka",
      alt: "Creator icon",
    },
    {
      icon: "/assets/icons/svg/reviews-gray.svg",
      text: "Отзывы",
      alt: "Review icon",
    },
  ],
};

// Добавить prop чтобы дифференцировать между прошлым и предстоящим мероприятием. Не обращать внимание на наличие отзывов
function EventCard() {
  return (
    <div className="flex flex-wrap border-4 border-indigo-800 my-3 gap-5 justify-between pr-10 w-full rounded-3xl shadow-sm bg-neutral-950 max-md:pr-5 max-w-[1200px] max-md:max-w-full">
      <div className="flex gap-3.5">
        <div className="flex shrink-0 rounded-[20px] bg-zinc-300 h-[99px] w-[156px]" />
        <div className="flex flex-auto my-auto">
          <div className="flex flex-col items-start">
            <div className="self-stretch text-3xl font-bold text-white sans-pro">
              {eventData.title}
            </div>
            <div className="flex z-10 gap-5 justify-between w-full">
              {eventData.links.map((link, index) => (
                <IconLink
                  key={index}
                  icon={link.icon}
                  text={link.text}
                  alt={link.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <RegisterButton />
    </div>
  );
}

EventCard.propTypes = {
  eventData: PropTypes.array.isRequired,
};

export default EventCard;
