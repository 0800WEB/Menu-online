import { useEffect, useState } from 'react';
import arrowToScroll from "../assets/svg/arrow-direction-down.svg";

const ScrollDownArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mainElement = document.querySelector('main');

        const checkScrollVisibility = () => {
            const scrollableElements = mainElement.querySelectorAll('*');
            let hasScrollableChild = false;

            // Comprobar si alguno de los elementos descendientes tiene scroll
            scrollableElements.forEach((child) => {
                const { scrollHeight, clientHeight } = child;
                if (scrollHeight > clientHeight) {
                    hasScrollableChild = true;
                }
            });

            setIsVisible(hasScrollableChild);
        };

        const handleScroll = (event) => {
            const target = event.target;
            const { scrollTop, scrollHeight, clientHeight } = target;

            setIsVisible(scrollHeight > clientHeight && scrollTop < scrollHeight - clientHeight);
        };

        // Agregar eventos de scroll a los elementos descendientes de main
        const addScrollListeners = () => {
            const scrollableElements = mainElement.querySelectorAll('*');
            scrollableElements.forEach((child) => {
                const { scrollHeight, clientHeight } = child;
                if (scrollHeight > clientHeight) {
                    child.addEventListener('scroll', handleScroll);
                }
            });
        };

        // Inicializar la detección de scroll
        checkScrollVisibility();
        addScrollListeners();

        // Observador para detectar cambios en los hijos de main
        const observer = new MutationObserver(() => {
            checkScrollVisibility();
            addScrollListeners(); // Re-agregar listeners a nuevos elementos
        });

        observer.observe(mainElement, { childList: true, subtree: true });

        // Limpiar el observer y los eventos al desmontar
        return () => {
            observer.disconnect();
            const scrollableElements = mainElement.querySelectorAll('*');
            scrollableElements.forEach((child) => {
                child.removeEventListener('scroll', handleScroll);
            });
        };
    }, []);

    const scrollToBottom = () => {
        const mainElement = document.querySelector('main');
        const scrollableElements = mainElement.querySelectorAll('*');

        for (let child of scrollableElements) {
            const { scrollHeight, clientHeight } = child;
            if (scrollHeight > clientHeight) {
                // Desplazar hacia el final
                child.scrollTo({
                    top: child.scrollTop + 124, // Desplazar al final
                    behavior: 'smooth',
                });
                break; // No es necesario continuar
            }
        }
    };

    return (
        isVisible && (
            <div className="absolute bottom-[4rem] right-[5%] cursor-pointer bg-white rounded-full p-2 shadow-md" onClick={scrollToBottom}>
                <img src={arrowToScroll} alt="arrowScroll" />
            </div>
        )
    );
};

export default ScrollDownArrow;
