import { ReactComponent as Icon } from '../../assets/svg/star-reviews.svg';

const StarCardFoodReviews = ({ color , widthClass , heightClass }) => {
    return (
        <div className={`${widthClass} ${heightClass}`}>
            <Icon style={{ fill: color }} className="w-full h-full" />
        </div>
    );
};

export default StarCardFoodReviews;
