import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { auth, db } from "../firebase";
import {signOut} from "firebase/auth";
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Img from '../img/images.png';

import {
  FaSistrix,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";
import { MdHome } from "react-icons/md";


const Navbar = () => {
  const Navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/chathome`; 
    Navigate(path);
  }
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    Navigate("/Login", { replace: true })
    };
  return(
    <nav>
    <h3>
      <Link to="/">Connectify</Link>
    </h3>
    {user ? (
        <> <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input type="text" className="navbar__search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div></>):(<></>)}
    <div>
      {user ? (
        <>

        <Link to="/profile">Profile</Link>
        <button className="btn" onClick={handleSignout}>Logout</button>
 

 <div className="navbar__middle">
        
  
    
    
    <div className="navbar">
      
      <div className="navbar__last">
        <li>
          <MdHome className="navbar__icons" />
        </li>
        <li>
         <FaTelegramPlane className="navbar__icons" />
         <button  onClick={routeChange}> <FaTelegramPlane/> </button>
        </li>
        <li>
          <FaRegCompass className="navbar__icons" />
        </li>
        <li>
          <FaRegHeart className="navbar__icons" />
        </li>
        
      </div>
      
      </div>
      </div>
     
        </>
       
           
       
       ) : (
            <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          
            </>
   )}
          
      </div>

      </nav>
  )
}

export default Navbar
