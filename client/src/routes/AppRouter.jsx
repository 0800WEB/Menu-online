import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import DetailFood from '../components/DetailFood';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Notifications from '../pages/Notifications';
import { HOME, NOTIFICATIONS, OFFERS, PROFILE_USER } from './constPath';
import Offers from '../pages/Offers';
import Profile from '../pages/Profile';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path={HOME} element={<Home />} />
                <Route path={NOTIFICATIONS} element={<Notifications />} />
                <Route path={OFFERS} element={<Offers />} />
                <Route path="detailFood" element={<DetailFood />} />
                <Route path={PROFILE_USER} element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
