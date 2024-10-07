import { useState } from 'react';
import DetailFood from './DetailFood';

const CardFoodSearch = ({ id, title, image, price, description, reviews }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  const handleCardClick = () => {
    setOpenDetails(true);
  };

  return (
    <div>
      <div
        className="bg-white py-4 flex flex-row justify-between items-center transition-transform transform cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex flex-col w-2/3 pr-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

          <div className="text-gray-400 text-sm">
            <p
              className={`overflow-hidden ${showFullDescription ? '' : 'max-h-16'}`}
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'pre-line',
                WebkitLineClamp: showFullDescription ? 'unset' : 3,
              }}
            >
              {description}
            </p>

            <strong
              className="font-bold cursor-pointer mt-1 inline-block text-gray-900 underline"
              onClick={(e) => {
                e.stopPropagation();
                toggleDescription();
              }}
            >
              {showFullDescription ? 'Ver menos...' : 'Ver más...'}
            </strong>
          </div>

          <p className="text-gray-900 font-bold mt-2">${price}</p>
        </div>

        <div className="w-1/3 h-32">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
        </div>
      </div>

      {openDetails && (
        <div
          className={`w-full fixed bottom-0 left-0 right-0 z-50 bg-white transition-all duration-300 slide-up`}
          style={{ height: 'calc(100vh)', overflowY: 'auto' }}
        >
          <DetailFood
            id={id}
            foodTitle={title}
            img={image}
            description={description}
            price={price}
            reviewScore={reviews}
            closeDetails={() => setOpenDetails(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CardFoodSearch;
