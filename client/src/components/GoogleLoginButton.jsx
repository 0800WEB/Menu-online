import { useState, useEffect, useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { baseURL } from '../config';
import { authApiServer } from '../utils/api/consts/auth';
import { AuthContext } from '../contextAuth/AuthContext';
import { setUser } from '../state/slices/user/user';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../contextAuth/handleLogout';

const GoogleLoginButton = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);

    const dispatch = useDispatch()

    const handleSuccess = async (response) => {
        setLoading(true);
        const token = response.credential;

        try {
            const res = await axios.post(`${baseURL}${authApiServer}`, { tokenId: token });
            const user = res.data.user
            dispatch(setUser(user))
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('userData', JSON.stringify(user));

            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 6);
            localStorage.setItem('tokenExpiration', expirationDate.toISOString());

            login();
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

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTokenExpired()) {
                handleLogout(dispatch);
            }
        }, 60000);

        return () => clearInterval(interval);
    }, [dispatch]);


    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                cookiePolicy={"single_host_policy"}
            />
        </div>
    );
};

export default GoogleLoginButton;
