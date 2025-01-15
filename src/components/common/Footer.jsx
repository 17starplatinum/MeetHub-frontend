import * as React from "react";

export function Footer() {
  return (
    <div className="flex relative flex-wrap gap-5 justify-between px-20 py-14 mt-12 w-full text-2xl leading-none bg-black text-white min-h-[136px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="relative text-xl inline-block ml-10 float-left w-fit">
        © Copyright 2024. MeetHub. All rights reserved.
      </div>
      <div className="relative text-xl inline-block mr-10 float-right w-fit">
        customercare@meethub.com
      </div>
    </div>
  );
}
