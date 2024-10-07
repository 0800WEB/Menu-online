import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import iconSearch from '../assets/svg/search-loupe.svg';
import { useSelector } from 'react-redux';
import { SEARCH_RESULTS } from '../routes/constPath';

const Buscador = () => {
    const [busqueda, setBusqueda] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const items = useSelector((state) => state.products.items);
    const typingTimeoutRef = useRef(null); // Referencia para el timeout

    useEffect(() => {
        const lowerCaseBusqueda = busqueda.toLowerCase();
        const filtered = items.filter(item =>
            item.foodTitle.toLowerCase().includes(lowerCaseBusqueda)
        );

        if (busqueda) {
            navigate(SEARCH_RESULTS, { state: { filteredItems: filtered } });
        }
    }, [busqueda, items, navigate]);

    const buscarCard = (e) => {
        setBusqueda(e.target.value);

        // Limpiar el timeout anterior si existe
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        // Configurar un nuevo timeout
        typingTimeoutRef.current = setTimeout(() => {
            setBusqueda(''); // Limpiar el input después de 3 segundos
        }, 3000);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.relatedTarget)) {
            setIsFocused(false);
        }
    };

    // Limpiar el timeout al desmontar el componente
    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="search relative md:w-full sm:w-auto"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={searchRef}
            tabIndex={0}
        >
            <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${(!isFocused && window.innerWidth < 640) ? 'block' : 'hidden'}`}>
                <img src={iconSearch} alt="Search Icon" className="w-4 h-4" />
            </div>

            <input
                type="text"
                placeholder={isFocused || window.innerWidth >= 640 ? "Buscar..." : ""}
                name="busqueda"
                autoComplete="off"
                value={busqueda}
                onChange={buscarCard}
                className={`bg-grayLight text-blackPrimary rounded-md px-4 py-3 focus:outline-none   
                    ${isFocused ? 'w-full' : 'w-4 sm:w-full'} transition-all duration-700`}
            />
        </div>
    );
};

export default Buscador;
