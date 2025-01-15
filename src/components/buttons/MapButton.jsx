import PropTypes from "prop-types";

export default function MapButton({ url = "#" }) {
  return (
    <button
      className="flex gap-2.5 relative font-bold float-right justify-center items-center py-3 px-3 my-auto text-xl leading-none text-center text-yellow-300 whitespace-nowrap bg-purple-500 rounded-3xl border-2 border-yellow-300 border-solid min-h-[45px]"
      onClick={() => window.open(url)}
    >
      <img
        loading="lazy"
        src="/assets/icons/svg/map.svg"
        alt="Map icon"
        className="w-7"
      />
      Смотреть на карте
    </button>
  );
}

MapButton.propTypes = {
  url: PropTypes.string,
};
