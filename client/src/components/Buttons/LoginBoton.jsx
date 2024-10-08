import { useState, useContext } from 'react';
import { ReactComponent as Icon } from '../../assets/svg/login-icon.svg';
import { AuthContext } from '../../contextAuth/AuthContext';

const LoginBoton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await logout();

      window.location.reload();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="relative ">
      {isLoggingOut && (
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center bg-white p-2 rounded-md shadow-md animate-fadeIn">
          <span className="animate-fadeIn">Cerrando sesión...</span>
        </div>
      )}
      <button
        className="bg-blackPrimary h-full text-white rounded-md px-[0.65rem] sm:px-4 lg:px-7 py-2 lg:py-3 hover:bg-grayPrimary ease-out duration-300 flex items-center"
        onClick={handleLogout}
        disabled={isLoggingOut}
      >
        <Icon className="lg:hidden" />
        <span className="hidden lg:inline">Cerrar Sesion</span>
      </button>
    </div>
  );
};

export default LoginBoton;
