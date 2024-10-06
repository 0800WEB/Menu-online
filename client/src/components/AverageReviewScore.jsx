import { CUSTOMER_FEEDBACK_LABEL } from "../utils/consts/consts";
const AverageReviewScore = ({ score, totalReviews }) => {
    const filledStars = Math.floor(score);
    const totalStars = 5;

    return (
        <div className="flex items-center border-t border-b border-gray-300 py-1">
            <div className="h-full flex flex-col justify-between items-center">
                <span className="text-gray-500">{CUSTOMER_FEEDBACK_LABEL}</span>
                <div>

                    <span className="text-gray-600 font-semibold text-3xl"> {score}</span>
                    <span className="text-gray-600 font-bold "> de {totalStars}</span>
                </div>
            </div>

            <div className="flex flex-col w-full">
                {[...Array(totalStars)].map((_, rowIndex) => {
                    const widthPercentage = Math.max(0, Math.round((totalStars - rowIndex) * 20));

                    return (
                        <div className="flex w-full items-center mb-[0.35rem] gap-2" key={rowIndex}>
                            <div className="flex w-1/2 justify-end">
                                {[...Array(totalStars - rowIndex)].map((_, starIndex) => (
                                    <svg
                                        className={`w-3 h-3 ${rowIndex < filledStars ? 'text-gray-600' : 'text-gray-300'}`}
                                        fill="#A1A1A1"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        key={starIndex}
                                    >
                                        <path d="M10 15l-5.878 3.09 1.121-6.535L0 6.545l6.545-.955L10 0l2.455 5.59L20 6.545l-5.243 4.005 1.121 6.535z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="h-2 w-24 bg-gray-300 rounded-xl overflow-hidden">
                                <div
                                    className="h-full bg-grayPrimary rounded-xl transition-all"
                                    style={{ width: `${widthPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AverageReviewScore;
