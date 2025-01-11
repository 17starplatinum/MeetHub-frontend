import * as React from "react";
import { ReadyButton } from "../buttons/ReadyButton";
import "./internals/cards.css";

export function EventEnd() {
  return (
    <section
      id="end"
      className="flex relative flex-col justify-center items-center px-16 py-16 w-full min-h-[940px] max-md:px-5 max-md:py-24 max-md:max-w-full"
    >
      <div className="flex relative flex-col pt-3.5 pb-12 mt-30 w-full text-center bg-neutral-950 max-w-[1170px] rounded-[35px] max-md:mt-10 max-md:max-w-full border border-yellow-400">
        <h1 className="caption text-6xl font-semibold leading-none text-white max-md:max-w-full max-md:text-4xl">
          Вы готовы?
        </h1>
        <img
          loading="lazy"
          src="/assets/images/event-image.jpg"
          alt="Ready section"
          className="object-cover mt-3 w-full aspect-[3.34] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full"
        />
        <p className="content self-center mt-6 text-xl leading-none text-white max-md:max-w-full">
          Теперь вы можете чувствовать себя как полноценный участник или
          грамотный организатор!
        </p>
        <ReadyButton />
      </div>
    </section>
  );
}
