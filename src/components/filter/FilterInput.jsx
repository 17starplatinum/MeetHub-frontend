import * as React from "react";
import PropTypes from "prop-types";

function FilterInput({ label, value }) {
  return (
    <div className="flex flex-col w-full mb-6">
      <label className="text-xs leading-none text-white">{label}</label>
      <div className="flex flex-col mt-1 w-full bg-neutral-800">
        <div className="flex items-center py-0.5 pr-0.5 pl-2 w-full rounded-md border border-solid border-[color:var(--,#FFF)] min-h-[28px]">
          <div className="flex-1 shrink gap-0.5 self-stretch my-auto text-sm leading-none whitespace-nowrap text-[color:var(--,#FFF)] text-ellipsis">
            {value}
          </div>
          <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[24px]">
            <div className="flex gap-2.5 justify-center items-center self-stretch p-1 my-auto w-6 min-h-[24px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/889eb349157947aaa492252e943a294a/b5d2ed9a0f81f16d5cf9bd761cf1a8400a1adfd18da7bf785b77ccb4919c687e?apiKey=889eb349157947aaa492252e943a294a&"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-square"
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center self-stretch p-1 my-auto w-6 min-h-[24px]">
              <img
                loading="lazy"
                src="/assets/icons/svg/arrow.svg"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-square"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
export default FilterInput;
