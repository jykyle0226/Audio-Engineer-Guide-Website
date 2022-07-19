import React from "react";
import PictureAnniversary from "./PictureAnniversary";
import PictureImg from "./PictureImg";

const WeatherForecast = (props) => {
  console.log("this is props", props);

  return (
    <section className="picture-section">
      <div className="Picture">
        <PictureImg img={props.img} />
        <PictureAnniversary Anniversary={props.Anniversary} />
      </div>
    </section>
  );
};

export default WeatherForecast;
