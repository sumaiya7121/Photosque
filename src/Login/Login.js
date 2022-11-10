import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../Assets/login.png';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { useTitle } from "../Hooks/UseTitle";
	


const Login = () => {
 useTitle("Login");
 
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

                            
                          <div>
                              <div>
         <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-center text-sm dark:text-gray-400'>
           Login with Google
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
                          </div>
                              

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