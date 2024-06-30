import React ,{useEffect,useState} from 'react'
import Excercises from '../components/Excercises';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { API_URL } from '../utils/config';


const Home = () => {
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  const [name,setName]=useState("");

  const user=jwtDecode(token);
  const {userId}=user;

  useEffect(()=>{
    if(!token)
      {
        
        navigate('/login');
        return ;
      }

  },[])
  useEffect(()=>{
    axios.get(`${API_URL}/user/userInfo/${userId}`).then((res)=>{
      const data=res.data;
      const {firstname,lastname}=data;
      console.log(firstname);
      setName(firstname)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className='h-auto w-full flex flex-col
     bg-dark-black items-center justify-center'>
      <div className="flex pl-3 h-auto w-full items-center justify-center">

      <span className='text-gray-light font-bold mt-2 w-full pl-20 text-2xl  '>{name}</span>
      </div>
      <Excercises/>
    </div>
  )
}

export default Home;