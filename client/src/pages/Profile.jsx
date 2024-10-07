import { userMock } from "../assets/other-assets/profileUserMock";
import photoProfileMock from "../assets/images/profileMock.webp";
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import {
    ORDER_HISTORY_TEXT,
    EDIT_PROFILE_TEXT,
    PAYMENT_METHODS_TEXT,
    ADDRESSES_TEXT,
    LOGOUT_TEXT
} from "../utils/consts/consts";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Profile = () => {
    const USER_NAME = userMock.name;
    const USER_EMAIL = userMock.email;
    const LANGUAGES = userMock.languages;



    const handleEditProfile = () => {
        console.log("Editar Perfil clicked");
    };

    const handleOrderHistory = () => {
        console.log("Historial de Pedidos clicked");
    };

    const handlePaymentMethods = () => {
        console.log("Métodos de Pago clicked");
    };

    const handleAddresses = () => {
        console.log("Direcciones clicked");
    };

    const handleLogout = () => {
        console.log("Cerrar Sesión clicked");
    };

    return (
        <div className="h-full  w-full mx-auto bg-white  overflow-y-scroll scrollbar-hide flex flex-col justify-between">
            {/* <div className="flex justify-center pt-5">
                <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-500"
                    src={photoProfileMock}
                    alt="Foto de Perfil"
                />
            </div>
            <div className="text-center py-5">
                <h2 className="text-2xl font-semibold">{USER_NAME}</h2>
                <p className="text-gray-600">{USER_EMAIL}</p>
            </div>
            <div className="px-5 pb-5 flex flex-col w-full items-center gap-5">
                <ButtonSecondary textChildren={EDIT_PROFILE_TEXT} onClick={handleEditProfile} />
                <ButtonSecondary textChildren={ORDER_HISTORY_TEXT} onClick={handleOrderHistory} />
                <ButtonSecondary textChildren={PAYMENT_METHODS_TEXT} onClick={handlePaymentMethods} />
                <ButtonSecondary textChildren={ADDRESSES_TEXT} onClick={handleAddresses} />
            </div>
            <div className="px-5 pb-5">
                <div className="flex justify-between items-center mb-2">
                    <span>Notificaciones</span>
                    <input type="checkbox" className="toggle" />
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span>Idioma</span>
                    <select className="border border-gray-300 rounded p-1">
                        {LANGUAGES.map((language, index) => (
                            <option key={index}>{language}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="px-5 pb-5 mx-auto">
                <ButtonSecondary textChildren={LOGOUT_TEXT} onClick={handleLogout} className="w-full bg-red-500 text-white hover:bg-red-600" />
            </div> */}
            <GoogleLoginButton />
        </div>
    );
};

export default Profile;
