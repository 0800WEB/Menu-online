import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import DetailFood from '../components/DetailFood';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Notifications from '../pages/Notifications';
import { HOME, NOTIFICATIONS, OFFERS, PROFILE_USER, SEARCH_RESULTS } from './constPath';
import Offers from '../pages/Offers';
import Profile from '../pages/Profile';
import SearchResultsContainer from '../components/SearchResultsContainer';
import PrivateRoute from '../contextAuth/PrivateRoute';
import { AuthProvider } from '../contextAuth/AuthContext';

const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path={HOME} element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path={NOTIFICATIONS} element={<PrivateRoute><Notifications /></PrivateRoute>} />
                    <Route path={OFFERS} element={<PrivateRoute><Offers /></PrivateRoute>} />
                    <Route path="detailFood" element={<PrivateRoute><DetailFood /></PrivateRoute>} />
                    <Route path={PROFILE_USER} element={<PrivateRoute><Profile /></PrivateRoute>} />
                    <Route path={SEARCH_RESULTS} element={<PrivateRoute><SearchResultsContainer /></PrivateRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default AppRouter;
