import StarCardFoodReviews from './Icons/IconStarReviews';

const RatingStars = ({ rating, maxStars = 5, fullStarColor = "#FF7300", emptyStarColor = "#D3D3D3" }) => {
    const fullStars = Math.floor(rating); // Número de estrellas llenas
    const hasHalfStar = rating % 1 >= 0.5; // Si hay media estrella
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Número de estrellas vacías

    return (
        <div className="hidden sm:flex gap-2">
            {/* Renderiza las estrellas llenas */}
            {Array.from({ length: fullStars }, (_, index) => (
                <StarCardFoodReviews
                    key={`full-${index}`}
                    color={fullStarColor}
                    widthClass="w-[15px]"
                    heightClass="h-[14px]"
                />
            ))}

            {/* Renderiza una media estrella si aplica */}
            {hasHalfStar && (
                <StarCardFoodReviews
                    key="half"
                    color={fullStarColor}
                    widthClass="w-[15x]"
                    heightClass="h-[14px]"
                    half // Aquí puedes hacer cambios para representar media estrella en `StarCardFoodReviews`
                />
            )}

            {/* Renderiza las estrellas vacías */}
            {Array.from({ length: emptyStars }, (_, index) => (
                <StarCardFoodReviews
                    key={`empty-${index}`}
                    color={emptyStarColor}
                    widthClass="w-[15px]"
                    heightClass="h-[14px]"
                />
            ))}
        </div>
    );
};

export default RatingStars;
