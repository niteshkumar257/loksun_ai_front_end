import React, { useEffect } from "react";
import {useState} from "react";
import ExcerciseModals from "./ExcerciseModals";
import LottieEx from "./Lottie";
import data from "../assets/ex.json";

const Excercise = ({ excercise_name,image }) => {
  const [modalOpen,setModalOpen]=useState(false);
  const handleModal=()=>{
    setModalOpen((prev)=>!prev);
  }
  
  return (
    <>
    <div className="relative h-72 w-64 shadow-lg  bg-gray-light flex items-center rounded-md justify-center ">
      <span className="absolute top-2 left-2 font-bold z-10 text-lg">{excercise_name}</span>
      <img className="h-72 w-64 bg-red-300 object-cover  rounded-md" alt="no image" src={image} />
      <button className="absolute w-60 bottom-2  border-2 p-1  rounded-md bg-blue text-gray-light" onClick={()=>setModalOpen(true)}>Start Assement</button>
    
    <ExcerciseModals open={modalOpen} onClose={handleModal}/>
    </div>
    </>
  );
};

export default Excercise;
