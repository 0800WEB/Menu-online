import SectionHeaderWithNav from "./SectionHeaderWithNav"
import FoodCard3D from "./FoodCard3D";
import { BEST_RATED_PRODUCTS_TITLE, RECOMMENDED_TAG } from "../utils/consts/consts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const TopRatedPreview = () => {
    const products = useSelector((state) => state.products.items);

    const [listProducts, setListProducts] = useState([])

    const quantityProducts = listProducts.length

    useEffect(() => {
        setListProducts(products)
    }, [products])

    return (
        <div className='flex flex-col gap-7 '>
            <SectionHeaderWithNav titleChildren={BEST_RATED_PRODUCTS_TITLE} quantity={quantityProducts} />
            <div className="h-full w-full overflow-x-auto scrollbar-hide">
                <div className="h-full flex gap-4 w-max pl-1 pr-2 pb-2">
                    {listProducts.map((menu, index) => (
                        <FoodCard3D
                            id={menu.dataBaseId}
                            foodTitle={menu.foodTitle}
                            img={menu.image}
                            description={menu.description}
                            price={menu.price}
                            reviewScore={menu.reviews}
                            promoted={RECOMMENDED_TAG}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopRatedPreview