import { ReactComponent as Icon } from '../../assets/svg/notifications-icon-navigation.svg'

const IconNotificationsNav = ({ className, color, width, height }) => {
    return (
        <Icon
            className={className}
            width={width}
            height={height}
            style={{ fill: color }}
        />
    )
}

export default IconNotificationsNav