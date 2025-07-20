import { Routes } from "react-router-dom"

import { Route } from "react-router-dom"
import IRoutes from "./routes";

const RouteChildren = ({ routes }: { routes: IRoutes[] }) => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default RouteChildren;
