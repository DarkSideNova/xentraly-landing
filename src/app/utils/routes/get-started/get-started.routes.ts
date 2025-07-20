import GetStartedIndex from "@/app/pages/get-started";
import IRoutes from "../routes";
import DriverIndex from "@/app/pages/get-started/driver";

const getStartedRoutes: IRoutes[] = [
    {
        path: '/get-started',
        element: GetStartedIndex,
        children: [
            {
                path: '/get-started/driver',
                element: DriverIndex
            }
        ]
    }
]

export default getStartedRoutes;