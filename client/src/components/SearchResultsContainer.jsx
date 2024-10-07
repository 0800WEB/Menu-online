import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardFoodSearch from './CardFoodSearch';

const SearchResultsContainer = () => {
    const location = useLocation();
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // Comprobar si hay resultados pasados en el estado de la navegación
        if (location.state?.filteredItems) {
            setFilteredItems(location.state.filteredItems);
        }
    }, [location]);

    return (
        <div className="w-full h-full max-h-[70vh] overflow-y-scroll scrollbar-hide bg-white shadow-lg rounded-md p-4 z-50">
            {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                    <CardFoodSearch key={item.id} title={item.foodTitle} image={item.image} price={item.price} description={item.description} reviews={item.reviews} />
                ))
            ) : (
                <p className="text-center text-gray-500 p-4">No se encontraron resultados</p>
            )}
        </div>
    );
};

export default SearchResultsContainer;
