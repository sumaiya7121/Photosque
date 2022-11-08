import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';

const Header = () => {

const menu = <>
    <li><Link to='/'>Home</Link></li>
</>
const menu2 = <>
    <li><Link to='/services'>Services</Link></li>
</>
const menu3 = <>
    <li><Link to='/login'>Login</Link></li>
</>
const menu4 = <>
    <li><Link to='/blogs'>Blogs</Link></li>
</>
const menu5 = <>
    <li><Link to='/logOut'>logout</Link></li>
</>



    return (
     <div className="navbar h-20 mb-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menu}
       {menu2}
       {menu4}
       {menu3}
       {menu5}

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className='h-12' src={logo} 
        alt=''/>
        <span className='text-orange-600 text-3xl'>Photos</span><span className='text-3xl'>Que</span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
   {menu}
   {menu2}
   {menu4}
   {menu3}
   {menu5}

    </ul>
  </div>

</div>
    );
};

export default Header;