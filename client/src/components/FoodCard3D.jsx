import { useState } from 'react'
import Icon3D from './Icons/Icon3D'
import IconMoreDetails from './Icons/IconMoreDetails'
import StarCardFoodReviews from './Icons/IconStarReviews'
import RatingStars from './RatingStars'
import DetailFood from './DetailFood'
import '../styles/slideUp.css'

const FoodCard3D = ({ id, foodTitle, img, description, price, reviewScore, promoted }) => {

    const [openDetails, setOpenDetails] = useState(false)


    const imageSizeClasses = promoted !== 'recommended'
        ? 'size-[9.5rem] sm:size-[13.3rem]'
        : 'h-[7.5rem] w-40 sm:w-[11.4rem]';

    const containerClasses = promoted !== 'recommended'
        ? 'max-w-[9.5rem] sm:max-w-[13.3rem]'
        : 'max-w-40 sm:w-[11.4rem]';

    return (
        <div className={`${containerClasses} flex flex-col sm:gap-2 rounded-custom-1 w-max h-max shadow-md overflow-hidden pb-1 sm:pb-2 bg-white bg-opacity-40`}>
            <div className={`relative ${imageSizeClasses} overflow-hidden`}>
                <img className='object-cover size-full' src={img} alt={`${foodTitle} image`} loading="lazy" />
                <div className='absolute bottom-[9px] left-[9px]' aria-label="3D Icon">
                    <Icon3D
                        width={25}
                        height={19}
                        color='white'
                    />
                </div>
                <div className='absolute bottom-[9px] right-[9px]' aria-label="More details icon" onClick={() => setOpenDetails(true)}>
                    <IconMoreDetails
                        widthClass="w-[23px]"
                        heightClass="h-[23px]"
                        bgColor="bg-white"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-2 px-1'>
                <RatingStars rating={reviewScore} />
                <div className='flex flex-col sm:flex-row gap-[1px] sm:justify-between mt-[5px] w-full'>
                    <h2 className='text-xs sm:text-[1.1rem] text-blackPrimary font-medium sm:font-bold truncate'>{foodTitle}</h2>
                    <div className='flex flex-row justify-between items-center gap-1 [&_p]:text-grayPrimary [&_p]:text-sm [&_p]:font-bold'>
                        <p className='sm:text-[1.1rem] truncate'>${price} USD</p>
                        <div className='flex gap-[1px] items-baseline sm:hidden'>
                            <p>{reviewScore}</p>
                            <StarCardFoodReviews
                                color="#FF7300"
                                widthClass="w-[12px]"
                                heightClass="h-[11.25px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {openDetails && (
                <div
                    className={`fixed bottom-0 right-0 z-50 bg-white transition-all duration-300 slide-up`}
                    style={{ height: 'calc(100vh - 7rem)' }}
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
