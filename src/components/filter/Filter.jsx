import * as React from "react";
import FilterInput from "./FilterInput";
import ApplyButton from "../buttons/ApplyButton";

const filterInputs = [
  {
    label: "Город",
    value: "Санкт-Петербург",
  },
  {
    label: "Тип мероприятия",
    value: "Концерт",
  },
];

function Filter() {
  return (
    <div className="flex flex-col pb-96 bg-neutral-950 max-w-[335px] rounded-[35px]">
      <div className="flex z-10 flex-col justify-center px-2.5 pt-4 pb-8 w-full bg-[color:var(--,#0B0B0B)] rounded-[30px]">
        <div className="flex flex-col justify-center items-center w-full rounded-3xl shadow-lg">
          <div className="flex gap-2 items-end max-w-full text-lg font-semibold leading-none text-white whitespace-nowrap w-[277px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/889eb349157947aaa492252e943a294a/acdde4dcdcfd83140c5e0150d7165dc96b8da0d9e48825241354fa8c4136159a?apiKey=889eb349157947aaa492252e943a294a&"
              alt=""
              className="object-contain shrink-0 w-6 rounded-md aspect-square"
            />
            <div>Фильтр</div>
          </div>
          <div className="flex flex-col mt-6 max-w-full w-[295px]">
            {filterInputs.map((input, index) => (
              <FilterInput
                key={index}
                label={input.label}
                value={input.value}
              />
            ))}
          </div>
        </div>
      </div>
      <ApplyButton />
    </div>
  );
}

export default FilterContainer;
