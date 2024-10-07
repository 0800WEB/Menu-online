import { useState } from "react";
import ButtonSecondary from "./Buttons/ButtonSecondary";
import ReviewForm from "./ReviewForm";
import RatingDetailFood from "./RatingDetailFood";
import iconBack from "../assets/svg/arrow-back-gray.svg";
import {
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

    const handleBackButton = () => {
        if (showReviewForm || showReviews) {
            setShowReviewForm(false);
            setShowReviews(false);
        } else {
            closeDetails();
        }
    };

    return (
        <div className="flex flex-col px-9 pt-9 pb-[4.7rem] h-full relative overflow-y-auto">
            <div className="absolute top-0 left-0 w-full h-16 z-10 shadow-customMediumToBottom flex items-center px-9">
                <button onClick={handleBackButton} className="w-20" >
                    <img src={iconBack} alt="volver atras icon" />
                </button>
            </div>

            <div className="w-full h-[35%] rounded-custom-1 overflow-hidden mt-12">
                <img className="size-full object-cover" src={img} alt={`${foodTitle} image`} />
            </div>

            {/* Cambiar entre el contenido de detalle y el formulario de reseñas */}
            <div className="flex flex-col grow ">
                {!showReviewForm && !showReviews ? (
                    <div className="flex flex-col gap-3 min-h-[30%] grow mt-3">
                        <h3 className="text-lg leading-6 font-bold text-center break-words">
                            {foodTitle || DEFAULT_FOOD_TITLE}
                        </h3>
                        <p className="text-sm font-medium leading-5 line-clamp-8">
                            {description || DEFAULT_DESCRIPTION}
                        </p>
                        <div className="flex flex-wrap justify-between mt-[1.65rem]">
                            <ButtonSecondary
                                textChildren={BUTTON_TEXT_REVIEWS}
                                typeButton={"button"}
                                onClick={handleShowReviewsClick}
                            />
                            <p>${price} {PRICE_CURRENCY}</p>
                        </div>
                        <div className="mx-auto pt-2 mt-auto z-30">
                            <ButtonSecondary
                                textChildren={BUTTON_TEXT_LEAVE_REVIEW}
                                typeButton={"button"}
                                onClick={toggleReviewSubmissionModalVisibility}
                            />
                        </div>
                    </div>
                ) : showReviews ? (
                    <div className="h-full w-full flex flex-col items-center justify-center">
                        <RatingDetailFood
                            reviews={reviewScore}
                            toggleReviewVisibility={toggleReviewSubmissionModalVisibility}
                        />
                    </div>
                ) : (
                    <div className="h-full flex flex-col min-h-[30%]">
                        <ReviewForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailFood;
