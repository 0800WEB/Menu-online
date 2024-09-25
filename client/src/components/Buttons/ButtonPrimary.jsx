const ButtonPrimary = ({ textChildren, typeButton = 'button', onClick, className }) => {
    return (
        <button
            className={`max-w-max min-h-7 sm:h-[2.9rem] px-5 py-[0.65rem] rounded-custom-1 text-[0.95rem] font-medium text-white bg-highlight ${className}`}
            type={typeButton}
            aria-label={textChildren}
            onClick={onClick}
        >
            {textChildren}
        </button>
    );
}

export default ButtonPrimary