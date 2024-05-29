import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
     navigate("/error")
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
         className='w-44'
           src='https://pnghq.com/wp-content/uploads/netflix-logo-png-430-download-7523-1536x468.png'
           alt=' logo'/>

           <div className= "flex p-2"> 

            <img className="w-12 h-12"
              alt='user-icon' src='https://tse1.mm.bing.net/th?id=OIP.uDtPlCTKLnrQW_ipwKsCJAHaHa&pid=Api&P=0&h=220'/>
            <button  onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
           </div>

    </div>
  )
}

export default Header