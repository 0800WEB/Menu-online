import { useState } from "react";
import ButtonSecondary from "./Buttons/ButtonSecondary";
import ReviewForm from "./ReviewForm";
import RatingDetailFood from "./RatingDetailFood";
import {
    ARROW_TO_BACK_BUTTON,
    BUTTON_TEXT_LEAVE_REVIEW,
    BUTTON_TEXT_REVIEWS,
    DEFAULT_DESCRIPTION,
    DEFAULT_FOOD_TITLE,
    PRICE_CURRENCY
} from "../utils/consts/consts";

const DetailFood = ({ id, foodTitle, img, description, price, reviewScore, closeDetails, reviews }) => {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [showReviews, setShowReviews] = useState(false);

    const toggleReviewSubmissionModalVisibility = () => {
        setShowReviewForm(!showReviewForm);
        setShowReviews(false);
    };

    const handleShowReviewsClick = () => {
        setShowReviews(true);
        setShowReviewForm(false);
    };

    return (
        <div className="flex flex-col px-9 pt-9 pb-[4.7rem] h-full relative overflow-y-auto">
            <div className="w-full h-[35%] rounded-custom-1 overflow-hidden">
                <img className="size-full object-cover" src={img} alt={`${foodTitle} image`} />
            </div>

            {/* Aquí cambiamos entre el contenido de detalle y el formulario de reseñas */}
            <div className="flex flex-col grow ">
                {!showReviewForm && !showReviews ? (
                    // Mostrar detalle de comida  
                    <div className="flex flex-col gap-3 min-h-[30%] grow mt-3">
                        <h3 className="text-lg leading-6 font-bold text-center break-words">{foodTitle || DEFAULT_FOOD_TITLE}</h3>
                        <p className="text-sm font-medium leading-5 line-clamp-8">
                            {description || DEFAULT_DESCRIPTION}
                        </p>
                        <div className="flex flex-wrap justify-between mt-[1.65rem]">
                            <ButtonSecondary textChildren={BUTTON_TEXT_REVIEWS} typeButton={"button"} onClick={handleShowReviewsClick} />
                            <p>${price} {PRICE_CURRENCY}</p>
                        </div>
                        <div className="mx-auto pt-2 mt-auto">
                            <ButtonSecondary
                                textChildren={BUTTON_TEXT_LEAVE_REVIEW}
                                typeButton={"button"}
                                onClick={toggleReviewSubmissionModalVisibility}
                            />
                        </div>
                        <div className="w-full absolute bottom-4 left-0 px-9">
                            <ButtonSecondary
                                textChildren={ARROW_TO_BACK_BUTTON}
                                typeButton={"button"}
                                onClick={closeDetails}
                            />
                        </div>
                    </div>
                ) : showReviews ? (
                    // Mostrar las reseñas  
                    <div className="absolute top-0 right-0 h-full w-full bg-red-500 flex flex-col items-center justify-center">
                        <div className="w-full px-9 absolute bottom-4">
                            <ButtonSecondary
                                textChildren={ARROW_TO_BACK_BUTTON}
                                typeButton={"button"}
                                onClick={() => setShowReviews(false)}
                            />
                        </div>
                        <RatingDetailFood reviews={reviewScore} toggleReviewVisibility={toggleReviewSubmissionModalVisibility} />
                    </div>
                ) : (
                    // Mostrar el formulario de reseñas  
                    <div className="h-full flex flex-col min-h-[30%]">
                        <ReviewForm />
                        <div className="w-full absolute bottom-4">
                            <ButtonSecondary
                                textChildren={ARROW_TO_BACK_BUTTON}
                                typeButton={"button"}
                                onClick={toggleReviewSubmissionModalVisibility}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailFood;