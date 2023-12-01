import React from "react";
import img from "../assets/img/download.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Reasons why we are the best
        </h1>
        <p>
         Embark on culinary adventure at KFC, where passion meets plate. we invite you to indulge in a symphony of flavors, crafted with fresh, locally sourced ingredients and touch of culinary magic.
        </p>
        <p>
        step into our inviting ambiance and let the aromas of our tantalizing chicken transport you to a world of pure gastronomy. Its a warm and inviting as a hosipitality, crating an atmosphere where you can savor every moment.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
