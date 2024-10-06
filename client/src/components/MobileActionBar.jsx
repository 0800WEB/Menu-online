import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconHomeNav from './Icons/IconHomeNav';
import IconOffersNav from './Icons/IconOffersNav';
import IconNotificationsNav from './Icons/IconNotificationsNav';
import IconProfileNav from './Icons/IconProfileNav';
import { HOME, NOTIFICATIONS, OFFERS, PROFILE_USER } from '../routes/constPath';

const ACTIVE_COLOR = '#FF7300';
const INACTIVE_COLOR = '#A1A1A1';

const MobileActionBar = () => {
    const [isActive, setIsActive] = useState('home');

    const handleTabChange = (tab) => {
        setIsActive(tab);
    };

    return (
        <nav className="w-full h-16 flex items-center px-8 shadow-customMediumToTop">
            <ul className='w-full flex justify-between items-center py-2 px-[1.4rem]'>
                <li>
                    <Link to={HOME} aria-label="Ir a Inicio" onClick={() => handleTabChange('home')}>
                        <IconHomeNav width={20} height={22} color={isActive === 'home' ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
                <li>
                    <Link to={OFFERS} aria-label="Ver ofertas" onClick={() => handleTabChange('offers')}>
                        <IconOffersNav width={23.25} height={23.25} color={isActive === 'offers' ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
                <li>
                    <Link to={NOTIFICATIONS} aria-label="Ver notificaciones" onClick={() => handleTabChange('notifications')}>
                        <IconNotificationsNav width={19} height={23} color={isActive === 'notifications' ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
                <li>
                    <Link to={PROFILE_USER} aria-label="Ir al perfil" onClick={() => handleTabChange('profile')}>
                        <IconProfileNav width={19} height={23} color={isActive === 'profile' ? ACTIVE_COLOR : INACTIVE_COLOR} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileActionBar;
