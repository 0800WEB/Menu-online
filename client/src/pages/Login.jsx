import { useState } from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';
import {
    TITLE_LOGIN,
    REMEMBER_ME_LABEL,
    FORGOT_PASSWORD_TEXT,
    LOGIN_BUTTON_TEXT,
    LOGIN_WITH_TEXT
} from '../utils/consts/consts';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Contraseña:", password);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-12 h-full w-full">
            <h1 className="text-2xl font-bold text-center">{TITLE_LOGIN}</h1>
            <div className='w-full flex flex-col gap-8'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col px-2 gap-8'>
                    <div className="flex flex-col gap-4 [&>input]:rounded-3xl [&>input]:px-3 [&>input]:py-[0.6rem] [&>input]:bg-grayLight text-sm text-grayPrimary font-semibold [&>input]:outline-none">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm text-blackPrimary font-bold">
                        <div className='flex gap-2'>
                            <input
                                type="radio"
                                id="remember"
                                className="form-radio text-black checked:bg-black focus:ring-0"
                            />
                            <label htmlFor="remember">{REMEMBER_ME_LABEL}</label>
                        </div>
                        <p>
                            <a href="/forgot-password" className="underline font-medium">{FORGOT_PASSWORD_TEXT}</a>
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-highlight text-white rounded-3xl py-3"
                    >
                        {LOGIN_BUTTON_TEXT}
                    </button>
                </form>
                <div className="flex flex-col gap-8 text-center w-full px-3">
                    <div className="flex items-center w-full">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="mx-4 text-grayPrimary">{LOGIN_WITH_TEXT}</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="flex justify-center w-full">
                        <GoogleLoginButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
