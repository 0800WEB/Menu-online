import FoodCard3D from "./FoodCard3D";
import { STANDARD_TAG } from "../utils/consts/consts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MenuCatalog = () => {


    const products = useSelector((state) => state.products.items);

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        setListProducts(products)
    }, [products])

    return (
        <div className="h-full overflow-y-scroll scrollbar-hide sm:overflow-auto flex flex-wrap gap-4 justify-between sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  sm:gap-x-6  sm:gap-y-7 justify-items-center">
            {listProducts.map((menu, index) => (
                <FoodCard3D
                    id={menu.dataBaseId}
                    foodTitle={menu.foodTitle}
                    img={menu.image}
                    description={menu.description}
                    price={menu.price}
                    reviewScore={menu.reviews}
                    promoted={STANDARD_TAG}
                    key={index}
                />
            ))}
        </div>
    );
};

export default MenuCatalog;
