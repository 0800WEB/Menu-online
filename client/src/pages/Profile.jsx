import { useEffect, useState } from "react";
import photoProfileMock from "../assets/images/profileMock.webp";
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import {
    LOGOUT_TEXT
} from "../utils/consts/consts";
import { handleLogout } from "../contextAuth/handleLogout";
import { useDispatch } from "react-redux";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleLogoutClick = () => {
        handleLogout(dispatch);
    };

    if (!userData) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="h-full w-full mx-auto bg-white overflow-y-scroll scrollbar-hide flex flex-col justify-center gap-6">
            <div className="flex justify-center pt-5">
                <img
                    className="w-24 h-24 rounded-full object-cover border-4"
                    src={userData.image || photoProfileMock}
                    alt="Foto de Perfil"
                />
            </div>
            <div className="text-center py-5">
                <h2 className="text-2xl font-semibold">{userData.name}</h2>
                <p className="text-gray-600">{userData.email}</p>
            </div>
            <div className="px-5 pb-5">
                <div className="flex justify-between items-center mb-2">
                    <span>Notificaciones</span>
                    <input type="checkbox" className="toggle" />
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span>Idioma</span>
                    <select className="border border-gray-300 rounded p-1 text-sm [&_option]:text-xs">
                        <option value="Español">Español</option>
                        <option value="Inglés">Inglés</option>
                    </select>
                </div>
            </div>
            <div className="px-5 pb-5 mx-auto">
                <ButtonSecondary textChildren={LOGOUT_TEXT} onClick={handleLogoutClick} className="w-full  text-white" />
            </div>
        </div>
    );
};

export default Profile;
