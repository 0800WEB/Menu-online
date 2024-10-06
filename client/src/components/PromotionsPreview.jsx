import SectionHeaderWithNav from "./SectionHeaderWithNav"
import { foodCardData } from "../assets/other-assets/mookMenus"
import FoodCard3D from "./FoodCard3D";
import { PROMOTION_TITLE, RECOMMENDED_TAG } from "../utils/consts/consts";

const PromotionsPreview = () => {
    return (
        <div className="flex flex-col gap-6 w-full">
            <SectionHeaderWithNav titleChildren={PROMOTION_TITLE} />

            <div className="h-full w-full overflow-x-auto">
                <div className="h-full flex gap-4 w-max pl-1 pr-2 pb-2">
                    {
                        foodCardData.map((menu, index) => (
                            <FoodCard3D
                                foodTitle={menu.foodTitle}
                                img={menu.img}
                                description={menu.description}
                                price={menu.price}
                                reviewScore={menu.reviewScore}
                                promoted={RECOMMENDED_TAG}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PromotionsPreview;
