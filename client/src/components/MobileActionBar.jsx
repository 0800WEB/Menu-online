import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconHomeNav from './Icons/IconHomeNav';
import IconOffersNav from './Icons/IconOffersNav';
import IconNotificationsNav from './Icons/IconNotificationsNav';
import IconProfileNav from './Icons/IconProfileNav';
import { HOME, NOTIFICATIONS, OFFERS, PROFILE_USER } from '../routes/constPath';

const ACTIVE_COLOR = '#FF7300';
const INACTIVE_COLOR = '#A1A1A1';

const MobileActionBar = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(HOME);

    useEffect(() => {
        switch (location.pathname) {
            case HOME:
                setIsActive(HOME);
                break;
            case OFFERS:
                setIsActive(OFFERS);
                break;
            case NOTIFICATIONS:
                setIsActive(NOTIFICATIONS);
                break;
            case PROFILE_USER:
                setIsActive(PROFILE_USER);
                break;
            default:
                setIsActive(HOME);
                break;
        }
    }, [location.pathname]);

    const handleTabChange = (tab) => {
        setIsActive(tab);
    };

    return (
        <nav className="w-full h-16 flex items-center px-8 shadow-customMediumToTop">
            <ul className='w-full flex justify-between items-center py-2 px-[1.4rem]'>
                <li>
                    <Link to={HOME} aria-label="Ir a Inicio" onClick={() => handleTabChange(HOME)}>
                        <IconHomeNav width={20} height={22} color={isActive === HOME ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
                <li>
                    <Link to={OFFERS} aria-label="Ver ofertas" onClick={() => handleTabChange(OFFERS)}>
                        <IconOffersNav width={23.25} height={23.25} color={isActive === OFFERS ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
                <li>
                    <Link to={NOTIFICATIONS} aria-label="Ver notificaciones" onClick={() => handleTabChange(NOTIFICATIONS)}>
                        <IconNotificationsNav width={19} height={23} color={isActive === NOTIFICATIONS ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
                <li>
                    <Link to={PROFILE_USER} aria-label="Ir al perfil" onClick={() => handleTabChange(PROFILE_USER)}>
                        <IconProfileNav width={19} height={23} color={isActive === PROFILE_USER ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileActionBar;
