const ButtonSecondary = ({ textChildren, typeButton, onClick }) => {
    return (
        <button
            className="max-w-max min-h-7 px-4 rounded-custom-1 text-[0.95rem] font-medium  text-white bg-blackPrimary"
            type={typeButton}
            aria-label={textChildren}
            onClick={onClick}
        >
            {textChildren}
        </button>
    )
}

export default ButtonSecondary