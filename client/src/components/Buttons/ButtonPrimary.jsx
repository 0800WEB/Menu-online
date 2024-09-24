const ButtonPrimary = ({ textChildren, typeButton, onClick }) => {
    return (
        <button
            className="max-w-max min-h-7 sm:h-[2.9rem] px-5 py-[0.65rem] rounded-custom-1 text-[0.95rem] font-medium  text-white bg-highlight"
            type={typeButton}
            aria-label={textChildren}
            onClick={onClick}
        >
            {textChildren}
        </button>
    )
}

export default ButtonPrimary