export function CommentButton() {
  return (
    <button className="relative flex items-center justify-center bg-purple-500 p-5 w-[15vw] h-[8vh] border-2 border-yellow-300 rounded-3xl gap-2.5 text-yellow-300 font-bold underline">
      <img
        loading="lazy"
        src="/assets/icons/svg/reviews-yellow.svg"
        alt="comment"
        className="w-7"
      />
      Оставить отзыв
    </button>
  );
}
