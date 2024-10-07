import { useState, useEffect, useRef } from 'react';
import chefBot from "../assets/svg/chef-brand-icon.svg";
import iconBack from "../assets/svg/arrow-to-left.svg";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { SENDER_CHEF, SENDER_USER, TITLE_CHATBOT } from '../utils/consts/consts';

const Chatbot = ({ closeChatBot }) => {
    const [messages, setMessages] = useState([
        { text: "Hola, soy el Chef. ¿Te gustaría que te hiciera una recomendación?", sender: SENDER_CHEF }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null); // Ref para el final del contenedor de mensajes

    const handleSend = () => {
        if (input.trim() === "") return;

        const userMessage = { text: input, sender: SENDER_USER };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInput("");

        // Simular una petición HTTP para obtener la respuesta del Chef
        simulateApiRequest(input).then(chefResponse => {
            setMessages(prevMessages => [...prevMessages, chefResponse]);
        });
    };

    const getChefResponse = (userInput) => {
        if (userInput.toLowerCase().includes("postres")) {
            return { text: "Por supuesto, ofrecemos una amplia variedad de postres. ¿Estás buscando alguno en específico?", sender: SENDER_CHEF };
        }
        return { text: "Lo siento, no tengo información sobre eso. ¿Te gustaría preguntar otra cosa?", sender: SENDER_CHEF };
    };

    // Función para simular una petición a una API
    const simulateApiRequest = (userInput) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const response = getChefResponse(userInput);
                resolve(response);
            }, 1000); // Simula un retardo de 1 segundo
        });
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="w-full fixed top-0 left-0 flex flex-col h-screen bg-white rounded-lg shadow-lg">
            <div className="bg-blackPrimary text-white p-9 flex justify-between items-center">
                <button onClick={closeChatBot}>
                    <img src={iconBack} alt="icon go back" />
                </button>
                <div className='w-max h-max gap-[0.65rem] flex items-center'>
                    <img src={chefBot} alt="icon brand Chef" />
                    <h2 className="text-base font-bold">{TITLE_CHATBOT}</h2>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <ChatMessage sender={msg.sender} text={msg.text} key={index} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput
                inputValue={input}
                onInputChange={(e) => setInput(e.target.value)}
                onSend={handleSend}
            />
        </div>
    );
};

export default Chatbot;
