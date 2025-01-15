import * as React from "react";
import ReviewCard from "../components/cards/ReviewCard";
import EventCard from "../components/event/EventCard";
import { CommentButton } from "../components/buttons/CommentButton";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import ReactStars from "react-rating-stars-component";

export function ReviewPage() {
  return (
    <div className="review-page h-full relative items-center">
      <Header account={true} logged={true} />
      <div className="flex flex-col my-5 items-center justify-center w-full">
        <EventCard />
        <div className="review-field flex gap-x-10 my-5">
          <textarea
            className="w-[40vw] p-2 rounded-3xl border-4 border-yellow-300"
            placeholder="Оставить свой отзыв"
          />
          <div className="flex flex-col justify-end">
            <ReactStars
              classNames="justify-end"
              count={5}
              size={32}
              emptyIcon={<i></i>}
              fullIcon={<i></i>}
              activeColor="#FFF13C"
            />
            <CommentButton />
          </div>
        </div>
        <div className="reviews bg-black mx-10 rounded-2xl my-5 h-[50vh] overflow-y-hidden">
          <div className="overflow-y-scroll h-[50vh]">
            <ReviewCard stars={5} />
            <ReviewCard stars={1} />
            <ReviewCard stars={1} />
            <ReviewCard stars={1} />
            <ReviewCard stars={1} />
            <ReviewCard stars={1} />
            <ReviewCard stars={1} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
