import { useState, useEffect, useRef } from 'react';
import chefBot from "../assets/svg/chef-brand-icon.svg";
import iconBack from "../assets/svg/arrow-to-left.svg";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { SENDER_CHEF, SENDER_USER, TITLE_CHATBOT } from '../utils/consts/consts';
import axiosInstace from '../utils/api/axiosInstance';
import { API_CHATBOT_SERVER } from '../utils/api/consts/chatbot';

const Chatbot = ({ closeChatBot }) => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy tu chef virtual, ¿En qué puedo ayudarte hoy?", sender: SENDER_CHEF }
    ]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null); // Ref para el final del contenedor de mensajes

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: SENDER_USER };
            setMessages((prev) => [...prev, userMessage]);
            setInput("");
            setLoading(true);

            try {
                const response = await axiosInstace.post(API_CHATBOT_SERVER, {
                    message: input
                });
                console.log(response)
                const botMessage = { text: response.data.response, sender: SENDER_CHEF };
                setMessages((prev) => [...prev, botMessage]);

            } catch (error) {
                let errorMessage;

                if (error.response) {
                    errorMessage = {
                        text: "Lo siento, hubo problemas con nuestros servidores. Por favor, inténtalo más tarde.",
                        sender: SENDER_CHEF
                    };
                } else if (error.request) {
                    errorMessage = {
                        text: "No se pudo conectar al servidor. Parece que el servicio no está en línea.",
                        sender: SENDER_CHEF
                    };
                } else {
                    errorMessage = {
                        text: "No se pudo enviar el mensaje. Hubo un problema en la aplicación.",
                        sender: SENDER_CHEF
                    };
                }
                setMessages((prev) => [...prev, errorMessage]);

            } finally {
                setLoading(false);
            }
        }
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
