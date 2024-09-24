import { ReactComponent as Icon } from '../../assets/svg/home-icon-navigation.svg';

const IconHomeNav = ({ className, color, width, height }) => {
    return (
        <Icon
            className={className}
            width={width}
            height={height}
            style={{ fill: color }}
        />
    );
};

export default IconHomeNav;