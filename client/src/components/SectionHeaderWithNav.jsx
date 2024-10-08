import { ReactComponent as Icon } from "../assets/svg/arrow-direction-right.svg"
const SectionHeaderWithNav = ({ titleChildren, quantity }) => {
    return (
        <div className="flex gap-3 items-center w-max px-1">
            <p className="leading-5 font-bold">{titleChildren}</p>
            <div className="w-max bg-black py-1 gap-1 pr-1 pl-2 rounded flex items-center">
                <p className="text-white text-xs">{quantity || 0}</p>
                <Icon />
            </div>
        </div>

    )
}

export default SectionHeaderWithNav