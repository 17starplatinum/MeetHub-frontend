import * as React from "react";
import PropTypes from "prop-types";
import { useJsApiLoader } from "@react-google-maps/api";
import ShareButton from "../buttons/ShareButton";
import MapButton from "../buttons/MapButton";
import "../cards/internals/cards.css";

function EventInfo() {
  /* eslint-disable no-unused-vars */

  const isLoaded = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  return (
    <div className="caption event-info flex items-center h-auto w-full border-4 border-yellow-300 bg-purple-500 rounded-3xl">
      <div className="map w-1/2"></div>

      <div className="flex-col w-1/2 info items-center px-10 py-5 justify-center divide-white divide-y-2">
        <div className="days text-white font-bold underline text-4xl text-center m-4">
          Осталось 5 дней
        </div>
        <div className="address">
          <div className="flex gap-2 m-4 items-center venue text-white font-bold underline text-xl">
            <img
              loading="lazy"
              src="/assets/icons/svg/venue.svg"
              alt="venue"
              className="w-7"
            />
            Progresja
          </div>
          <p className="whitespace-pre-line m-4 text-white font-semibold">
            Fort Wola 22, 01-258, Варшав, Мазовецкое войводство, Польша
          </p>
        </div>
        <div className="share flex w-full items-center justify-evenly">
          <MapButton url={document.location.href} />
          <ShareButton url={document.location.href} />
        </div>
        <div className="more-info">
          <span className="flex items-center">
            <img
              loading="lazy"
              src="/assets/icons/svg/events.svg"
              alt="date"
              className="w-7 h-7"
            />
            <p className="whitespace-pre-line text-xl m-4 text-white font-semibold">
              Суббота, 2 ноября
            </p>
          </span>
          <span className="flex items-center">
            <img
              loading="lazy"
              src="/assets/icons/svg/event.svg"
              alt="date"
              className="w-7 h-7"
            />
            <p className="whitespace-pre-line text-xl m-4 text-white font-semibold">
              00:00
            </p>
          </span>
          <span className="flex items-center">
            <img
              loading="lazy"
              src="/assets/icons/svg/food.svg"
              alt="date"
              className="w-7 h-7"
            />
            <p className="whitespace-pre-line text-xl m-4 text-white font-semibold">
              Нет
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

EventInfo.propTypes = {
  event: PropTypes.shape({}),
};

export default EventInfo;
