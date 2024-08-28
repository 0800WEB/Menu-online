import Home from "../pages/Home"
import NotFound from "../pages/NotFound";

const routerPathComponents = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routerPathComponents;