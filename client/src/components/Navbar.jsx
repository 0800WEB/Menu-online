import { useState } from 'react'
import logoFood from "../assets/svg/food-brand.svg"
import MenuDesplegable from '../components/MenuDesplegable'
import Buscador from '../components/Buscador'
import LoginBoton from './Buttons/LoginBoton'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <section className='overflow-hidden shadow-customMediumToBottom sm:text-sm lg:text-base font-bold'>
      <nav className='px-9 sm:px-20 lg:px-[8.75rem] flex items-center justify-between gap-4 sm:gap-8 h-28' >
        <div>
          <Link to='/home'>
            <img className='w-32 sm:w-[9.4rem] h-7 sm:h-8' src={logoFood} alt="Logo Brand" />
          </Link>
        </div>
        <div className="hidden sm:flex sm:gap-4 lg:gap-4 xl:gap-14 justify-between items-center ">
          <MenuDesplegable />
          <Link href="#" className="text-blackPrimary hover:text-highlight ease-out duration-300" >Recomendados</Link>
          <Link href="#" className="text-blackPrimary hover:text-highlight ease-out duration-300">Notificaciones</Link>
        </div>
        <div className='w-max flex gap-2' >
          <Buscador />
          <LoginBoton />
        </div>
      </nav>
    </section>
  )
};


export default Navbar
