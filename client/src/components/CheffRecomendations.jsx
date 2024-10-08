import SectionHeaderWithNav from "./SectionHeaderWithNav"
import FoodCard3D from "./FoodCard3D";
import { CHEF_RECOMMENDATIONS_TITLE, RECOMMENDED_TAG } from "../utils/consts/consts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CheffRecomendations = () => {
    const products = useSelector((state) => state.products.items);

    const [listProducts, setListProducts] = useState([])

    const quantityProducts = listProducts.length

    useEffect(() => {
        setListProducts(products)
    }, [products])

    return (
        <div className="flex flex-col gap-6 w-full">
            <SectionHeaderWithNav titleChildren={CHEF_RECOMMENDATIONS_TITLE} quantity={quantityProducts} />

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

export default CheffRecomendations