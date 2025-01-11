import * as React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/common/Header";
import EventHero from "../components/cards/EventHero";
import { EventEnd } from "../components/cards/EventEnd";
import { Footer } from "../components/common/Footer";
import { descriptions } from "../components/cards/internals/descriptions/Descriptions";

export function HelloPage() {
  const [desc, setDesc] = useState(descriptions);

  useEffect(() => {
    setDesc(desc);
  }, [desc]);

  return (
    <div className="flex overflow-clip flex-col bg-[#0B0B0B]">
      <div className="flex relative flex-col w-full min-h-[1024px] max-md:max-w-full">
        <img
          loading="lazy"
          src="/assets/backgrounds/dark-blue-background.jpg"
          alt=""
          className="object-cover absolute inset-0 size-full opacity-20"
        />
        <div className="flex sticky top-0 flex-col text-4xl bg-white max-md:max-w-full z-10">
          <Header account={true} />
        </div>
        {desc.map((description, index) => (
          <EventHero
            key={index}
            idName={index.toString()}
            nextTo={index === 3 ? "end" : (index + 1).toString()}
            caption={description.caption}
            img={description.img}
            buttonText={description.buttonText}
            imagePosition={index % 2 === 0 ? "left" : "right"}
            description={description.description}
          />
        ))}
        <EventEnd />
        <Footer />
      </div>
    </div>
  );
}
