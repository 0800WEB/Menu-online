const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white shadow-sm rounded-lg text-sm py-1">
            <strong className="block text-blackPrimary">{review.user}</strong>
            <div className="text-yellow-500 flex items-center my-2">
                {'★'.repeat(Math.round(review.score))}
                {'☆'.repeat(5 - Math.round(review.score))}
                <span className="ml-2  text-gray-500">({review.score})</span>
            </div>
            <p className="text-gray-600">{review.opinion}</p>
        </div>
    );
};

export default ReviewCard;
