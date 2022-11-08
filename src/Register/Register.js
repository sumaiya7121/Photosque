import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../Assets/login.png';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {
      const { createUser, updateName} =
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