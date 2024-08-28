import { Routes } from 'react-router-dom'
import renderRoutes from './renderRoutes'
import routerPathComponents from './routerPathComponents'
const AppRouter = () => {
    return (
        <Routes>
            {renderRoutes(routerPathComponents)}
        </Routes>
    )
}

export default AppRouter;