import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        return payload; // Retorna la información del usuario
    } catch (error) {
        console.error('Error al verificar el token de Google:', error);
        throw new Error('Token no válido');
    }
};

export const googleLogin = async (req, res) => {
    const { tokenId } = req.body; // Recibe el token enviado desde el frontend

    try {
        // Verificar el token con Google
        const userInfo = await verifyGoogleToken(tokenId);

        // Buscar si el usuario ya existe en la base de datos
        let user = await User.findOne({ email: userInfo.email });

        if (user) {
            if (!user.googleId) {
                user.googleId = userInfo.sub;
                user.provider = 'google';
                await user.save();
            }
        } else {
            user = await User.create({
                name: userInfo.name,
                email: userInfo.email,
                googleId: userInfo.sub,
                provider: 'google',
                image: userInfo.picture || 'no image',
                user_type: 'client' // Tipo de usuario por defecto
            });
        }

        // Generar un token JWT para la sesión del usuario
        const token = user.generateAuthToken();

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error);
        res.status(400).json({ error: 'Error al iniciar sesión con Google' });
    }
};
