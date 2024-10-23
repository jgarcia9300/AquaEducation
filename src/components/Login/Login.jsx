import React, { useCallback, useEffect } from 'react'
import "./Login.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from 'react-router-dom';
import { div } from 'three/webgpu';

const Login = () => {
const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } = useAuthStore();

const navigate = useNavigate();

    useEffect(() => {
      observeAuthState();
    }, [observeAuthState]);

    useEffect(() => {
      if(user){
       const newUser = {
         email: user.email,
         name: user.displayName,
         photo: user.photoURL
       };
       navigate("/World")
      }
     }, [user]);
 
    const handleLogin = useCallback((e)=>{
      e.preventDefault();
      loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    const handleLogout = useCallback(()=>{
      logout();
    }, [logout]);

    if (loading) {
      return <p className='loading-text'>Cargando...</p>
    }


    return ( 

      // <div className='container-login'>
      //     {user ? (
      //       <>
      //       <p className='welcome-text'>Bienvenido, {user.displayName}</p>
      //       <button className='button-logout'>Cerrar Session</button>
      //       </>
      //     ): (
      //       <button onClick={handleLogin}>Iniciar Sesion</button>
      //     )}   
      // </div>
      <div>
        {user ? (     
           <>
           <p className='welcome-text'>Bienvenido, {user.displayName}</p>
          <button className='button-logout'>Cerrar Session</button>
       </>
       ) : (

    
<div className="bg-white rounded-lg py-auto">
<div className="container flex flex-col mx-auto bg-white rounded-lg my-auto">
  <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
    <div className="flex items-center justify-center w-full lg:p-2 h-100">
      <div className="flex items-center">
        <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl border pl-64 pr-64">
        <img 
          className="w-36 mx-auto"
          src="../../src/assets/images/logo.jpg"
          alt="imagen-logo"
        />
          <h3 className="mb-3 text-4xl font-extrabold text-blue-300">Aqua Education</h3>
          <h3 className="mb-3 text-3xl font-extrabold text-blue-300">Sign In</h3>
          <p className="mb-4 text-grey-700">Enter your email and password</p>
          <button type='submit' onClick={handleLogin}
           className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-blue-400 focus:ring-4 focus:ring-gray-300"
            href="#"
          >
            <img
              className="h-5 mr-2"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
              alt=""
            />
            Sign in with Google
          </button>
          <div className="flex items-center mb-3">
            <hr className="h-0 border-b border-solid border-gray-500 grow" />
            <p className="mx-4 text-gray-600">or</p>
            <hr className="h-0 border-b border-solid border-gray-500 grow" />
          </div>
          <label htmlFor="email" className="mb-2 text-sm text-start text-gray-900">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="mail@loopple.com"
            className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-100 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          />
          <label htmlFor="password" className="mb-2 text-sm text-start text-gray-900">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter a password"
            className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-blue-100 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          />
          <div className="flex flex-row justify-between mb-8">
            <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
              <input type="checkbox" checked={true} className="sr-only peer" />
              <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                <img
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                  alt="tick"
                />
              </div>
              <span className="ml-3 text-sm font-normal text-gray-900">Keep me logged in</span>
            </label>
            <a href="#" className="mr-4 text-sm font-medium text-gray-900">
              Forget password?
            </a>
          </div>
          <button
              className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-amber-400 focus:ring-4 focus:ring-gray-300"
          >
            Sign In
          </button>
          <p className="text-sm leading-relaxed text-grey-900">
            Not registered yet?{" "}
            <a href="#" className="font-bold text-grey-700">
              Create an Account
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-wrap -mx-3 my-5">
  <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
    <p className="text-sm text-slate-500 py-1">
      Tailwind CSS Component from{" "}
      <a
        href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents"
        className="text-slate-700 hover:text-slate-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        Motion Landing Library
      </a>{" "}
      by{" "}
      <a href="https://www.loopple.com" className="text-slate-700 hover:text-slate-900" target="_blank" rel="noopener noreferrer">
        Loopple Builder
      </a>.
    </p>
  </div>
</div>
</div>
       )}
       
     </div>

      )





      // <div className='container-login'>
      //     {user ? (
      //       <>
      //       <p className='welcome-text'>Bienvenido, {user.displayName}</p>
      //       <button className='button-logout'>Cerrar Session</button>
      //       </>
      //     ): (
      //       <button onClick={handleLogin}>Iniciar Sesion</button>
      //     )}   
      // </div>
  

}

export default Login

