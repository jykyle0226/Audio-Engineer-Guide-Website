import React from "react";
import PictureAnniversary from "./PictureAnniversary";
import PictureImg from "./PictureImg";


const WeatherForecast = (props) => {
  console.log("this is props", props);

  return (
    <div className="Picture">
      <PictureImg img={props.img} />
      <PictureAnniversary Anniversary={props.Anniversary}/>
    </div>
  );
};

export default WeatherForecast;
