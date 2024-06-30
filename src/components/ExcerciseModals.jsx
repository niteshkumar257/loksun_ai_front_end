import React from "react";
import ExcerciseModal from "./ExcerciseModal";
import SittingImage from "../assets/sittin.png";
import Standing from "../assets/image1.png";
import Lying from "../assets/img5.png";
import { IoClose } from "react-icons/io5";

const images = [
  {
    id: 1,
    name: "Standing",
    image: Standing,
  },
  {
    id: 2,
    name: "Sitting",
    image: SittingImage,
  },
  {
    id: 3,
    name: "Lying",
    image: Lying,
  },
];
const ExcerciseModals = ({ open, onClose }) => {
  const handleOverlayClick = (e) => {
    // Prevent closing modal if clicking inside the modal content
    console.log('ilsdfjk')
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <>
      {open && (
        <>
        

          <div
            className="modal-overlay  absolute w-full h-full bg-gray-800  shadow-2xl"
            onClick={handleOverlayClick}
          >

          <div class="modal-container fixed bg-white  h-full-10 w-full-10 opacity-100 top-1/2 left-1/2  p-4 flex flex-col items-center justify-center z-50 transform translate-x-[-50%] translate-y-[-50%]">
            <h2 className="font-bold text-gray-dark text-md float-left w-full pl-4 pt-4">
              Select Position
            </h2>
            <div
              className="modal-content p-4 flex flex-col overflow-auto gap-y-10 h-80 gap-x-3
               sm:flex-row
            "
            >
              {images.map((image, index) => (
                <ExcerciseModal
                  key={index}
                  image={image.image}
                  name={image.name}
                />
              ))}
              <button className="absolute  w-32 bottom-0 mt-8 right-5  border-2 p-1 mb-2  rounded-md bg-blue text-gray-light">
                Start Excercise
              </button>
              <button
                className="absolute top-2 right-2 text-gray-dark"
                onClick={onClose}
              >
                <IoClose className="font-bold text-gray-dark text-2xl" />
              </button>
            </div>
          </div>
          </div>
       
        </>
      )}
    </>
  );
};

export default ExcerciseModals;
