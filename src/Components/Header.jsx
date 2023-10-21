import { Link, NavLink } from "react-router-dom";
import backgorundIMG from '../assets/th .jpg';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import userProfile from '../assets/user.png'

const Header = () => {
  const {user,signOutt} =useContext(AuthContext)

  const handlesignout =()=>{
    signOutt()
    .then(result=>{
      console.log(result.user);
    })
    .catch(err=>{
      console.error(err.message);
    })
  }
    const Navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li ><NavLink to='/product'>Add Product</NavLink></li>
    <li ><NavLink to='/cart'>My Cart</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            Navlinks
        }
      </ul>
    </div>
   <img className="w-full h-36" src={backgorundIMG}></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
            Navlinks
        }
    </ul>
  </div>
  <div className="navbar-end">
 
  {
            user && <div className="text-sm">
              <span>{user.email}</span>
            </div>
          

          }

       {
        user && <div className="w-10 rounded-full">
        <img src={userProfile}/>
        </div>

       }
          {
            user? <a onClick={handlesignout} className="btn btn-sm">Sign Out</a>
            :
            <Link className="btn" to='/login'>Sign In</Link>
      

          }
  </div>
</div>
    );
};

export default Header;