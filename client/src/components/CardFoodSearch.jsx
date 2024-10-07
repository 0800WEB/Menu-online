const CardFoodSearch = ({ title, image, price, rating }) => {  
  return (  
    <div className="card bg-white rounded-lg shadow-md p-2 flex flex-col items-center transition-transform transform hover:scale-105">  
      <img  
        src={image}  
        alt={title}  
        className="w-full h-32 object-cover rounded-md mb-1"  
      />  
      <h3 className="text-sm font-semibold text-center">{title}</h3>  
      <div className="flex justify-between items-center w-full mt-1">  
        <p className="text-gray-600 text-sm">${price}</p>  
        <div className="flex items-center">  
          <span className="text-yellow-500">{'★'.repeat(Math.floor(rating))}</span>  
          <span className="text-gray-500 text-xs">({rating})</span>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default CardFoodSearch;