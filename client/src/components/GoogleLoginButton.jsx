import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { baseURL } from '../config';
import { authApiServer } from '../utils/api/consts/auth';

const GoogleLoginButton = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(''); // estado para el mensaje de éxito

    const handleSuccess = async (response) => {
        setLoading(true);
        const token = response.credential;

        // enviar el token al backend
        try {
            const res = await axios.post(`${baseURL}${authApiServer}`, { // Corrige la concatenación
                token,
            });

            console.log('usuario autenticado en el backend:', res.data);
            localStorage.setItem('authToken', res.data.token);

            // guardar la fecha de expiración (4horas)
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 4);
            localStorage.setItem('tokenExpiration', expirationDate.toISOString());

            // Establecer el mensaje de éxito
            setSuccessMessage('¡Inicio de sesión exitoso!'); // Mensaje de éxito

        } catch (error) {
            console.error('error al enviar el token al backend:', error);
            // manejo de errores más detallado
            if (error.response) {
                setError('error en la autenticación: ' + error.response.data.message);
            } else {
                setError('error al comunicarse con el servidor.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleError = (error) => {
        console.log('falló la autenticación con google:', error);
        setError('falló la autenticación. intenta de nuevo.');
    };

    // verificar si token expiro
    const isTokenExpired = () => {
        const expirationDate = localStorage.getItem('tokenExpiration');
        return new Date() > new Date(expirationDate);
    };

    // función para manejar el cierre de sesión
    const handleLogout = () => {
        localStorage.removeItem('authToken'); // eliminar el token
        localStorage.removeItem('tokenExpiration'); // eliminar la fecha de expiración
        console.log('usuario cerrado sesión'); // puedes redirigir o mostrar un mensaje aquí
        setSuccessMessage(''); // Restablecer el mensaje de éxito
    };

    // verificar el estado del token regularmente
    useEffect(() => {
        const interval = setInterval(() => {
            if (isTokenExpired()) {
                console.error('el token ha expirado. por favor, inicia sesión nuevamente.');
                handleLogout(); // cerrar sesión si el token ha expirado
            }
        }, 60000); // verificar cada minuto

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                cookiePolicy={"single_host_policy"}
            />
            {loading && <div>cargando...</div>} {/* mostrar mensaje de carga */}
            {error && <div className="text-red-500">{error}</div>} {/* mostrar error si existe */}

            {/* Mensaje de éxito que ocupa toda la pantalla */}
            {successMessage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 text-white text-2xl">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default GoogleLoginButton;
