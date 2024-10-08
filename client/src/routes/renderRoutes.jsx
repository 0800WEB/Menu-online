import { Route } from "react-router-dom";

const renderRoutes = (arrayRoutes) => {
  return arrayRoutes.map((objectRoute, index) => {
    return (<Route key={index} path={objectRoute.path} element={objectRoute.element}></Route>);
  });
};
export default renderRoutes;