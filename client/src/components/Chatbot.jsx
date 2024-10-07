import { useState, useEffect, useRef } from 'react';
import chefBot from "../assets/svg/chef-brand-icon.svg";
import iconBack from "../assets/svg/arrow-to-left.svg";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { SENDER_CHEF, SENDER_USER, TITLE_CHATBOT } from '../utils/consts/consts';

const Chatbot = ({ closeChatBot }) => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy tu chef virtual, ¿En qué puedo ayudarte hoy?", sender: SENDER_CHEF }
    ]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null); // Ref para el final del contenedor de mensajes

    const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch('http://localhost:4000/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: input })
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        const botMessage = { text: data.response, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        const errorMessage = { text: "Lo siento, hubo un error al procesar tu mensaje.", sender: "bot" };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setLoading(false);
      }
    }
  };

    const getChefResponse = (userInput) => {
        if (userInput.toLowerCase().includes("postres")) {
            return { text: "Por supuesto, ofrecemos una amplia variedad de postres. ¿Estás buscando alguno en específico?", sender: SENDER_CHEF };
        }
        return { text: "Lo siento, no tengo información sobre eso. ¿Te gustaría preguntar otra cosa?", sender: SENDER_CHEF };
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
