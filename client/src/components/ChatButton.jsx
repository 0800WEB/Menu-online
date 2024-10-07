import { useState } from 'react';
import Chatbot from './Chatbot';
import ButtonSecondary from './Buttons/ButtonSecondary';
import ButtonPrimary from './Buttons/ButtonPrimary';
import chefBot from "../assets/svg/chef-brand-icon.svg"
const TEXT_BUTTON_CHATBOT = "¿Ayuda del chef?"

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    console.log(isOpen)
    return (
        <div className='w-full flex gap-4 items-end mt-2'>
            <ButtonSecondary textChildren={TEXT_BUTTON_CHATBOT} className={'h-full max-h-[3.25rem] max-w-[100%] w-full rounded-[15px] rounded-br-none'} onClick={toggleChatbot} />
            <ButtonPrimary className={"rounded-[100px] rounded-bl-none px-[0.625rem] py-[0.7rem]"} icon={chefBot} onClick={toggleChatbot} />

            {isOpen && <Chatbot closeChatBot={toggleChatbot} />}
        </div>
    );
};

export default ChatButton;