import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="bg-opacity-50 bg-center min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/Untitleddesign.png')] bg-cover bg-no-repeat">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-[black] font-semibold text-5xl">
          A symphony of flavours, crafted with love and care.
        </h1>
        <p className=" text-[black]">
          To create unforgettable dining experiences that ignite the senses and nourish the soul.
        </p>
        <div className=" lg:pl-44">
          <Link to="dishes">
            <Button title="Menu Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
