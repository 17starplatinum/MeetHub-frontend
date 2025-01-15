import * as React from "react";

function SearchBar() {
  return (
    <form
      className="flex gap-2.5 mb-5 items-center pr-2.5 bg-yellow-300 text-lg text-gray-400 border-4 border-solid shadow-sm border-white border-opacity-40 min-h-[60px] max-w-[315px] rounded-[32px] max-md:mt-10"
      role="search"
    >
      <div className="flex overflow-hidden flex-1 shrink gap-4 items-center px-2 my-auto basis-0 bg-neutral-950 min-h-[60px] min-w-[240px] rounded-[32px] shadow-[4px_4px_6px_rgba(0,0,0,0.25)]">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          type="search"
          id="searchInput"
          className="flex-1 shrink gap-2.5 self-stretch px-2.5 my-auto min-w-[240px] bg-transparent border-none focus:outline-none"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
      <img
        src="/assets/icons/svg/search.svg"
        className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
        alt="search"
        loading="lazy"
        /* onClick={() => }*/
      />
    </form>
  );
}

export default SearchBar;
