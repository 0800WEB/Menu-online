import { ReactComponent as Icon } from '../../assets/svg/login-icon.svg';

const LoginBoton = () => {
  return (
    <button className="bg-blackPrimary text-white rounded-md px-[0.65rem]  sm:px-4 lg:px-7 py-2 lg:py-3  hover:bg-grayPrimary ease-out duration-300 flex items-center">
      <Icon className="lg:hidden" />
      <span className="hidden lg:inline">Login</span>
    </button>

  );
};

export default LoginBoton;
