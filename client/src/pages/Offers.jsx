import PromotionsPreview from "../components/PromotionsPreview";
import TopRatedPreview from "../components/TopRatedPreview";

const Offers = () => {
    return (
        <div className="relative h-full overflow-y-scroll scrollbar-hide flex flex-col [&>div]:min-h-max justify-start gap-16" >
            <TopRatedPreview />
            <PromotionsPreview />
        </div>
    );
};

export default Offers;
