import React, { useContext} from "react";
import logo from "../../../assets/miu.png";
import img from "../../../assets/team-4.jpg";
import { Link } from "react-router-dom";
import ActiveRoute from "../../ActiveRoute/ActiveRoute";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div>
      <div className="px-6 mb-16 navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex-none gap-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
             
              <img className="user-profile me-5" src={user.photoURL} alt="" /> :
      
            </div>
            <p className="text-red-500">{user.displayName}</p> 
            <button onClick={handleLogout} className="mb-6 btn btn-ghost">Logout</button>
          </label>
        </div>
      </div>
      <div>
        <div className="navbar ps-10 space-x-10 border-b-4 border-green-500 bg-gray-100">
          <ActiveRoute to="/home" className="text-xl">
            Home
          </ActiveRoute>
          <ActiveRoute to="/home/registration" className="text-xl">
            My Registration
          </ActiveRoute>
          <ActiveRoute to="/home/account" className=" text-xl">
            My Account
          </ActiveRoute>
          <ActiveRoute to="/home/report" className="text-xl">
            My Reports
          </ActiveRoute>
          <ActiveRoute to="/home/roadmap" className="text-xl">
            My RoadMap
          </ActiveRoute>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
