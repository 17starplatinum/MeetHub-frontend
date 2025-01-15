import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router";
import { ReadyButton } from "../components/buttons/ReadyButton";
import PropTypes from "prop-types";

export function LocationPage({ action = "add" }) {
  const [countryList, setCountryList] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [countryCode, setCountryCode] = useState("");
  const [regionCode, setRegionCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (countryList.length === 0) {
      getCountryList();
    }
  }, [countryList.length, countryList]);

  useEffect(() => {
    if (countryCode) {
      getRegionList();
      getCityList();
    }
  }, [countryCode]);

  useEffect(() => {
    if (regionCode || countryCode) {
      getCityList();
    }
  }, [countryCode, regionCode]);

  const getCountryList = async () => {
    try {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${process.env.REACT_APP_OXILOR_API_KEY}`,
        "Accept-Language": "ru",
      };
      const geoResponse = await axios.get(
        "https://data-api.oxilor.com/rest/countries",
      );
      setCountryList(geoResponse.data || []);
    } catch (error) {
      console.error(error);
    }
  };
  const getRegionList = async () => {
    try {
      if (!countryCode) return;
      const geoResponse = await axios.get(
        "https://data-api.oxilor.com/rest/regions",
        {
          params: {
            first: 100,
            type: "division1",
            countryCode: countryCode,
          },
        },
      );
      const regions = geoResponse.data.edges.map((item) => item.node);
      setRegionList(regions);
    } catch (error) {
      console.error(error);
    }
  };
  const getCityList = async () => {
    try {
      if (!countryCode) return;
      const geoResponse = await axios.get(
        "https://data-api.oxilor.com/rest/regions",
        {
          params: {
            first: 100,
            type: "city",
            countryCode: countryCode,
            division1Code: regionCode,
          },
        },
      );
      const cities = geoResponse.data.edges.map((item) => item.node);
      setCityList(cities);
    } catch (error) {
      console.error(error);
    }
  };

  // const googleMapResponse = axios.get();

  function handleObjectSelect(value, list, isCity) {
    const focusedObject = list.find((obj) => obj.name === value);
    if (focusedObject === undefined) return;
    isCity
      ? setRegionCode(focusedObject.division1Code)
      : setCountryCode(focusedObject.countryCode);
  }

  return (
    <div className="bg-[#0B0B0B] relative">
      <div className="flex flex-col bg-white max-md:max-w-full z-10">
        <Header account={true} logged={true} />
      </div>
      <img
        className="object-cover absolute inset-0 w-full h-full opacity-20"
        src="/assets/backgrounds/map-background.jpg"
        alt=""
        loading="lazy"
      />
      <div className="flex items-start justify-between my-10">
        <button
          className="flex items-center text-xl text-white hover:text-yellow-300 underline z-10 gap-0.5 px-10 py-5 ml-8"
          onClick={() => navigate(-1)}
        >
          <img
            className="w-5 transform rotate-90 mt-0.5 z-10"
            src="/assets/icons/svg/arrow.svg"
            alt="back"
            loading="lazy"
          />
          <p className="z-10">Вернуться</p>
        </button>
        <p className="text-5xl text-white px-20 py-5 font-black float-right z-10">
          Выбор места
        </p>
      </div>
      <div className="flex px-20 gap-x-10 z-10">
        <div className="map w-1/2 z-10">
          <img
            className="object-contain"
            src="/assets/backgrounds/auth-BG.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="caption flex flex-col gap-y-10 z-10 rounded-3xl text-xl font-semibold w-1/2 float-right">
          <select
            className="country px-5 rounded-3xl h-[8vh] cursor-pointer"
            onChange={(e) =>
              handleObjectSelect(e.target.value, countryList, false)
            }
            aria-label="Выберите страну"
          >
            <option value="" disabled defaultValue="">
              Выберите страну
            </option>
            {countryList.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <select
            className="region pl-5 rounded-3xl h-[8vh] cursor-pointer"
            onChange={(e) =>
              handleObjectSelect(e.target.value, regionList, true)
            }
            aria-label="Выберите регион"
          >
            <option value="" disabled defaultValue="">
              Выберите регион
            </option>
            {regionList.map((region) => (
              <option key={region.id} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
          <select
            className="city pl-5 rounded-3xl h-[8vh] cursor-pointer"
            aria-label="Выберите город"
          >
            <option value="" disabled>
              Выберите город
            </option>
            {cityList.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <ReadyButton path={`/events/event/${action}/food`} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

LocationPage.propTypes = {
  action: PropTypes.oneOf(["add", "edit"]).isRequired,
};
