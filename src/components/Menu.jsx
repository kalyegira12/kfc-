import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu4.jpg";
import menu3 from "../assets/img/image3.jpg";
import {medu_special} from '../data/data'
const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Bang bang Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
      {
        medu_special.map((menu)=><DishesCard key={menu.title} img={menu.img} title={menu.title} price={menu.price} />)
      }
      </div>
    </div>
  );
};

export default Menu;
