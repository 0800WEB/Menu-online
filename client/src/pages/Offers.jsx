import PromotionsPreview from "../components/PromotionsPreview"
import TopRatedPreview from "../components/TopRatedPreview"

const Offers = () => {
    return (
        <div className="h-full overflow-y-scroll scrollbar-hide bg-red-300 flex flex-col [&>div]:h-1/2 gap-5">
            <TopRatedPreview />
            <PromotionsPreview />
        </div>
    )
}

export default Offers