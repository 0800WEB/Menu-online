import { calculateAverageScore } from "../utils/functions/caculateScoreFood";
import AverageReviewScore from "./AverageReviewScore";
import { BUTTON_TEXT_LEAVE_REVIEW, TITLE_RATING_DETAIL } from "../utils/consts/consts";
import ButtonSecondary from "./Buttons/ButtonSecondary";
import ReviewCard from "./ReviewCard";

const RatingDetailFood = ({ reviews, toggleReviewVisibility }) => {
    const averageReviewScore = calculateAverageScore(reviews);

    return (
        <div className="w-full h-full py-3   bg-white flex flex-col justify-between">
            <AverageReviewScore score={averageReviewScore} totalReviews={5} />
            <h3 className="text-lg font-bold">{TITLE_RATING_DETAIL}</h3>
            {reviews.length > 0 ? (
                <div className="flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
                    {reviews.map((review, index) => (
                        <ReviewCard review={review} key={index} />
                    ))
                    }
                </div>
            ) : (
                <p className="text-gray-600">{NO_REVIEWS_AVAILABLE_MESSAGE}</p>
            )}
            <div className="mx-auto">
                <ButtonSecondary textChildren={BUTTON_TEXT_LEAVE_REVIEW} onClick={() => toggleReviewVisibility()} />
            </div>

        </div>
    );
};

export default RatingDetailFood;