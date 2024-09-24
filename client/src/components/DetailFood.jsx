import ButtonSecondary from "./Buttons/ButtonSecondary";

const DetailFood = ({ id, foodTitle, img, description, price, reviewScore }) => {
    return (
        <div className="flex flex-col px-9 pt-9 pb-[4.7rem] h-full bg-orange-300 relative overflow-y-auto">
            <div className="w-full h-[35%] rounded-custom-1 overflow-hidden">
                <img className="size-full object-cover" src={img} alt={`${foodTitle} image`} />
            </div>
            <div className="flex flex-col gap-3 min-h-[30%] mt-3">
                <h3 className="text-lg leading-6 font-bold text-center">{foodTitle || "Título de Comida"}</h3>
                <p className="text-sm font-medium leading-5 line-clamp-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla commodi quod magni sed tenetur odit, obcaecati dolorum laudantium inventore atque esse tempore eos magnam, eveniet ipsa repellat blanditiis vel?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium, praesentium doloribus consequatur animi hic excepturi sequi, corporis ab sapiente earum nisi eaque cupiditate labore dicta iure quod dolor magni?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident similique beatae sint expedita minima id rerum et voluptatum quaerat. Temporibus blanditiis error tempora dicta voluptate delectus quo iste tenetur.
                </p>
            </div>
            <div className="flex flex-wrap justify-between mt-[1.65rem]">
                <ButtonSecondary textChildren={"Reseñas"} typeButton={"button"} />
                <p>${price} USD</p>
            </div>
            <div className="mx-auto pt-2 mt-auto">
                <ButtonSecondary textChildren={"Déjanos tu Reseña"} typeButton={"button"} />
            </div>
        </div>
    );
};

export default DetailFood;
