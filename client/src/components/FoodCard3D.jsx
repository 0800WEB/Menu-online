import { useState } from 'react'
import StarCardFoodReviews from './Icons/IconStarReviews'
import RatingStars from './RatingStars'
import DetailFood from './DetailFood'
import { RECOMMENDED_TAG } from '../utils/consts/consts'
import { calculateAverageScore } from '../utils/functions/caculateScoreFood'
import '../styles/slideUp.css'

const FoodCard3D = ({ id, foodTitle, img, description, price, reviewScore, promoted }) => {

    const [openDetails, setOpenDetails] = useState(false)

    const imageSizeClasses = promoted !== RECOMMENDED_TAG
        ? 'h-[9.5rem] w-full sm:size-[13.3rem]'
        : 'h-[8.5rem]  min-w-[11.4rem] sm:w-[11.4rem]';

    const containerClasses = promoted !== RECOMMENDED_TAG
        ? 'max-w-[calc(50%-0.5rem)] sm:max-w-[13.3rem]'
        : 'min-w-[11.4rem] max-w-[11.4rem] sm:w-[11.4rem]';


    const averageReviewScore = parseInt(calculateAverageScore(reviewScore));

    return (
        <div className={`${containerClasses} w-full h-max max-w-`} >
            <div className={` flex flex-col sm:gap-2 rounded-custom-1 w-full h-max shadow-md overflow-hidden pb-1 sm:pb-2 bg-white bg-opacity-40`} onClick={() => setOpenDetails(!openDetails)}>
                <div className={`relative ${imageSizeClasses} overflow-hidden`}>
                    <img className='object-cover size-full' src={img} alt={`${foodTitle} image`} loading="lazy" />
                    <div className='absolute bottom-0 left-0' aria-label="3D Icon">
                    </div>
                    <div className='absolute top-4 right-2 p bg-white rounded-full shadow-md' aria-label="More details icon" >
                        <button onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://ar-code.com/dDTxhJRrc', '_blank');
                        }}>
                            <p className='font-bold text-lg p-1 px-[0.4rem] tracking-tighter'>3D</p>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-2 px-1'>
                    <RatingStars rating={averageReviewScore} />
                    <div className='flex flex-col sm:flex-row gap-[1px] sm:justify-between mt-1 w-full'>
                        <h2 className='text-lg sm:text-[1.1rem] text-blackPrimary font-medium sm:font-bold truncate'>{foodTitle}</h2>
                        <div className='flex flex-row justify-between items-center gap-1 [&_p]:text-grayPrimary [&_p]:text-sm [&_p]:font-bold'>
                            <p className='sm:text-[1.1rem] truncate'>${price} USD</p>
                            <div className='flex gap-[1px] items-baseline sm:hidden'>
                                <p>{averageReviewScore}</p>
                                <StarCardFoodReviews
                                    color="#FF7300"
                                    widthClass="w-[12px]"
                                    heightClass="h-[11.25px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openDetails && (
                <div
                    className={`w-full fixed bottom-0 right-0 z-50 bg-white transition-all duration-300 slide-up`}
                    style={{ height: 'calc(100vh)' }}
                >
                    <DetailFood
                        id={id}
                        foodTitle={foodTitle}
                        description={description}
                        img={img}
                        price={price}
                        reviewScore={reviewScore}
                        closeDetails={() => setOpenDetails(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default FoodCard3D
