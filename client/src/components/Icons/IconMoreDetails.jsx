import { ReactComponent as Icon } from '../../assets/svg/more-details-icon.svg';

const IconMoreDetails = ({ widthClass, heightClass , bgColor }) => {
    return (
        <div className={`relative rounded-full ${bgColor} ${widthClass} ${heightClass} mx-auto`}>
            <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
        </div>
    );
}

export default IconMoreDetails;
