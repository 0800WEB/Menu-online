import iconSend from "../assets/svg/rectangle-direction-right.svg";

const ChatInput = ({ inputValue, onInputChange, onSend }) => {

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSend();
        }
    };

    return (
        <div className="bg-white p-4 flex gap-3 items-center">
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Escribe un mensaje..."
                className="flex-1 h-full border rounded-lg px-2 outline-none bg-graySecondary text-sm"
            />
            <button onClick={onSend} className="bg-blackPrimary text-white rounded-full p-4 pl-5">
                <img src={iconSend} alt="icon Send" />
            </button>
        </div>
    );
};

export default ChatInput;
