import loginIcon from "../assets/svg/login-icon.svg"
import logoFood from "../assets/svg/food-brand.svg"
import searchLoupe from "../assets/svg/search-loupe.svg"
import arrowRight from "../assets/svg/arrow-direction-right.svg"
import moredetails from "../assets/svg/more-details-icon.svg"
import chefBrand from "../assets/svg/chef-brand-icon.svg"
import rectangleToRight from "../assets/svg/rectangle-direction-right.svg"
import homeIcon from "../assets/svg/home-icon-navigation.svg"
import starIcon from "../assets/svg/star-icon-navigation.svg"
import avatarIcon from "../assets/svg/avatar-icon-navigation.svg"
import notifications from "../assets/svg/notifications-icon-navigation.svg"
import starReviews from "../assets/svg/star-reviews.svg"
const Home = () => {
    return (
        <div>
            <button className="bg-black size-60">
                <img src={loginIcon} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={starReviews} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={notifications} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={avatarIcon} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={starIcon} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={arrowRight} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={chefBrand} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={homeIcon} alt="" />
            </button>
            <button className="bg-black size-60">
                <img src={rectangleToRight} alt="" />
            </button>
            <button className=" size-60">
                <img src={logoFood} alt="" />
            </button>
            <button className=" size-60">
                <img src={moredetails} alt="" />
            </button>
            <button className=" size-60">
                <img src={searchLoupe} alt="" />
            </button>
        </div>
    )
}

export default Home