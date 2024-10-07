import { useState, useRef, useEffect } from 'react';
import iconSearch from '../assets/svg/search-loupe.svg';
import { useSelector } from 'react-redux';
import CardFoodSearch from './CardFoodSearch';

const Buscador = () => {
    const [busqueda, setBusqueda] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const searchRef = useRef(null);

    const items = useSelector((state) => state.products.items);

    useEffect(() => {
        if (busqueda) {
            const lowerCaseBusqueda = busqueda.toLowerCase();
            const filtered = items.filter(item =>
                item.foodTitle.toLowerCase().includes(lowerCaseBusqueda)
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    }, [busqueda, items]);

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

    useEffect(() => {
        const handleResize = () => {
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


            {isFocused && filteredItems.length > 0 && (
                <div className="fixed h-full bg-slate-500 left-0 right-0 flex flex-col gap-4 shadow-lg mt-1 rounded-md overflow-hidden z-50">
                    {filteredItems.map((item) => (
                        <CardFoodSearch key={item.id} title={item.foodTitle} image={item.image} price={item.price} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Buscador;