import { useState, useRef, useEffect } from 'react';
import iconSearch from '../assets/svg/search-loupe.svg';

const Buscador = () => {
    const [busqueda, setBusqueda] = useState('');
    const [isFocused, setIsFocused] = useState(false); // Estado para manejar el foco
    const searchRef = useRef(null); // Referencia al div contenedor

    const buscarCard = (e) => {
        setBusqueda(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.relatedTarget)) {
            setIsFocused(false);
        }
    };

    // Para asegurarnos de que se actualiza el estado al redimensionar
    useEffect(() => {
        const handleResize = () => {
            // Cuando se redimensiona, se asegura de que el enfoque se mantenga
            if (window.innerWidth >= 640) {
                setIsFocused(true);
            } else if (!busqueda) {
                setIsFocused(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [busqueda]);

    return (
        <div
            className="search relative md:w-full sm:w-auto"
            onFocus={handleFocus} // Manejar el foco
            onBlur={handleBlur} // Manejar la pérdida de foco
            ref={searchRef} // Asignar referencia al div
            tabIndex={0} // Hacer que el div sea foco
        >
            {/* Icono de búsqueda a la izquierda */}
            <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${(!isFocused && window.innerWidth < 640) ? 'block' : 'hidden'}`}>
                <img src={iconSearch} alt="Search Icon" className="w-4 h-4" />
            </div>

            <input
                type="text"
                placeholder={isFocused || window.innerWidth >= 640 ? "Buscar..." : ""} // Placeholder cuando es mayor que sm
                name="busqueda"
                autoComplete="off"
                value={busqueda} // Vincular el estado al valor del input
                onChange={buscarCard} // Llamar a la función para actualizar el estado
                className={`bg-grayLight text-blackPrimary rounded-md px-4 py-3 focus:outline-none 
                    ${isFocused ? 'w-full' : 'w-4 sm:w-full'} transition-all duration-700`} // Cambiar el ancho
            />
        </div>
    );
};

export default Buscador;
