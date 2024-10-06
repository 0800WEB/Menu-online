import { ReactComponent as Icon } from '../../assets/svg/3d-icon.svg';

const Icon3D = ({ className, color = "currentColor", width, height }) => {
    return (
        <Icon
            className={className}
            width={width}
            height={height}
            style={{ color }} 
        />
    );
};

export default Icon3D;