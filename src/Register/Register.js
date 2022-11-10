import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../Assets/login.png';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
      const { createUser, updateName,signInWithGoogle } =
    useContext(AuthContext)
      const handleRegister= event=>{
        event.preventDefault();
        const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    //1. Create Account
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        //2. Update Name
        updateName(name)
          .then(() => {
            toast.success('Name Updated')

             .catch(error => {
                toast.error(error.message)
              })
          })
          .catch(error => {
            toast.error(error.message)
          })
      })
      .catch(error => console.log(error))
  }
 // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }
    return (
             <div>
            <div className="hero w-full my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse gap-10">
    <div className="text-center lg:text-left">
 
    <img src={login} alt=''/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <h1 className="text-5xl text-center mb-4 mt-3 font-bold text-orange-600">Please Register!</h1>
    <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" />
        </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Your password" className="input input-bordered" required/>
        
        </div>
        <div className="form-control mt-6">
       
          <button className="bg-orange-600 py-3 rounded-lg text-white text-2xl " type='submit' value="Register">Register</button>
        </div>
      </form>
      <div>
         <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-center text-sm dark:text-gray-400'>
            Register with Google
          </p>
      
        </div>
        <div className='flex justify-center space-x-4'>
          <button
               onClick={handleGoogleSignin}
            aria-label='Log in with Google'
            className='p-3 rounded-sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current text-orange-600'
            >
              <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
            </svg>
          </button>
      </div>
        <label className="label p-5">
           <h2>Already have an Account? </h2>
            <Link to='/login' className="label-text-alt link link-hover text-orange-600 font-bold text-xl">Login!</Link>
          </label>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Register;