const ButtonSecondary = ({ textChildren, typeButton, onClick, className  }) => {
    return (
        <button
            className={`min-h-7 px-4 rounded-custom-1 text-[0.95rem] font-medium text-white bg-blackPrimary ${className}`}
            type={typeButton}
            aria-label={textChildren}
            onClick={onClick}
        >
            {textChildren}
        </button>
    );
}

export default ButtonSecondary;
