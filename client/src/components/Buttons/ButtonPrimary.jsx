const ButtonPrimary = ({ textChildren, typeButton = 'button', onClick, className, icon, classNameIcon }) => {
    return (
        <button
            className={`flex items-center max-w-max min-h-7 sm:h-[2.9rem] px-5 py-[0.65rem] rounded-custom-1 text-[0.95rem] font-medium text-white bg-highlight ${className}`}
            type={typeButton}
            aria-label={textChildren}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="icon" className={`${classNameIcon}`} />}
            {textChildren}
        </button>
    );
}

export default ButtonPrimary;
