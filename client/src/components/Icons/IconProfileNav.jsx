import { ReactComponent as Icon } from '../../assets/svg/avatar-icon-navigation.svg'

const IconProfileNav = ({ className, color, width, height }) => {
    return (
        <Icon
            className={className}
            width={width}
            height={height}
            style={{ fill: color }}
        />
    )
}

export default IconProfileNav;