import PromotionsPreview from "../components/PromotionsPreview";
import TopRatedPreview from "../components/TopRatedPreview";

const Offers = () => {
    return (
        <div className="relative h-full overflow-y-scroll scrollbar-hide flex flex-col [&>div]:min-h-max gap-5 justify-around" >
            <TopRatedPreview />
            <PromotionsPreview />
        </div>
    );
};

export default Offers;
