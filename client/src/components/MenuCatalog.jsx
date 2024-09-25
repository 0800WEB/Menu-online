import FoodCard3D from "./FoodCard3D";
import { foodCardData } from "../assets/other-assets/mookMenus";

const MenuCatalog = () => {
    return (
        <div className="h-full overflow-y-scroll scrollbar-hide sm:overflow-auto bg-yellow-100 flex flex-wrap justify-center sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-[1.125rem] sm:gap-x-6 gap-y-2 sm:gap-y-7 justify-items-center">
            {
                foodCardData.map((menu, index) => {
                    return (
                        <FoodCard3D
                            foodTitle={menu.foodTitle}
                            img={menu.img}
                            description={menu.description}
                            price={menu.price}
                            reviewScore={menu.reviewScore}
                            promoted={"standard"}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
};

export default MenuCatalog;
