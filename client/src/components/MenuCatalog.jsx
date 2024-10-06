import FoodCard3D from "./FoodCard3D";
import { foodCardData } from "../assets/other-assets/mookMenus";
import { STANDARD_TAG } from "../utils/consts/consts";

const MenuCatalog = () => {
    return (
        <div className="h-full overflow-y-scroll scrollbar-hide sm:overflow-auto flex flex-wrap justify-center sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-[1.125rem] sm:gap-x-6 gap-y-2 sm:gap-y-7 justify-items-center">
            {
                foodCardData.map((menu, index) => {
                    return (
                        <FoodCard3D
                            id={menu.id}
                            foodTitle={menu.foodTitle}
                            img={menu.img}
                            description={menu.description}
                            price={menu.price}
                            reviewScore={menu.reviews}
                            promoted={STANDARD_TAG}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
};

export default MenuCatalog;
