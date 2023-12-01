import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div>{
      props.href ?<Link to={props.href} className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
          {
            props.title
          }
      </Link>:(<button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
        {props.title}
      </button>)
      
    }
    </div>
  );
};

export default Button;
