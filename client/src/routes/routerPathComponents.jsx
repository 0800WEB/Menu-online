import MenuCatalog from "../components/MenuCatalog";
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import DetailFood from "../components/DetailFood"

const routerPathComponents = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/cardFood',
        element: <MenuCatalog />
    },
    {
        path: '/detailFood',
        element: <DetailFood />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routerPathComponents;