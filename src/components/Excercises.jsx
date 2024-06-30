import React from "react";
import Excercise from "./Excercise";
import Im1 from "../assets/im1.png";
import Im2 from "../assets/im2.png";
import Im3 from "../assets/im3.png";
import Im4 from "../assets/img4.png";
import Im5 from "../assets/img5.png";
import Im6 from "../assets/img6.png";
import Im7 from "../assets/img7.png";
import Im8 from "../assets/img8.png";

const Excercises = () => {
  const images = [
    {
      id: 1,
      name: "Shoulder",
      image: Im1,
    },
    {
      id: 2,
      name: "Elbow",
      image: Im2,
    },
    {
      id: 3,
      name: "Ankle",
      image: Im8,
    },
    {
      id: 4,
      name: "Hip",
      image: Im4,
    },
    {
      id: 5,
      name: "Knees",
      image: Im5,
    },
    {
      id: 6,
      name: "Wrist",
      image: Im6,
    },
    {
      id: 7,
      name: "Hand",
      image: Im7,
    },
    {
      id: 8,
      name: "Toes",
      image: Im8,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-5 h-auto w-full items-center justify-center p-10 pt-3">
      {images.map((image, index) => (
        <Excercise
          key={index}
          excercise_name={image.name}
          image={image.image}
        />
      ))}
    </div>
  );
};

export default Excercises;
