
import img1 from "../assets/img/image2.jpg";
import img2 from "../assets/img/img9.jpg";
import img3 from "../assets/img/img8.webp";
import img4 from "../assets/img/imagee.webp";
import img5 from "../assets/img/image6.jpeg";
import img6 from "../assets/img/pic1.jpeg";
import DishesCard from "../layouts/DishesCard";
import {data} from "../data/data";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        special menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
      {
        data.map((dish)=><DishesCard key={dish.title} img={dish.img} title={dish.title} price={dish.price} />)
      }
        
        
      </div>
    </div>
  );
};

export default Dishes;
