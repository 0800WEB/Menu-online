import chefBot from "../assets/svg/chef-brand-icon.svg";
import { SENDER_CHEF, SENDER_USER } from '../utils/consts/consts';

const ChatMessage = ({ sender, text }) => {
    const isChefBot = sender === SENDER_CHEF;
    const isUser = sender === SENDER_USER;

    return (
        <div className={`w-full mb-4 flex flex-col  gap-2 ${isChefBot ? "items-start" : isUser ? "items-end" : ""}`}>
            {isChefBot && (
                <div className="w-max flex-shrink-0 bg-orange-500 rounded-full p-2">
                    <img
                        src={chefBot}
                        alt="Chef Bot"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            )}
            <div className={`p-3 rounded-lg max-w-xs shadow-md w-full 
                ${isChefBot ? "bg-blackPrimary text-white" : isUser ? "bg-gray-200 text-black" : "bg-blue-200 text-black"}`}>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
