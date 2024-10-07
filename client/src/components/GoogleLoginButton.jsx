import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { baseURL } from '../config';
import { authApiServer } from '../utils/api/consts/auth';

const GoogleLoginButton = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSuccess = async (response) => {
        setLoading(true);
        const token = response.credential; // Asegúrate de que este token es el correcto

        try {
            const res = await axios.post(`${baseURL}${authApiServer}`, { tokenId: token }); // Asegúrate de que la clave sea 'tokenId'
            console.log('Usuario autenticado en el backend:', res.data);
            localStorage.setItem('authToken', res.data.token);

            // Guardar la fecha de expiración (6 horas)
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 6);
            localStorage.setItem('tokenExpiration', expirationDate.toISOString());

            // Establecer el mensaje de éxito
            setSuccessMessage('¡Inicio de sesión exitoso!');
        } catch (error) {
            console.error('Error al enviar el token al backend:', error);
            if (error.response) {
                setError('Error en la autenticación: ' + error.response.data.message);
            } else {
                setError('Error al comunicarse con el servidor.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleError = (error) => {
        console.log('Falló la autenticación con Google:', error);
        setError('Falló la autenticación. Intenta de nuevo.');
    };

    const isTokenExpired = () => {
        const expirationDate = localStorage.getItem('tokenExpiration');
        return new Date() > new Date(expirationDate);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('tokenExpiration');
        console.log('Usuario cerró sesión');
        setSuccessMessage('');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTokenExpired()) {
                console.error('El token ha expirado. Por favor, inicia sesión nuevamente.');
                handleLogout();
            }
        }, 15000); // Verificar cada minuto

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                cookiePolicy={"single_host_policy"}
            />
            {loading && <div>Cargando...</div>}
            {error && <div className="text-red-500">{error}</div>}

            {successMessage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 text-white text-2xl">
                    {successMessage}
                    <button
                        className="ml-3 text-sm font-bold"
                        onClick={handleLogout}
                    >Cerrar sesion</button>
                </div>
            )}
        </div>
    );
};

export default GoogleLoginButton;
