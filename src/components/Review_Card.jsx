import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review_Card = ({ name, role, review, rating }) => {
  return (
    <div className=' w-100 h-100 bg-green-400/60 rounded-xl border border-black/50 drop-shadow-xl drop-shadow-black p-10 flex flex-col justify-between font-["Inter"]'>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => {
          if (rating >= star) {
            return <FaStar key={star} className="text-yellow-400 text-lg" />;
          }

          if (rating >= star - 0.5) {
            return (
              <FaStarHalfAlt key={star} className="text-yellow-400 text-lg" />
            );
          }

          return <FaRegStar key={star} className="text-gray-300 text-lg" />;
        })}
      </div>
      <p className=" text-justify text-white">"{review}"</p>
      <div className="">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Review_Card;
