import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import DetailFood from '../components/DetailFood';
import Home from '../pages/Home';
import Layout from '../pages/Layout';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="home" element={<Home />} />
                <Route path="detailFood" element={<DetailFood />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
