
import React ,{useEffect}from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ name, image, bio }) => {
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token)
      {
        
        navigate('/login');
        return ;
      }

  },[])
  return (
    <div className="w-full h-autoflex flex-col gap-y-3 p-4 ">
      <div className="flex flex-row  bg-dark-black h-40 items-center rounded-md pl-3 ">
      <div>
        <img
          className="h-32 w-32 rounded-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-8kr6IGwu8T6y_Lc-0ZfAnGBFF4MvLjY-w&s"
          alt="dummy image"

        />
      </div>

      <div className="flex flex-col p-4">
        <span className="text-gray-light font-bold text-xl">Nitesh Kumar</span>
        <span className="text-gray-light font-bold text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          excepturi natus! Facere laborum tempora deserunt minus repellat nemo
          hic velit?
        </span>
      </div>
      </div>
      <div className="h-24 w-full mt-4 bg-dark-black rounded-md">
       
      </div>
      
    </div>
  );
};

export default Profile;
