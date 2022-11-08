import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../Assets/login.png';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
 
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { signin,signInWithGoogle } = useContext(AuthContext)

    const handleLogin= e=>{

        e.preventDefault();
 const email = e.target.email.value;
 const password = e.target.password.value;
 console.log(email,password);

signin(email, password)
      .then(result => {
        toast.success('Login Success!')
        navigate(from, { replace: true })
        console.log(result.user)
      })
      .catch(error => toast.error(error.message))
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
                                    <h1 className="text-5xl text-center mb-4 mt-3 font-bold text-orange-600">Login now!</h1>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                                </div>
                                <div className="form-control mt-6">
                            
                                <button className="bg-orange-600 py-3 rounded-lg text-white text-2xl " type='submit'>Login</button>

                    
                                </div>
                            </form>
                              <button onClick={handleGoogleSignin} className="bg-orange-600 py-3 rounded-lg text-white text-2xl " type='submit'> Google </button>
                                <label className="label p-5">
                                <h2>Don't have an Account? </h2>
                                    <Link to='/register' className="label-text-alt link link-hover text-orange-600 font-bold text-xl">Register here!</Link>
                                </label>
                            </div>
                        </div>

            </div>
            
        </div>
    );
};

export default Login;