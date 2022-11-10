import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <Link to='/' className="link link-hover">About Me</Link> 
    <Link to='/blogs' className="link link-hover">Blogs</Link> 
    <Link to='/' className="link link-hover">Contact Me</Link> 
  
  </div> 
  <div>

  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved PhotosQue</p>
  </div>
</footer>
   
    );
};

export default Footer;