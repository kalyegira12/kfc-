import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/img1.webp";
import img2 from "../assets/img/download.jpg";
import img3 from "../assets/img/images.jpg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        feedback
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Emmak" />
        <ReviewCard img={img2} name="riank" />
        <ReviewCard img={img3} name="VickyoS" />
      </div>
    </div>
  );
};

export default Review;
