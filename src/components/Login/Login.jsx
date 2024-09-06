import React, { useCallback, useEffect } from 'react'
import "./Login.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from 'react-router-dom';

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
 
    const handleLogin = useCallback(()=>{
      loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    const handleLogout = useCallback(()=>{
      logout();
    }, [logout]);

    if (loading) {
      return <p className='loading-text'>Cargando...</p>
    }

   
    return (  
      <div className='container-login'>
          {user ? (
            <>
            <p className='welcome-text'>Bienvenido, {user.displayName}</p>
            <button className='button-logout'>Cerrar Session</button>
            </>
          ): (
            <button onClick={handleLogin}>Iniciar Sesion</button>
          )}   
      </div>
  )

}

export default Login

