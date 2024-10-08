import { useState } from 'react';

const MenuDesplegable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuCerrado = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center">
        {/* Botón del menú */}
        <button
          onClick={MenuCerrado}
          className="inline-flex items-center text-highlight font-semibold"
        >
          Menú
          <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Opción "Recomendados" */}

      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-grayPrimary hover:bg-grayLight" role="menuitem">Comidas</a>
            <a href="#" className="block px-4 py-2 text-grayPrimary hover:bg-grayLight" role="menuitem">Bebidas</a>
            <a href="#" className="block px-4 py-2 text-grayPrimary hover:bg-grayLight" role="menuitem">Ensaladas</a>
            <a href="#" className="block px-4 py-2 text-grayPrimary hover:bg-grayLight" role="menuitem">Mariscos</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;
