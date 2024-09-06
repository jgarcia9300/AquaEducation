import React, { useCallback } from 'react'

const Login = () => {
const { user } = useAuthStore();
  
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

    useEffect(() => {
      observeAuthState();
    }, [observeAuthState]);

    const handleLogin = useCallback(()=>{
      loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    const handleLogout = useCallback(()=>{
      logout();
    }, [logout]);

    if (loading) {
      return <p className='loading-text'>Cargando...</p>
    }

}

export default Login

//Continuacion Login